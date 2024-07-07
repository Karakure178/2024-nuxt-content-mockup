<script setup>
import { tagParameter } from "./tagParameter";
const props = defineProps({
  tag: { type: String, required: true },
});

const addClass = computed(() => {
  return tagParameter[props.tag];
});
</script>

<template>
  <div class="tag" :class="addClass">
    <span class="tag__text">{{ props.tag }}</span>
  </div>
</template>

<style lang="scss" scoped>
// ===========================================
// tag
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
  color: $color-primary_white;
  font-size: 12px;

  @include L-XL {
  }

  @include S-M {
  }
}

// ===========================================
// 別々のカラー設定
// ===========================================
.tag--news {
  background-color: $color-primary_orange;
}

.tag--vue {
  background-color: $color-primary_blue;
}

.tag--next {
  background-color: $color-primary_green;
}
</style>
