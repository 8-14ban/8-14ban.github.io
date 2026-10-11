<script setup>
import { about } from '../data.js'
</script>

<template>
  <section id="about-site" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">About Site</span>
        <h2 class="section__title">{{ about.title }}</h2>
      </div>

      <div class="asite">
        <div class="card asite__text" v-reveal>
          <p v-for="(p, i) in about.paragraphs" :key="i">{{ p }}</p>
          <a v-if="about.repo" class="btn" :href="about.repo" target="_blank" rel="noopener">查看源码仓库</a>
        </div>
        <div class="asite__facts" v-reveal>
          <div v-for="f in about.facts" :key="f.k" class="asite__fact">
            <span>{{ f.k }}</span>
            <b :class="{ hl: f.hl }">{{ f.v }}</b>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.asite {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 28px;
  align-items: stretch;
}
.asite__text { display: flex; flex-direction: column; gap: 16px; font-size: 1rem; color: var(--ink-soft); line-height: 1.95; }
.asite__text .btn { align-self: flex-start; margin-top: 8px; }
.asite__facts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.asite__fact {
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.asite__fact span { font-size: 0.76rem; letter-spacing: 0.12em; color: var(--ink-mute); }
.asite__fact b { font-size: 1rem; font-weight: 600; }
.asite__fact b.hl { color: var(--cinnabar); font-family: var(--font-serif); }
@media (max-width: 720px) {
  .asite { grid-template-columns: 1fr; }
}
</style>
