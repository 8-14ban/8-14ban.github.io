<script setup>
import { members } from '../data.js'
</script>

<template>
  <section id="members" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Members</span>
        <h2 class="section__title">班委</h2>
        <p class="section__sub">替大家操心的那些人。</p>
      </div>

      <div class="grid grid--4 members__grid">
        <div v-for="m in members" :key="m.role" class="card member" v-reveal>
          <span class="member__role">{{ m.role }}</span>
          <div class="member__names">
            <b v-for="n in m.names" :key="n">{{ n }}</b>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.member {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px;
  min-height: 120px;
  justify-content: space-between;
}
.member__role {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--cinnabar);
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px dashed var(--line);
}
.member__names { display: flex; flex-wrap: wrap; gap: 6px 14px; }
.member__names b { font-family: var(--font-serif); font-size: 1.15rem; }
</style>
