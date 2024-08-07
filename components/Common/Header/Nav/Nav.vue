<script setup lang="ts">
interface NavList {
  id: number;
  title: string;
  link: string;
}
const navList: NavList[] = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "Blog", link: "/blog" },
  { id: 3, title: "Works", link: "/works" },
  { id: 4, title: "Contact", link: "/contact" },
];
</script>

<template>
  <nav class="headerNav">
    <ul class="headerNavList">
      <li
        v-for="(item, index) of navList"
        :key="`navList--${index}`"
        class="headerNavList__item"
      >
        <a class="headerNavListItem__link" :href="item.link">{{
          item.title
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
// ===========================================
// nav 全体設定
// ===========================================
.headerNav {
}

.headerNavList {
  display: flex;
  gap: 16px;
}

.headerNavList__item {
}

.headerNavListItem__link {
  font-size: 16px;
  font-family: $roboto;
  color: $color-neutral_dark-content;
  opacity: 1;
  transition: opacity 0.3s;

  @include L-XL {
  }

  @include S-M {
  }

  @include hover-and-active {
    opacity: 0.8;
  }
}
</style>
