
// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';

// Icons
import HistoryIcon from '@/assets/icons/history.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import SonaIcon from '@/assets/icons/sona.svg';
import BlueskyIcon from '@/assets/icons/bluesky.svg';
import FuraffinityIcon from '@/assets/icons/furaffinity.svg';
import GithubIcon from '@/assets/icons/github.svg';
import MastodonIcon from '@/assets/icons/mastodon.svg';

// Types
import type { MenuItem } from 'primevue/menuitem';
import type { AppItem } from '@/types';
import { defineComponent, markRaw } from 'vue';


const emptyComponent = markRaw(defineComponent({}));

export const AppList: AppItem[] = [
    {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),
    },
    {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
    },

    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),
    },
    {
        label: "Bluesky",
        icon: BlueskyIcon,
        component: emptyComponent,
        command: () => window.open("https://bsky.app/profile/monz.us")
    },
    {
        label: "Furaffinity",
        icon: FuraffinityIcon,
        component: emptyComponent,
        command: () => window.open("https://www.furaffinity.net/user/slimymonz")
    },
    {
        label: "Github",
        icon: GithubIcon,
        component: emptyComponent,
        command: () => window.open("https://github.com/SlimyMonz")
    },
    {
        label: "Mastodon",
        icon: MastodonIcon,
        component: emptyComponent,
        command: () => window.open("https://yiff.life/@slimymonz")
    }
]

export const DockItems: MenuItem[] = AppList.map(app => ({
    label: app.label,
    icon: app.icon,
    command: app.command,
    app,
}));