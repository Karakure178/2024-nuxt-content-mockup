<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__inner">
      <CommonHeaderLogo />
      <CommonHeaderNav />
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
</style>
