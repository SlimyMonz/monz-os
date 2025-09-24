<template>
        <div class="dock-inner">
                <div v-for="(app, index) in AppList" :key="index" class="appicon-wrapper" @click="openApp(app)">
                        <div class="appicon">
                                <img :src="app.icon" alt="App icon" class="appicon-img" />

                                <transition name="fade">
                                        <div v-if="isAppOpen(app.name)" class="indicator"></div>
                                </transition>

                        </div>
                </div>
        </div>
</template>


<script setup lang="ts">
import { AppList, type App } from '@/apps/AppList'
import { useAppState } from '@/composables/useAppState';

const { openApp, isAppOpen } = useAppState();

</script>

<style scoped>
.dock-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.75rem;
        border-radius: 1rem;
        margin-left: 0.5rem;
}

.appicon-wrapper {
        margin: 0.75rem;
        cursor: pointer;
        transition: transform 0.2s ease;

}

.appicon-wrapper:hover {
        transform: scale(1.2);
}

.appicon {
        width: 4rem;
        height: 4rem;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.4);
        transition: background 0.3s;
        border-radius: 1rem;
        position: relative;
}

.appicon-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        padding: 0.25rem;
}

.appicon:hover {
        background: rgba(255, 255, 255, 0.25);
}

.indicator {
        position: absolute;
        left: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.1rem;
        height: 2rem;
        /* Adjust based on how tall you want it */
        border-radius: 0.1rem;
        background: white;
        box-shadow: -0.1rem 0 0.4rem rgba(255, 255, 255, 0.8);
        opacity: 75%;
}

/* Fade transition for the indicator */
.fade-enter-active,
.fade-leave-active {
        transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
        opacity: 0;
}
</style>
