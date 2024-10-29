<script setup lang="ts">
const props = defineProps<{
    id: number
    title: string
    description: string
    published: boolean
    published_from: string
}>()

const route = "/update/" + props.id;

const confirm = () => {
    // открытие модалки
}
</script>

<template>
    <div class="item" v-if="published">
        <span class="date">{{ published_from }}</span>
        <span class="title">{{ title }}</span>
        <span class="description">{{ description }}</span>

        <div class="btns">
            <RouterLink :to="route">Редактировать</RouterLink>
            <button @click="confirm">Удалить</button>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
