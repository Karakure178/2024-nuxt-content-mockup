<script setup>
const props = defineProps({
  date: { type: String, required: true },
});
</script>

<template>
  <div class="date">
    <span class="date__text">{{ props.date }}</span>
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
