<script setup>
import { site, contact } from '../data.js'
</script>

<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img :src="site.logo" :alt="site.name + '班徽'" loading="lazy" />
          <div>
            <b>{{ site.name }}</b>
            <em>{{ site.school }}</em>
          </div>
        </div>

        <div class="footer__col">
          <h4>联系</h4>
          <p>{{ contact.address }}</p>
          <p>{{ contact.teacher }}</p>
          <p>{{ contact.maintainer }}</p>
        </div>

        <div class="footer__col">
          <h4>更多</h4>
          <a href="/naiwa/" target="_blank" rel="noopener">奶蛙跑酷 · 小游戏</a>
          <p class="footer__note">{{ contact.note }}</p>
        </div>
      </div>

      <div class="footer__bar">
        <span>© 2026 {{ site.name }} · 班级文化</span>
        <span>临沂郑旺中学</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: rgba(242, 237, 228, 0.8);
  padding: clamp(44px, 6vw, 64px) 0 0;
  margin-top: 0;
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 40px;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}
.footer__brand img {
  width: 52px;
  height: 52px;
  border-radius: 13px;
  object-fit: cover;
}
.footer__brand b { display: block; font-family: var(--font-serif); font-size: 1.15rem; color: #fff; }
.footer__brand em { display: block; font-style: normal; font-size: 0.78rem; color: rgba(242, 237, 228, 0.6); margin-top: 3px; letter-spacing: 0.08em; }
.footer__col h4 {
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  margin-bottom: 14px;
  font-weight: 600;
}
.footer__col p { font-size: 0.9rem; line-height: 1.9; color: rgba(242, 237, 228, 0.7); }
.footer__col a { color: var(--cinnabar-on-dark); font-size: 0.92rem; }
.footer__col a:hover { color: #fff; }
.footer__note { margin-top: 12px; font-size: 0.8rem; color: rgba(242, 237, 228, 0.45); }
.footer__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 1px solid rgba(242, 237, 228, 0.12);
  padding: 18px 0;
  font-size: 0.8rem;
  color: rgba(242, 237, 228, 0.5);
  flex-wrap: wrap;
}
@media (max-width: 720px) {
  .footer__grid { grid-template-columns: 1fr; }
}
</style>
