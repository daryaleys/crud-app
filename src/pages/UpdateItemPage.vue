<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, Ref } from "vue";
import { ItemType } from "../types/ItemType";
import { onMounted } from "vue";
import ItemForm from "../components/form/ItemForm.vue";


const route = useRoute(), router = useRouter();
const itemId = route.params.id;

let currentItem: Ref<ItemType | null> = ref(null);

const getItem = () => {
    // запрос информации о текущей сущности по itemId (GET)
    // в итоге получаем, например:
    currentItem.value = {
        id: 0,
        title: "заголовок 1",
        description: "описание 1",
        published: true,
        published_from: "2022-11-11",
    };
};

const updateItem = (inputValues: { title: string; description: string; published: boolean }) => {
    // запрос на редактировние сущности (PUT), в теле запроса inputValues
    // после успешного создания переходимуем на страниц у сосписком сущностей, 
    // где при монтировании компонента будет запрошен список с актуальной информацией
    router.push('/')
}

onMounted(() => {
    getItem();
});
</script>

<template>
    <ItemForm v-if="currentItem" :oldTitle="currentItem.title" :oldDescription="currentItem.description"
        @submit="updateItem" />
    <h1 v-else>Не удалось загрузить информацию. Пожалуйста, попробуйте позже</h1>
</template>

<style scoped></style>
