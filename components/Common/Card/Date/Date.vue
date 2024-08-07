<script setup lang="ts">
interface Props {
  date: string;
}
const { date } = defineProps<Props>();
</script>

<template>
  <div class="date">
    <span class="date__text">{{ date }}</span>
  </div>
</template>

<style lang="scss" scoped>
// ===========================================
// date
// ===========================================
.tag {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 2px;
}

.tag__text {
  color: $color-primary_indigo;
  font-size: 12px;
  font-family: $roboto;
  letter-spacing: 0.02em;
  line-height: 1.2;
  @include L-XL {
  }

  @include S-M {
  }
}
</style>
