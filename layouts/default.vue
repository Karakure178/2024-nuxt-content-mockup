<script setup></script>

<template>
  <CommonHeader />

  <main>
    <slot />
  </main>

  <CommonFooter />
</template>

<style lang="scss">
html {
  font-family: $notoSans;
  line-height: 1.5;
}
</style>
