<script setup lang="ts">
import ItemForm from '../components/form/ItemForm.vue';

const createItem = (inputValues: { title: string; description: string }) => {
    // запрос на создание новой сущности (POST)
    // после успешного создания переходимуем на страницу со списком сущностей
    // const route = useRoute();
    // console.log(route)
    // route.name = 'home';
}
</script>

<template>
    <ItemForm @submit="createItem"/>
</template>

<style scoped></style>
