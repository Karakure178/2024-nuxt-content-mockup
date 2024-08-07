<script setup lang="ts"></script>

<template>
  <h2 class="h2Headline">
    <slot />
  </h2>
</template>

<style lang="scss">
.h2Headline {
  color: $color-neutral_dark-content;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.5;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid $color-neutral_light-grey;
  @include L-XL {
  }
  @include S-M {
  }
}
</style>
