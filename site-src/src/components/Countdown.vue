<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { countdown } from '../data.js'

const target = new Date(countdown.target + 'T00:00:00+08:00').getTime()
const now = ref(Date.now())
let timer = null

const parts = computed(() => {
  let diff = Math.max(0, target - now.value)
  const d = Math.floor(diff / 86400000)
  diff -= d * 86400000
  const h = Math.floor(diff / 3600000)
  diff -= h * 3600000
  const m = Math.floor(diff / 60000)
  diff -= m * 60000
  const s = Math.floor(diff / 1000)
  return [
    { v: String(d).padStart(2, '0'), u: '天' },
    { v: String(h).padStart(2, '0'), u: '时' },
    { v: String(m).padStart(2, '0'), u: '分' },
    { v: String(s).padStart(2, '0'), u: '秒' }
  ]
})

onMounted(() => { timer = setInterval(() => (now.value = Date.now()), 1000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="countdown">
    <div class="countdown__label">
      <span>{{ countdown.label }}</span>
    </div>
    <div class="countdown__grid">
      <div v-for="p in parts" :key="p.u" class="countdown__cell">
        <b>{{ p.v }}</b>
        <em>{{ p.u }}</em>
      </div>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  text-align: center;
}
.countdown__label {
  font-size: 0.95rem;
  letter-spacing: 0.28em;
  color: var(--cinnabar-on-dark);
  margin-bottom: 18px;
  font-weight: 600;
}
.countdown__grid {
  display: flex;
  justify-content: center;
  gap: clamp(8px, 2vw, 16px);
}
.countdown__cell {
  background: rgba(242, 237, 228, 0.08);
  border: 1px solid rgba(242, 237, 228, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  min-width: clamp(64px, 12vw, 96px);
  padding: clamp(12px, 2vw, 20px) 8px;
}
.countdown__cell b {
  display: block;
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 6vw, 3.2rem);
  color: #fff;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.countdown__cell em {
  display: block;
  font-style: normal;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  color: var(--cinnabar-on-dark);
  margin-top: 8px;
}
</style>
