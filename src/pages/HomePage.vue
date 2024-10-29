<script setup lang="ts">
import { computed, onMounted, Ref, ref, watch } from "vue";
import { ItemType } from "../types/ItemType";
import list from "../data/list.json?url";
import ItemsList from "../components/item-list/ItemsList.vue";

const items: Ref<ItemType[]> = ref([]);

let itemsLoading = ref(false);
let errorLoading = ref(false);

const getItems = (): void => {
    itemsLoading.value = true;
    // запрос на получение списка сущностей
    fetch(list)
        .then((response) => response.json())
        .then((data) => {
            items.value = data.data;
        })
        .catch(() => (errorLoading.value = true))
        .finally(() => (itemsLoading.value = false));
};

const deleteItem = (id: number): void => {
    items.value = items.value.filter((item: ItemType) => item.id !== id);
};

let searchValue = ref("");
const filteredItems = computed(() => {
    return items.value.filter((item: ItemType) => item.title.toLowerCase().includes(searchValue.value.toLowerCase()));
})

onMounted(() => {
    getItems();
});
</script>

<template>
    <div class="flex flex-col gap-4 items-start">
        <RouterLink to="/create" class="bg-blue-500 rounded-md px-6 py-2">Создать сущность</RouterLink>

        <input type="text" placeholder="Поиск по заголовку" class="input input-bordered w-full max-w-xs border border-blue-400 rounded-md p-2" v-model="searchValue">

        <h2 v-if="itemsLoading">Загрузка...</h2>
        <h2 v-else-if="errorLoading">Не удалось загрузить информацию. Пожалуйста, попробуйте позже</h2>
        <ItemsList v-else :items="filteredItems" @deleteItem="deleteItem" />
    </div>
</template>

<style scoped>
</style>
