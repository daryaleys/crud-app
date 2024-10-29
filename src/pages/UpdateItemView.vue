<script setup lang="ts">
import { useRoute } from 'vue-router'
import ItemForm from '../components/form/ItemForm.vue';
import { ref, Ref } from 'vue';
import { ItemType } from '../types/ItemType';

const route = useRoute();
const itemId = route.params.id;

let currentItem: Ref<ItemType | null> = ref(null);

// запрос информации о текущей сущность по id
// const url = `/api/getItem/${itemId}`;
// fetch(url).then(...)

currentItem.value = {
    id: 0,
    title: "111",
    description: "222",
    published: true,
    published_from: "2022-11-11"
}
</script>

<template>
    <ItemForm v-if="currentItem" :oldTitle="currentItem.title" :oldDescription="currentItem.description" />
    <h1 v-else>Не удалось загрузить пост. Пожалуйста, попробуйте позже</h1>
</template>

<style scoped></style>
