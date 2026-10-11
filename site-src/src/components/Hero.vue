<script setup>
import { site } from '../data.js'
import Countdown from './Countdown.vue'
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <img :src="site.blackboard" alt="" loading="lazy" />
      <div class="hero__veil"></div>
    </div>

    <div class="container hero__content">
      <div class="hero__logo">
        <img :src="site.logo" :alt="site.name + '班徽'" loading="lazy" />
      </div>
      <div class="hero__school">{{ site.school }}</div>
      <h1 class="hero__title">{{ site.name }}</h1>
      <p class="hero__emblem">「{{ site.emblem }}」 · {{ site.slogan }}</p>
      <p class="hero__motto">{{ site.motto }}</p>
      <p class="hero__intro">{{ site.intro[0] }}</p>

      <Countdown class="hero__count" />

      <div class="hero__stats">
        <div v-for="s in site.stats" :key="s.label" class="hero__stat">
          <b>{{ s.value }}</b><em>{{ s.label }}</em>
        </div>
      </div>

      <a class="hero__scroll" href="#about" @click.prevent="$event && (document.getElementById('about').scrollIntoView({behavior:'smooth'}))">
        向下浏览班级简介
        <span>↓</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
  padding-top: 66px;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(26, 26, 24, 0.55) 0%, rgba(26, 26, 24, 0.68) 55%, rgba(20, 20, 24, 0.9) 100%);
}
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: clamp(40px, 8vh, 90px);
  padding-bottom: clamp(40px, 8vh, 90px);
}
.hero__logo {
  width: 96px;
  height: 96px;
  margin: 0 auto 26px;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid rgba(242, 237, 228, 0.35);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.6);
}
.hero__logo img { width: 100%; height: 100%; object-fit: cover; }
.hero__school {
  font-size: 0.9rem;
  letter-spacing: 0.42em;
  color: var(--cinnabar-on-dark);
  margin-bottom: 16px;
  font-weight: 600;
}
.hero__title {
  font-size: clamp(2.6rem, 9vw, 5rem);
  color: #fff;
  letter-spacing: 0.08em;
  line-height: 1.1;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
.hero__emblem {
  margin-top: 14px;
  font-size: clamp(0.95rem, 2.4vw, 1.2rem);
  letter-spacing: 0.14em;
  color: #f2ede4;
}
.hero__motto {
  margin-top: 10px;
  font-size: clamp(0.82rem, 2vw, 0.98rem);
  letter-spacing: 0.22em;
  color: var(--cinnabar-on-dark);
  font-weight: 600;
}
.hero__intro {
  max-width: 560px;
  margin: 20px auto 0;
  font-size: clamp(0.95rem, 2.2vw, 1.08rem);
  line-height: 1.9;
  color: rgba(242, 237, 228, 0.85);
}
.hero__count {
  margin-top: clamp(28px, 5vw, 44px);
}
.hero__stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(24px, 6vw, 64px);
  margin-top: clamp(30px, 5vw, 46px);
  padding-top: 30px;
  border-top: 1px solid rgba(242, 237, 228, 0.16);
}
.hero__stat b {
  display: block;
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 4.5vw, 2.4rem);
  color: #fff;
  line-height: 1;
}
.hero__stat em {
  display: block;
  font-style: normal;
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  color: rgba(242, 237, 228, 0.7);
  margin-top: 8px;
}
.hero__scroll {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: clamp(30px, 5vw, 44px);
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  color: rgba(242, 237, 228, 0.85);
  transition: color 0.3s var(--ease);
}
.hero__scroll span { font-size: 1.1rem; animation: bounce 1.6s infinite; }
.hero__scroll:hover { color: #fff; }
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
</style>
