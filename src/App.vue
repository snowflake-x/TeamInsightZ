<script setup lang="ts">

import { NMessageProvider, NNotificationProvider } from 'naive-ui'
import GameOverlay from './views/GameOverlay.vue'



</script>

<template>
    <n-message-provider placement="bottom-left">
        <n-notification-provider>
            <GameOverlay />
        </n-notification-provider>
    </n-message-provider>
</template>
