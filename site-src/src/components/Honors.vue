<script setup>
import { honors } from '../data.js'
</script>

<template>
  <section id="honors" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Honors</span>
        <h2 class="section__title">荣誉墙</h2>
        <p class="section__sub">每一份努力都值得被记住。有荣誉，就上榜。</p>
      </div>

      <div class="honors__wall">
        <div v-for="(h, i) in honors" :key="i" class="honors__item" v-reveal>
          <div class="honors__seal">
            <span>{{ h.year }}</span>
          </div>
          <div class="honors__body">
            <h3 class="honors__title">{{ h.title }}</h3>
            <p class="honors__org">{{ h.org }}</p>
            <p v-if="h.note" class="honors__note">{{ h.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.honors__wall {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.honors__item {
  position: relative;
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 200px;
}
.honors__item::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px dashed var(--gold-wash);
  border-radius: 8px;
  pointer-events: none;
}
.honors__seal {
  align-self: flex-end;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--cinnabar);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px -8px var(--cinnabar);
}
.honors__seal span {
  font-family: var(--font-serif);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-align: center;
  line-height: 1.3;
}
.honors__title { font-size: 1.18rem; }
.honors__org { color: var(--ink-soft); font-size: 0.94rem; line-height: 1.8; }
.honors__note {
  margin-top: auto;
  font-size: 0.78rem;
  color: var(--ink-mute);
  border-top: 1px dashed var(--line);
  padding-top: 10px;
}
@media (max-width: 900px) { .honors__wall { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .honors__wall { grid-template-columns: 1fr; } }
</style>
