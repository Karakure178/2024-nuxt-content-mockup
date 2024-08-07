<script setup lang="ts">
interface Items {
  title: string;
  links: { text: string; link: string }[];
}

const items: Items[] = [
  {
    title: "Blog",
    links: [
      { text: "サイトを更新しました", link: "/blog/news/1" },
      { text: "radix-vueが楽しい", link: "/blog/vue/2" },
    ],
  },
  {
    title: "Works",
    links: [
      { text: "サイトを更新しました", link: "/works/1" },
      { text: "radix-vueが楽しい", link: "/works/2" },
    ],
  },
];
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(item, index) in items"
        :key="`item--${index}`"
        class="nav__item"
      >
        <h2>{{ item.title }}</h2>
        <template v-for="(i, index2) in item.links" :key="`link--${index2}`">
          <a class="nav__link" :href="i.link">
            {{ i.text }}
          </a>
        </template>
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
