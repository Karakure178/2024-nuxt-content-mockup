<script setup>
const logoUrl = "/assets/image/common/header/icon.svg";
</script>

<template>
  <div class="header__logo">
    <img :src="logoUrl" alt="karakure178 logo" />
  </div>
</template>

<style lang="scss" scoped>
// ===========================================
// ロゴ設定
// ===========================================
.header__logo {
  position: absolute;
  top: 50%;
  border: 1px solid #fff;
  border-radius: 5px;
  transform: translateY(-50%);

  @include L-XL {
    width: 60px;
  }

  @include S-M {
    width: 29px;
  }

  img {
    width: 100%;
  }
}
</style>
