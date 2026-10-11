<script setup>
import { study, books } from '../data.js'
</script>

<template>
  <section id="study" class="section">
    <div class="container">
      <div class="section__head" v-reveal>
        <span class="section__kicker">Study</span>
        <h2 class="section__title">学苑</h2>
        <p class="section__sub">各科的学习门道，和一起读过的书。</p>
      </div>

      <div class="study__tips">
        <div v-for="s in study" :key="s.subject" class="card study__tip" v-reveal>
          <span class="study__subj">{{ s.subject }}</span>
          <p>{{ s.tip }}</p>
        </div>
      </div>

      <div class="books">
        <div class="books__head" v-reveal>
          <h3 class="books__title">推荐书单</h3>
          <p class="books__sub">一个人读的书，就是他要去的远方。</p>
        </div>
        <div class="grid grid--4 books__grid">
          <div v-for="b in books" :key="b.title" class="card book" v-reveal>
            <span class="book__tag">{{ b.tag }}</span>
            <h4 class="book__title">{{ b.title }}</h4>
            <p class="book__note">{{ b.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.study__tips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 52px;
}
.study__tip { display: flex; gap: 16px; align-items: flex-start; padding: 20px 22px; }
.study__subj {
  flex-shrink: 0;
  font-family: var(--font-serif);
  font-size: 0.86rem;
  letter-spacing: 0.1em;
  color: var(--cinnabar);
  border: 1px solid var(--cinnabar-wash);
  background: var(--cinnabar-wash);
  padding: 4px 12px;
  border-radius: 999px;
  white-space: nowrap;
}
.study__tip p { color: var(--ink-soft); font-size: 0.96rem; line-height: 1.8; }

.books { border-top: 1px solid var(--line); padding-top: 44px; }
.books__head { text-align: center; margin-bottom: 26px; }
.books__title { font-size: 1.6rem; margin-bottom: 6px; }
.books__sub { color: var(--ink-mute); font-size: 0.92rem; }
.book {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
}
.book__tag {
  align-self: flex-start;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--gold);
  background: var(--gold-wash);
  padding: 2px 10px;
  border-radius: 999px;
}
.book__title { font-size: 1.05rem; line-height: 1.4; }
.book__note { color: var(--ink-mute); font-size: 0.86rem; line-height: 1.7; }
@media (max-width: 700px) { .study__tips { grid-template-columns: 1fr; } }
</style>
