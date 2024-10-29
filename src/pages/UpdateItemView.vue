<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { ItemType } from "../types/ItemType";
import { onMounted } from "vue";
import ItemForm from "../components/form/ItemForm.vue";

const route = useRoute();
const itemId = route.params.id;

let currentItem: Ref<ItemType | null> = ref(null);

const fetchItem = () => {
    // запрос информации о текущей сущности по id
    // const url = `/api/getItem/${itemId}`;
    // fetch(url).then(...)
    // в итоге получаем необходимый объект, например:
    currentItem.value = {
        id: 0,
        title: "заголовок 1",
        description: "описание 1",
        published: true,
        published_from: "2022-11-11",
    };
};

onMounted(() => {
    fetchItem();
});
</script>

<template>
    <ItemForm v-if="currentItem" :oldTitle="currentItem.title" :oldDescription="currentItem.description" />
    <h1 v-else>Не удалось загрузить информацию. Пожалуйста, попробуйте позже</h1>
</template>

<style scoped></style>
