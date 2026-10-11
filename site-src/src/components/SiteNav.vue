<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site, nav } from '../data.js'

const solid = ref(false)
const open = ref(false)
const active = ref('hero')

let io = null

function scrollTo(id) {
  open.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  const onScroll = () => (solid.value = window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  )
  nav.forEach((n) => {
    const el = document.getElementById(n.id)
    if (el) io.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {})
  if (io) io.disconnect()
})
</script>

<template>
  <header class="nav" :class="{ 'nav--solid': solid, 'nav--open': open }">
    <div class="container nav__inner">
      <a class="brand" href="#hero" @click.prevent="scrollTo('hero')">
        <img class="brand__logo" :src="site.logo" :alt="site.name + '班徽'" loading="lazy" />
        <span class="brand__text">
          <b>{{ site.name }}</b>
          <em>{{ site.school }}</em>
        </span>
      </a>

      <nav class="nav__links" aria-label="主导航">
        <a
          v-for="n in nav"
          :key="n.id"
          :href="'#' + n.id"
          :class="{ on: active === n.id }"
          @click.prevent="scrollTo(n.id)"
        >{{ n.label }}</a>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="open"
        aria-label="打开导航菜单"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <Transition name="drawer">
      <div v-if="open" class="drawer" aria-label="移动端导航">
        <a
          v-for="(n, i) in nav"
          :key="n.id"
          :href="'#' + n.id"
          @click.prevent="scrollTo(n.id)"
        >
          <span class="drawer__idx">{{ String(i + 1).padStart(2, '0') }}</span>{{ n.label }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background 0.35s var(--ease), box-shadow 0.35s var(--ease), backdrop-filter 0.35s var(--ease);
  background: transparent;
}
.nav--solid {
  background: rgba(242, 237, 228, 0.9);
  backdrop-filter: saturate(1.4) blur(12px);
  box-shadow: 0 1px 0 var(--line-soft);
}
.nav__inner {
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
}
.brand__logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: var(--shadow-card);
}
.brand__text b {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  letter-spacing: 0.05em;
  color: var(--ink);
}
.brand__text em {
  display: block;
  font-style: normal;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--ink-mute);
  margin-top: 1px;
}
.nav__links {
  display: flex;
  gap: 4px;
  align-items: center;
}
.nav__links a {
  padding: 7px 13px;
  border-radius: 999px;
  font-size: 0.92rem;
  color: var(--ink-soft);
  transition: all 0.25s var(--ease);
}
.nav__links a:hover {
  color: var(--cinnabar);
  background: var(--cinnabar-wash);
}
.nav__links a.on {
  color: var(--cinnabar);
  background: var(--cinnabar-wash);
  font-weight: 600;
}
.nav__toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: none;
  background: var(--paper-card);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: var(--shadow-card);
}
.nav__toggle span {
  width: 18px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
}
.nav--open .nav__toggle span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav--open .nav__toggle span:nth-child(2) { opacity: 0; }
.nav--open .nav__toggle span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.drawer {
  position: fixed;
  inset: 66px 12px auto 12px;
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.drawer a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border-radius: 10px;
  color: var(--ink);
  font-size: 1.02rem;
}
.drawer a:hover { background: var(--paper-deep); }
.drawer__idx {
  font-family: var(--font-serif);
  font-size: 0.75rem;
  color: var(--cinnabar);
}

.drawer-enter-active, .drawer-leave-active { transition: all 0.28s var(--ease); }
.drawer-enter-from, .drawer-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 900px) {
  .nav__links { display: none; }
  .nav__toggle { display: flex; }
}
</style>
