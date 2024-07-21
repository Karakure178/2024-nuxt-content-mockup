<script setup>
// const { data } = await useAsyncData("vue", () =>
//   queryContent("/blog/vue").findOne()
// );
// console.log(data, "hello");
useHead({
  title: "News",
});

// https://github.com/fayazara/zooper/blob/main/pages/articles/index.vue
const { data: news } = await useAsyncData("news", () =>
  queryContent("/blog").sort({ published: -1 }).find()
);
console.log(news.value, "hello");
</script>

<template>
  <!-- <pre>{{ navigation }}</pre> -->
  <div class="news">
    <div class="news__container">
      <h2 class="news__title">ブログ一覧</h2>
      <ul class="news__list">
        <li
          v-for="(item, index) in news"
          :key="`item--${index}`"
          class="news__item"
        >
          <CommonCard
            :href="item._path"
            :img="item.image"
            :date="item.date"
            :text="item.description"
            :title="item.title"
            :tag="item.tag"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  @include L-XL {
  }

  @include S-M {
  }
}

.news__container {
  @include L-XL {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @include S-M {
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
}

.news__title {
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.5;
  @include L-XL {
    font-size: 32px;
  }

  @include S-M {
    font-size: 24px;
  }
}

.news__list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  @include L-XL {
    padding-top: 24px;
    margin-top: 30px;
    border-top: 1px solid $color-neutral_light-grey;
    gap: 48px;
  }

  @include S-M {
    gap: 24px;
  }
}

.news__item {
  @include L-XL {
  }

  @include S-M {
  }
}
</style>
