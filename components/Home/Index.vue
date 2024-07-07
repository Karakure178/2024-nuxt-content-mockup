<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
</script>

<template>
  <pre>{{ navigation }}</pre>
</template>

<style lang="scss" scoped></style>
