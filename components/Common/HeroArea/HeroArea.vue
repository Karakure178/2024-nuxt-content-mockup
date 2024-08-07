<script setup lang="ts"></script>

<template>
  <section class="hero">
    <h1 class="hero__headline">
      <slot />
    </h1>
    <slot name="description" />
  </section>
</template>

<style lang="scss">
.hero {
  background-color: $color-primary_red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include L-XL {
    height: 500px;
  }

  @include S-M {
    height: 250px;
  }
}

.hero__headline {
  color: $color-white;
  text-align: center;
  @include L-XL {
    font-size: 3.5rem;
  }
  @include S-M {
    font-size: 1.5rem;
  }
}
</style>
