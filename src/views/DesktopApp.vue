<template>

        <div class="app-window">
            <div class="title-bar">
                <span class="title">{{ app.name }}</span>
                <button class="close-btn" @click="closeApp()">×</button>
            </div>
            <div class="content">
                <props.app.component :isMobile="false" />
            </div>
            
        </div>

</template>

<script setup lang="ts">
import type { App } from '@/apps/AppList';
import { useAppState } from '@/composables/useAppState';
const { closeApp } = useAppState();
const props = defineProps<{ app: App }>();
</script>

<style scoped>
.app-window {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-sizing: border-box;
  font-size: 1rem;
}

.title-bar {
  flex: 0 0 2rem; /* Fix height strictly */
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
}

.close-btn {
  position: absolute;
  top: 0.25rem; 
  right: 0.25rem; 
  background-color: #ff5f57;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #e0190e;
}

.title {
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  flex: 1;
  text-align: center;

}

.content{
    height: 100%;
    width: 100%;
    overflow: auto;
}

</style>
