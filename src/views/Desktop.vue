<template>
    <div class="background-container">
    <MenuBar></MenuBar>
    <MonzDock></MonzDock>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
import MonzDock from '@/components/MonzDock.vue';

</script>

<style lang="css" scoped>

.background-container {
  background-image: url('@/assets/wallpaper/monz_skin.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

</style>