<script setup>
import { teachers } from '../data.js'
</script>

<template>
  <section id="teachers" class="section">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Teachers</span>
        <h2 class="section__title">师者</h2>
        <p class="section__sub">陪我们走过三年的人</p>
      </div>

      <div class="teachers__head card" v-reveal>
        <div class="teachers__headtag">
          <span>{{ teachers.head.role }}</span>
          <em>{{ teachers.head.subject }}</em>
        </div>
        <div class="teachers__headmain">
          <h3 class="teachers__headname">{{ teachers.head.name }}</h3>
          <p class="teachers__headword">{{ teachers.head.word }}</p>
        </div>
      </div>

      <div class="grid grid--3 teachers__grid">
        <div v-for="t in teachers.list" :key="t.subject" class="card teachers__cell" v-reveal>
          <span class="teachers__subj">{{ t.subject }}</span>
          <b class="teachers__name">{{ t.name }}</b>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.teachers__head {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 22px;
  padding: 28px 30px;
}
.teachers__headtag {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 92px;
  height: 92px;
  border-radius: 18px;
  background: var(--cinnabar);
  color: #fff;
}
.teachers__headtag span { font-size: 1.05rem; font-weight: 700; letter-spacing: 0.1em; }
.teachers__headtag em { font-style: normal; font-size: 0.74rem; opacity: 0.85; letter-spacing: 0.2em; }
.teachers__headmain { flex: 1; }
.teachers__headname { font-size: 1.5rem; margin-bottom: 8px; }
.teachers__headword {
  color: var(--ink-soft);
  line-height: 1.9;
  font-size: 1rem;
}
.teachers__cell {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 24px;
}
.teachers__subj {
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  color: var(--gold);
  font-weight: 600;
}
.teachers__name { font-family: var(--font-serif); font-size: 1.2rem; }
@media (max-width: 560px) {
  .teachers__head { flex-direction: column; text-align: center; padding: 24px 20px; }
}
</style>
