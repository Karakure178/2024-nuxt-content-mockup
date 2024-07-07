<script setup></script>

<template>
  <div class="codePattern">
    <div class="codePattern__inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.codePattern {
  background-color: $color-neutral_dark-content;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  margin-top: 16px;
  @include L-XL {
  }
  @include S-M {
  }
}

.codePattern__inner {
  overflow: scroll;
}
</style>
