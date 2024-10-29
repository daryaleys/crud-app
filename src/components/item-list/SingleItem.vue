<script setup lang="ts">
import { ref, Ref } from 'vue';
import CustomModal from '../modal/CustomModal.vue';

const emit = defineEmits(['deleteItem'])

const props = defineProps<{
    id: number
    title: string
    description: string
    published: boolean
    published_from: string
}>()

let modalOpen: Ref<boolean> = ref(false);

const deleteItem = (): void => {
    const currentPostId = props.id;
    
    // запрос на удаление, при успешном запросе закрываем модалку и обновляем список
    modalOpen.value = false;
    emit('deleteItem');
}
</script>

<template>
    <tr class="item">
        <td class="border border-slate-300 text-center p-2">{{ id }}</td>
        <td class="border border-slate-300 text-center p-2">{{ title }}</td>
        <td class="border border-slate-300 text-center p-2">{{ description }}</td> 
        <td class="border border-slate-300 text-center p-2 font-bold" :class="{ 'text-green-600': published, 'text-red-600': !published }">{{ published ? 'Да' : 'Нет' }}</td>
        <td class="border border-slate-300 text-center p-2">{{ new Date(published_from).toLocaleDateString() }}</td>

        <td class="border border-slate-300 py-2">
            <div class="w-full flex justify-center gap-4">
                <RouterLink :to="{ path: '/update/' + id }" class="bg-yellow-400 rounded px-2 py-1">Редактировать</RouterLink>
                <button @click="modalOpen = true" class="bg-rose-400 rounded px-2 py-1">Удалить</button>
            </div>
        </td>
    </tr>

    <CustomModal v-if="modalOpen" @close="modalOpen = false">
        <p>Вы действительно хотите удалить эту сущность?</p>
        <div class="actions">
            <button @click="deleteItem">Да</button>
            <button @click="modalOpen = false">Нет</button>
        </div>
    </CustomModal>
</template>

<style scoped>
</style>
