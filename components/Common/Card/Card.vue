<script setup>
const props = defineProps({
  href: { type: String, required: true },
  img: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
  tag: { type: String, required: true },
});
</script>

<template>
  <a class="card" :href="props.href">
    <div class="card__inner">
      <div class="card__img">
        <nuxt-img
          :src="props.img"
          quality="70"
          sizes="md:100% lg:297px"
          class="inline-block"
        />
      </div>

      <div class="card__tagGroup">
        <CommonCardTag :tag="props.tag" />
        <CommonCardDate :date="props.date" />
      </div>
      <div class="card__container">
        <h3 class="cardContainer__title">{{ props.title }}</h3>
        <p class="cardContainer__text">{{ props.text }}</p>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
// ===========================================
// card 全体設定
// ===========================================
.card {
  display: block;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 8px;
  border: 1px solid $color-neutral_light-content;
  max-width: 325px;
}

.card__inner {
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  @include L-XL {
  }

  @include S-M {
  }
}

.card__img {
  width: 278px;
  aspect-ratio: 278/190;
  overflow: hidden;
  @include L-XL {
  }

  @include S-M {
  }
  img {
    width: 100%;
    object-fit: contain;
  }
}

.card__tagGroup {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.card__container {
  margin-top: 8px;
}

.cardContainer__title {
  font-size: 24px;
  color: $color-neutral_dark-content;
  letter-spacing: 0.02em;
  font-weight: 500;
  @include L-XL {
  }

  @include S-M {
  }
}

.cardContainer__text {
  font-size: 14px;
  line-height: 1.5;
  color: $color-neutral_dark-content;
  letter-spacing: 0.02em;
  padding-top: 8px;

  @include L-XL {
  }

  @include S-M {
  }
}
</style>
