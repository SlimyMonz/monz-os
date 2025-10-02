import type { MenuItem } from 'primevue/menuitem';
import type { Component } from 'vue';

export interface AppItem extends MenuItem {
    id: number,
    zIndex: number,
    component: Component; 
}
