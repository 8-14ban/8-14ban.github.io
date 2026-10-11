/* 八年级14班 · 交互脚本（原生 JS 版） */
(function () {
  'use strict';
  if (window.__NS) return; // 夜间关闭时段不初始化

  var d = document;
  var root = d.documentElement;

  /* ---------- 顶部阅读进度条 + 导航状态 ---------- */
  var bar = d.querySelector('.progress span');
  var nav = d.querySelector('.nav');
  var links = [].slice.call(d.querySelectorAll('.nav__links a, .drawer a'));
  var sections = ['hero', 'about', 'teachers', 'gallery', 'roster', 'timeline', 'honors', 'members', 'about-site', 'messages']
    .map(function (id) { return d.getElementById(id); })
    .filter(Boolean);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.pageYOffset || root.scrollTop || 0;
      var max = root.scrollHeight - root.clientHeight;
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
      if (nav) {
        nav.classList.toggle('nav--solid', y > 40);
        nav.classList.toggle('nav--ghost', y <= 40);
      }
      var cur = sections[0] ? sections[0].id : null;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= 140) cur = sections[i].id;
      }
      links.forEach(function (a) {
        a.classList.toggle('on', a.getAttribute('href') === '#' + cur);
      });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- 滚动渐显 ---------- */
  var reveals = [].slice.call(d.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- 移动端抽屉导航 ---------- */
  var toggle = d.querySelector('.nav__toggle');
  var drawerLinks = [].slice.call(d.querySelectorAll('.drawer a'));
  function closeDrawer() {
    if (!nav) return;
    nav.classList.remove('nav--open');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', '打开导航菜单'); }
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
      drawerLinks.forEach(function (a, i) { a.style.animationDelay = (i * 40) + 'ms'; });
    });
    drawerLinks.forEach(function (a) { a.addEventListener('click', closeDrawer); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  }

  /* ---------- 照片灯箱 ---------- */
  var cards = [].slice.call(d.querySelectorAll('#gallery .card__btn img'));
  var lb = null, lbImg = null, lbIdx = null, lbCap = null, lbCur = -1;

  function buildLb() {
    lb = d.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML =
      '<button class="lb__close" type="button" aria-label="关闭">×</button>' +
      '<button class="lb__nav lb__nav--prev" type="button" aria-label="上一张"> ‹ </button>' +
      '<figure class="lb__stage"><img alt=""><figcaption><span class="lb__idx"></span> <span class="lb__cap"></span></figcaption></figure>' +
      '<button class="lb__nav lb__nav--next" type="button" aria-label="下一张"> › </button>';
    d.body.appendChild(lb);
    lbImg = lb.querySelector('img');
    lbIdx = lb.querySelector('.lb__idx');
    lbCap = lb.querySelector('.lb__cap');
    lb.querySelector('.lb__close').addEventListener('click', closeLb);
    lb.querySelector('.lb__nav--prev').addEventListener('click', function () { step(-1); });
    lb.querySelector('.lb__nav--next').addEventListener('click', function () { step(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  }
  function show(i) {
    lbCur = (i + cards.length) % cards.length;
    var img = cards[lbCur];
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    var cap = '';
    var btn = img.closest('.card__btn');
    var capEl = btn && btn.querySelector('.card__cap');
    if (capEl) cap = capEl.textContent;
    lbIdx.textContent = ('0' + (lbCur + 1)).slice(-2) + ' / ' + cards.length;
    lbCap.textContent = cap;
    lb.setAttribute('aria-label', '照片查看器：' + cap);
  }
  function openLb(i) {
    if (!lb) buildLb();
    show(i);
    lb.style.display = '';
    d.body.classList.add('lb-lock');
  }
  function closeLb() {
    if (lb) lb.style.display = 'none';
    d.body.classList.remove('lb-lock');
    lbCur = -1;
  }
  function step(n) { if (lbCur >= 0) show(lbCur + n); }
  cards.forEach(function (img, i) {
    var btn = img.closest('.card__btn');
    if (btn) btn.addEventListener('click', function () { openLb(i); });
  });
  d.addEventListener('keydown', function (e) {
    if (lbCur < 0) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
  });

  /* ---------- 回到顶部 ---------- */
  var topBtn = d.querySelector('.foot__top');
  if (topBtn) topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 留言板（保存在本设备浏览器 localStorage） ---------- */
  var KEY = 'class14-board-v1';
  var NAME_KEY = 'class14-board-name';
  var form = d.getElementById('msgForm');
  var nameInput = d.getElementById('msgName');
  var textInput = d.getElementById('msgText');
  var listEl = d.getElementById('msgList');
  var countEl = d.getElementById('msgCount');

  function readAll() {
    try { var v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function writeAll(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* 隐私模式等场景忽略 */ }
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtTime(ts) {
    var t = new Date(ts);
    return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate()) + ' ' + pad(t.getHours()) + ':' + pad(t.getMinutes());
  }
  function render() {
    var list = readAll().slice().sort(function (a, b) { return b.ts - a.ts; });
    listEl.textContent = '';
    if (countEl) countEl.textContent = list.length ? '共 ' + list.length + ' 条留言' : '';
    if (!list.length) {
      var empty = d.createElement('div');
      empty.className = 'msg__empty';
      empty.textContent = '还没有留言，来写下第一条吧。';
      listEl.appendChild(empty);
      return;
    }
    list.forEach(function (m) {
      var item = d.createElement('div');
      item.className = 'msg__item';
      var meta = d.createElement('div');
      meta.className = 'msg__meta';
      var nm = d.createElement('span');
      nm.className = 'msg__name';
      nm.textContent = m.name || '匿名同学';
      var tm = d.createElement('span');
      tm.className = 'msg__time';
      tm.textContent = fmtTime(m.ts);
      meta.appendChild(nm); meta.appendChild(tm);
      var txt = d.createElement('p');
      txt.className = 'msg__text';
      txt.textContent = m.text;
      var del = d.createElement('button');
      del.className = 'msg__del';
      del.type = 'button';
      del.setAttribute('aria-label', '删除这条留言');
      del.textContent = '删除';
      del.addEventListener('click', function () {
        writeAll(readAll().filter(function (x) { return x.id !== m.id; }));
        render();
      });
      item.appendChild(meta); item.appendChild(txt); item.appendChild(del);
      listEl.appendChild(item);
    });
  }
  if (form && textInput && listEl) {
    try { nameInput.value = localStorage.getItem(NAME_KEY) || ''; } catch (e) { }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = (textInput.value || '').trim();
      if (!text) { textInput.focus(); return; }
      var name = (nameInput.value || '').trim().slice(0, 20);
      var m = { id: Date.now() + '-' + Math.random().toString(36).slice(2, 8), name: name, text: text.slice(0, 200), ts: Date.now() };
      writeAll(readAll().concat([m]));
      try { localStorage.setItem(NAME_KEY, name); } catch (err) { }
      textInput.value = '';
      render();
    });
    render();
  }
})();
