<script setup>
import { pact } from '../data.js'
</script>

<template>
  <section id="pact" class="section">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Pact</span>
        <h2 class="section__title">班级公约</h2>
        <p class="section__sub">{{ pact.lead }}</p>
      </div>

      <div class="pact__grid">
        <div v-for="(r, i) in pact.rules" :key="i" class="card pact__item" v-reveal>
          <span class="pact__no">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ r }}</p>
        </div>
      </div>

      <p class="pact__sign" v-reveal>{{ pact.sign }}</p>
    </div>
  </section>
</template>

<style scoped>
.pact__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.pact__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 22px;
}
.pact__no {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--cinnabar);
  line-height: 1.1;
  opacity: 0.7;
}
.pact__item p {
  color: var(--ink-soft);
  font-size: 0.98rem;
  line-height: 1.8;
}
.pact__sign {
  margin-top: 28px;
  text-align: center;
  font-size: 0.88rem;
  letter-spacing: 0.1em;
  color: var(--ink-mute);
}
@media (max-width: 700px) { .pact__grid { grid-template-columns: 1fr; } }
</style>
