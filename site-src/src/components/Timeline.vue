<script setup>
import { timeline } from '../data.js'
</script>

<template>
  <section id="timeline" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Timeline</span>
        <h2 class="section__title">班级动态 · 纪事</h2>
        <p class="section__sub">我们的故事，一页页翻过去。新的篇章随时补充。</p>
      </div>

      <div class="tl">
        <div v-for="(t, i) in timeline" :key="i" class="tl__item" v-reveal>
          <div class="tl__rail">
            <span class="tl__dot"></span>
            <span v-if="i < timeline.length - 1" class="tl__line"></span>
          </div>
          <div class="tl__card">
            <div class="tl__meta">
              <span class="tl__date">{{ t.date }}</span>
              <span class="tl__tag">{{ t.tag }}</span>
            </div>
            <h3 class="tl__title">{{ t.title }}</h3>
            <p class="tl__text">{{ t.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl { max-width: 760px; margin: 0 auto; }
.tl__item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 18px;
}
.tl__rail { position: relative; display: flex; justify-content: center; }
.tl__dot {
  width: 16px;
  height: 16px;
  margin-top: 6px;
  border-radius: 50%;
  background: var(--cinnabar);
  border: 3px solid var(--paper);
  box-shadow: 0 0 0 2px var(--cinnabar);
}
.tl__line {
  position: absolute;
  top: 26px;
  bottom: -4px;
  width: 2px;
  background: var(--line);
}
.tl__card {
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 20px 24px;
  margin-bottom: 22px;
}
.tl__meta { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.tl__date {
  font-family: var(--font-serif);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  color: var(--cinnabar);
  font-weight: 600;
}
.tl__tag {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--gold);
  background: var(--gold-wash);
  padding: 2px 10px;
  border-radius: 999px;
}
.tl__title { font-size: 1.15rem; margin-bottom: 6px; }
.tl__text { color: var(--ink-soft); font-size: 0.96rem; line-height: 1.85; }
@media (max-width: 560px) {
  .tl__item { grid-template-columns: 24px 1fr; gap: 10px; }
}
</style>
