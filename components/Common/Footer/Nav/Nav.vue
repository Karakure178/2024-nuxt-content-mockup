<script setup>
const items = [
  {
    title: "Blog",
    link: [
      { title: "サイトを更新しました", link: "/blog/news/1" },
      { title: "radix-vueが楽しい", link: "/blog/vue/2" },
    ],
  },
  { title: "Works", link: [] },
];
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in items" :key="item.id" class="nav__item">
        <a class="nav__link" :href="item.link">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
// ===========================================
// footer navigation
// ===========================================
.nav {
}

.nav__list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav__item {
  list-style: none;
}
</style>
