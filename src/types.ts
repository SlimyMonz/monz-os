import type { Component } from 'vue';

export interface AppItem {
  label: string;
  icon: string;
  component?: Component;
  command?: () => void;
  menu?: MenuItem[]
}

export interface MenuItem {
  label: string;
  command?: () => void;
  children?: MenuItem[];
}

export interface Settings {
  username: string
}

export interface AppWindow {
  id: string;
  label: string;
  active: boolean;

  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };

  prevPosition: {
    x: number;
    y: number
  };
  prevSize: {
    width: number;
    height: number
  };
  
  zIndex: number;
  prevZ: number;

  minimized: boolean;
  maximized: boolean;

  component?: Component;
  menu?: MenuItem[];
}

