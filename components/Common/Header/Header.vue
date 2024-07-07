<script setup>
const navList = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "Blog", link: "/blog" },
  { id: 3, title: "Works", link: "/works" },
  { id: 4, title: "Contact", link: "/contact" },
];
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <CommonHeaderLogo />
      <nav class="header__nav">
        <ul class="header__navList">
          <li
            v-for="item of navList"
            :key="item.title"
            class="headerNavList__item"
          >
            <a class="headerNavListItem__link" :href="item.link">{{
              item.title
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// ===========================================
// header 全体設定
// ===========================================
.header {
  width: 100%;
  background-color: $color-primary_orange;
}

.header__inner {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include L-XL {
    padding: 32px;
    max-width: 1080px;
  }

  @include S-M {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-inline: 15px;
  }
}

.header__nav {
}

.header__navList {
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
