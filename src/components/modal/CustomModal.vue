<script setup lang="ts">
import { onDeactivated, onMounted, ref } from "vue";

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
</script>

<template>
    <div class="modal" @click.self="$emit('close')">
        <div class="modal-content">
            <slot />
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
