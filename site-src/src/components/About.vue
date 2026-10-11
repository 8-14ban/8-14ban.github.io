<script setup>
import { site } from '../data.js'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">About</span>
        <h2 class="section__title">关于我们</h2>
        <p class="section__sub">一个从秋天开始的故事</p>
      </div>

      <div class="about__grid">
        <div class="card about__text" v-reveal>
          <p v-for="(p, i) in site.intro" :key="i" class="about__para">{{ p }}</p>
        </div>
        <div class="about__facts" v-reveal>
          <div v-for="s in site.stats" :key="s.label" class="about__fact">
            <b>{{ s.value }}</b>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 28px;
  align-items: stretch;
}
.about__text { font-size: 1.06rem; line-height: 2; color: var(--ink-soft); }
.about__para + .about__para { margin-top: 16px; }
.about__facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.about__fact {
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 22px 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about__fact b {
  font-family: var(--font-serif);
  font-size: 1.9rem;
  color: var(--cinnabar);
  line-height: 1;
}
.about__fact span {
  font-size: 0.86rem;
  letter-spacing: 0.12em;
  color: var(--ink-mute);
  margin-top: 8px;
}
@media (max-width: 720px) {
  .about__grid { grid-template-columns: 1fr; }
}
</style>
