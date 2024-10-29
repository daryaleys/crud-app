<script setup lang="ts">
import { ItemType } from "../../types/ItemType";
import SingleItem from "./SingleItem.vue";

defineProps<{
    items: ItemType[];
}>();
</script>

<template>
    <table v-if="items.length" class="w-full bg-blue-50 table-fixed border-collapse border border-green-400 rounded overflow-hidden">
        <thead>
            <tr>
                <th class="border border-slate-300 py-2">ID</th>
                <th class="border border-slate-300 py-2">Заголовок</th>
                <th class="border border-slate-300 py-2">Описание</th>
                <th class="border border-slate-300 py-2">Опубликовано</th>
                <th class="border border-slate-300 py-2">Дата публикации</th>
                <th class="border border-slate-300 py-2">Действия</th>
            </tr>
        </thead>
        <tbody>
            <SingleItem v-for="item in items" :key="item.id" v-bind="item" @deleteItem="$emit('deleteItem', item.id)" />
        </tbody>
    </table>
    <h2 v-else>Список пуст</h2>
</template>

<style scoped></style>
