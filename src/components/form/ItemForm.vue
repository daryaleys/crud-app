<script setup lang="ts">
const props = defineProps<{
    oldTitle?: string
    oldDescription?: string
}>()

const inputValues = {
    title: props.oldTitle ?? "",
    description: props.oldDescription ?? ""
}

const submit = () => {
    console.log(inputValues)
}
</script>

<template>
    <form @submit.prevent="submit">
        <div class="input-wrap">
            <label for="input-title" class="label">Заголовок</label>
            <input type="text" id="input-title" v-model="inputValues.title" class="input">
        </div>
        <div class="input-wrap">
            <label for="input-description" class="label">Описание</label>
            <input type="text" id="input-description" v-model="inputValues.description" class="input">
        </div>

        <button type="submit">Подтвердить</button>
    </form>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.input {
    background: rgb(187, 255, 187);
}
</style>
