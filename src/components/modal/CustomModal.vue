<script setup lang="ts">
import { onDeactivated, onMounted, ref } from "vue";
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(["close"]);

// close on escape
const keyUpHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") emit("close");
};
onMounted(() => {
    window.addEventListener("keydown", keyUpHandler);
});
onDeactivated(() => {
    window.removeEventListener("keydown", keyUpHandler);
});

// close on click outside
const target = ref(null)
onClickOutside(target, () => emit("close"))
</script>

<template>
    <div>
        <div class="modal">
            <div class="modal-content" ref="target">
                <label class="btn btn-sm btn-circle absolute right-2 top-2" @click="$emit('close')">✕</label>
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>
