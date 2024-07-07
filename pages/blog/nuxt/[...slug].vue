<script setup></script>

<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <ArticleLayout>
        <template #title>
          <Headline>{{ doc.title }}</Headline>
        </template>

        <template #content>
          <ContentRenderer :value="doc" />
        </template>
      </ArticleLayout>
    </ContentDoc>
  </NuxtLayout>
</template>
