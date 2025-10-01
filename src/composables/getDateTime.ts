// Based off of code from: https://dev.to/snehalkadwe/digital-clock-using-vue-3-composition-api-5cmc

import { ref, onBeforeUnmount, type Ref } from 'vue';

export const useCurrentTime = (): { currentTime: Ref<Date> } => {
    const currentTime = ref<Date>(new Date());

    const updateCurrentTime = (): void => {
        currentTime.value = new Date();
    };

    const updateTimeInterval: number = window.setInterval(updateCurrentTime, 1000);

    onBeforeUnmount(() => {
        clearInterval(updateTimeInterval);
    });

    return {
        currentTime,
    };
};
