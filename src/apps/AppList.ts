
// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';

// Icons
import HistoryIcon from '@icons/history.svg';
import SettingsIcon from '@icons/settings.svg';
import SonaIcon from '@icons/sona.svg';
import BlueskyIcon from '@icons/bluesky.svg';
import FuraffinityIcon from '@icons/furaffinity.svg';
import GithubIcon from '@icons/github.svg';
import MastodonIcon from '@icons/mastodon.svg';

// Types
import type { AppItem } from '@/types';
import { defineComponent, markRaw } from 'vue';
import { exampleMenu } from './ExampleMenu';

const emptyComponent = markRaw(defineComponent({}));
const openLink = (url: string) => () => window.open(url);

export const AppList: AppItem[] = [
    {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),
        menu: exampleMenu
    },
    {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
        menu: exampleMenu
    },

    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),
        menu: exampleMenu
    },
    {
        label: "Bluesky",
        icon: BlueskyIcon,
        component: emptyComponent,
        command: openLink("https://bsky.app/profile/monz.us")
    },
    {
        label: "Furaffinity",
        icon: FuraffinityIcon,
        component: emptyComponent,
        command: openLink("https://www.furaffinity.net/user/slimymonz")
    },
    {
        label: "Github",
        icon: GithubIcon,
        component: emptyComponent,
        command: openLink("https://github.com/SlimyMonz")
    },
    {
        label: "Mastodon",
        icon: MastodonIcon,
        component: emptyComponent,
        command: openLink("https://yiff.life/@slimymonz")
    }
]
