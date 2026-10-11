<script setup>
import { voices } from '../data.js'
</script>

<template>
  <section id="voices" class="section">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Voices</span>
        <h2 class="section__title">寄语</h2>
        <p class="section__sub">老师与同学想对十四班说的话。</p>
      </div>

      <div class="voices__list">
        <div v-for="(v, i) in voices" :key="i" class="card voice" v-reveal>
          <p class="voice__word">“{{ v.word }}”</p>
          <span class="voice__who">—— {{ v.role }}</span>
        </div>
        <p v-if="!voices.length" class="voices__empty">寄语整理中，欢迎投稿。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.voices__list { max-width: 720px; margin: 0 auto; }
.voice {
  padding: 30px 34px;
  text-align: center;
  position: relative;
}
.voice__word {
  font-family: var(--font-serif);
  font-size: 1.22rem;
  line-height: 2;
  color: var(--ink);
}
.voice__who {
  display: inline-block;
  margin-top: 16px;
  font-size: 0.86rem;
  letter-spacing: 0.1em;
  color: var(--ink-mute);
}
.voices__empty { text-align: center; color: var(--ink-mute); }
</style>
