import type { MenuItem } from 'primevue/menuitem';
import type { Component } from 'vue';

export interface AppItem extends MenuItem {
    component: Component; 
}
