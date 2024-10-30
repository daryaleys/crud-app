<script setup lang="ts">
import { useRouter } from 'vue-router';
import ItemForm from '../components/form/ItemForm.vue';

const router = useRouter();

const createItem = () => {
    // функция должна принимать inputValues: { title: string; description: string; published: boolean }
    // запрос на создание новой сущности (POST), в теле запроса inputValues
    // после успешного создания переходим на страницу со списком сущностей, 
    // где при монтировании компонента будет запрошен актуальный список
    router.push('/')
}
</script>

<template>
    <ItemForm @submit="createItem" />
</template>

<style scoped></style>
