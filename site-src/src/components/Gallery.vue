<script setup>
import { ref } from 'vue'
import { gallery } from '../data.js'

const active = ref(null)
function open(i) { active.value = i }
function close() { active.value = null }
function step(dir) {
  if (active.value === null) return
  active.value = (active.value + dir + gallery.length) % gallery.length
}
</script>

<template>
  <section id="gallery" class="section section--alt">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Gallery</span>
        <h2 class="section__title">班级风采</h2>
        <p class="section__sub">每一张照片，都是一段日子的证词。</p>
      </div>

      <div class="gal">
        <figure
          v-for="(g, i) in gallery"
          :key="g.src"
          class="gal__item"
          v-reveal
          @click="open(i)"
        >
          <img :src="g.src" :alt="g.alt" loading="lazy" decoding="async" />
          <figcaption>{{ g.caption }}</figcaption>
        </figure>
      </div>
    </div>

    <Transition name="lightbox">
      <div v-if="active !== null" class="lightbox" @click.self="close">
        <button class="lightbox__close" aria-label="关闭" @click="close">×</button>
        <button class="lightbox__nav lightbox__prev" aria-label="上一张" @click.stop="step(-1)">‹</button>
        <figure class="lightbox__frame" v-if="active !== null">
          <img :src="gallery[active].src" :alt="gallery[active].alt" />
          <figcaption>{{ gallery[active].caption }}</figcaption>
        </figure>
        <button class="lightbox__nav lightbox__next" aria-label="下一张" @click.stop="step(1)">›</button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.gal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.gal__item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  cursor: pointer;
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
}
.gal__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}
.gal__item:hover img { transform: scale(1.05); }
.gal__item figcaption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 30px 16px 14px;
  background: linear-gradient(180deg, transparent, rgba(20, 20, 18, 0.78));
  color: #fff;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
}
@media (max-width: 900px) { .gal { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .gal { grid-template-columns: 1fr; } }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(16, 16, 18, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 4vw;
}
.lightbox__frame {
  max-width: min(96vw, 1080px);
  max-height: 84vh;
  text-align: center;
}
.lightbox__frame img {
  max-width: 100%;
  max-height: 76vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8);
}
.lightbox__frame figcaption {
  margin-top: 14px;
  color: #f2ede4;
  letter-spacing: 0.08em;
  font-size: 1rem;
}
.lightbox__close {
  position: absolute;
  top: 22px;
  right: 26px;
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  border-radius: 50%;
}
.lightbox__close:hover { background: rgba(255, 255, 255, 0.24); }
.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  border-radius: 50%;
}
.lightbox__nav:hover { background: rgba(255, 255, 255, 0.22); }
.lightbox__prev { left: 18px; }
.lightbox__next { right: 18px; }

.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.3s var(--ease); }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
