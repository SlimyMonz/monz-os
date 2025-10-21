import type { MenuItem } from "@/types";

export const exampleMenu: MenuItem[] = [
  {
    label: 'File',
    children: [
      { label: 'New File', command: () => console.log('New File clicked') },
      { label: 'Open...', command: () => console.log('Open clicked') },
      { label: 'Save', command: () => console.log('Save clicked') },
      { label: 'Close', command: () => console.log('Close clicked') },
    ],
  },
  {
    label: 'Edit',
    children: [
      { label: 'Undo', command: () => console.log('Undo clicked') },
      { label: 'Redo', command: () => console.log('Redo clicked') },
      { label: 'Cut', command: () => console.log('Cut clicked') },
      { label: 'Copy', command: () => console.log('Copy clicked') },
      { label: 'Paste', command: () => console.log('Paste clicked') },
    ],
  },
  
  {
    label: 'Help',
    children: [
      { label: 'About', command: () => console.log('About clicked') },
      { label: 'Documentation', command: () => console.log('Documentation clicked') },
    ],
  },
];
