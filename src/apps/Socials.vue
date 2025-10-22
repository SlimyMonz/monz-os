<template>
    <template v-for="app in SocialList">
        <div @click="app.command">
            <div
                class="w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-120">
                <img :src="app.icon" alt="App icon" class="w-full h-full object-contain rounded-xl" />
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">

import type { AppItem } from '@/types'
import { defineComponent, markRaw } from 'vue';

import BlueskyIcon from '@icons/bluesky.svg';
import FuraffinityIcon from '@icons/furaffinity.svg';
import GithubIcon from '@icons/github.svg';
import MastodonIcon from '@icons/mastodon.svg';

const emptyComponent = markRaw(defineComponent({}));
const openLink = (url: string) => () => window.open(url);

const SocialList: AppItem[] = [
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
</script>