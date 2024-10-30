<script setup lang="ts">
const props = defineProps<{
    oldTitle?: string;
    oldDescription?: string;
    oldPublished?: boolean;
}>();

const inputValues = {
    title: props.oldTitle ?? "",
    description: props.oldDescription ?? "",
    published: props.oldPublished ?? false,
};
</script>

<template>
    <form @submit.prevent="$emit('submit', inputValues)" class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1 w-full">
            <label for="input-title" class="label">Заголовок</label>
            <input type="text" id="input-title" v-model="inputValues.title"
                class="input input-bordered w-full border border-blue-400 rounded-md p-2" required maxlength="50" />
        </div>
        <div class="flex flex-col gap-1 w-full">
            <label for="input-description" class="label">Описание</label>
            <textarea id="input-description" v-model="inputValues.description"
                class="input input-bordered w-full border border-blue-400 rounded-md p-2" required></textarea>
        </div>

        <div class="flex items-center gap-3">
            <input type="checkbox" id="input-published" v-model="inputValues.published"
                class="appearance-none checked:bg-blue-500 w-5 h-5 border border-blue-400 rounded checkbox">
            <label for="input-published" class="label">Опубликовать</label>
        </div>

        <button type="submit" class="bg-blue-500 rounded-md px-6 py-2" S>Сохранить</button>
    </form>
</template>

<style scoped>
.checkbox {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    background-position: center center;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>
