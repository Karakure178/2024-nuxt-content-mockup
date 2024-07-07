<script setup></script>

<template>
  <h1 class="pageHeadline">
    <slot />
  </h1>
</template>

<style lang="scss">
.pageHeadline {
  color: $color-neutral_dark-content;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.5;
  @include L-XL {
  }
  @include S-M {
  }
}
</style>
