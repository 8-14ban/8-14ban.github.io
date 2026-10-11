<script setup>
import { roster } from '../data.js'
</script>

<template>
  <section id="roster" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Roster</span>
        <h2 class="section__title">班级成员</h2>
        <p class="section__sub">{{ roster.length }} 个名字，一面墙，一个十四班。</p>
      </div>

      <div class="roster__wall" v-reveal>
        <span v-for="n in roster" :key="n" class="roster__name">{{ n }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roster__wall {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}
.roster__name {
  background: var(--paper-card);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  padding: 16px 10px;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: var(--ink);
  transition: all 0.28s var(--ease);
}
.roster__name:hover {
  color: var(--cinnabar);
  background: #fff;
  transform: translateY(-3px);
  border-color: var(--cinnabar-wash);
}
@media (max-width: 900px) { .roster__wall { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 560px) { .roster__wall { grid-template-columns: repeat(3, 1fr); } }
</style>
