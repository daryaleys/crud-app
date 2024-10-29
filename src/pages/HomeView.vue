<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { ItemType } from '../types/ItemType';
import SingleItem from '../components/single-item/SingleItem.vue';

import list from "../data/list.json?url";

const items: Ref<ItemType[]> = ref([]);

let itemsLoading: Ref<boolean> = ref(false);
let errorLoading: Ref<boolean> = ref(false);

const fetchItems = (): void => {
    itemsLoading.value = true;
    // запрос на получение списка постов
    fetch(list)
        .then((response) => response.json())
        .then((data) => {
            items.value = data.data;
        })
        .catch(() => errorLoading.value = true)
        .finally(() => itemsLoading.value = false);
}

onMounted(() => {
    fetchItems();
})
</script>

<template>
    <div class="wrap">
        <RouterLink to="/create">Создать сущность</RouterLink>

        <h1 v-if="itemsLoading">Загрузка...</h1>
        <h1 v-if="errorLoading">Не удалось загрузить информацию. Пожалуйста, попробуйте позже</h1>

        <ul v-if="items.length" class="items-list">
            <SingleItem v-for="item in items" :key="item.id" v-bind="item" />
        </ul>
        <h1 v-else>Ещё нет ни одного поста</h1>
    </div>

</template>

<style scoped>
.wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.items-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.item {
    &:not(:last-child) {
        padding-bottom: 10px;
        border-bottom: 1px solid #000;
    }
}
</style>
