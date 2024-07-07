<script setup></script>

<template>
  <article class="article">
    <slot name="title" />
    <slot name="content" />
  </article>
</template>

<style lang="scss">
.article {
  @include L-XL {
    max-width: 900px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @include S-M {
    max-width: 600px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
