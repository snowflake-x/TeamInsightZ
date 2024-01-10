<template>
    <div class="Overlay" v-show="overlayStore.overlayOptions.show" v-click-outside="hide"
        :style="{ backgroundImage: `url(${overlayStore.backgroundPath})` }">
        <n-layout style="height: 100%;">
            <!-- 头部 -->
            <n-layout-header :style="`background-color: rgba(${overlayStore.background.HeaderRGBA});`">
                <!-- title -->
                <span class="title">TeamInsightZ</span>
                <!-- 设置按钮 -->
                <n-button @click="overlayStore.settingMode = !overlayStore.settingMode" text color="#fff">
                    <n-icon size="32px">
                        <Settings />
                    </n-icon>
                </n-button>
            </n-layout-header>  
            <!-- 主体 -->
            <n-layout position="absolute" style="top: 64px; bottom: 64px;" has-sider>
                <!-- 左侧菜单按钮 -->
                <n-layout-sider :style="`background-color: rgba(${overlayStore.background.LeftRGBA});`" v-if="activePuuid"
                    collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger
                    @collapse="collapsed = true" @expand="collapsed = false">
                    <n-menu inverted :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="32"
                        :options="Player" v-model:value="activePuuid" />
                </n-layout-sider>
                <!-- 右侧主内容 -->
                <n-layout content-style="padding:0 24px 0 24px;" :native-scrollbar="false"
                    :style="`background-color: rgba(${overlayStore.background.MainRGBA});`">
                    <!--普通显示-->
                    <div v-if="!overlayStore.settingMode">
                        <!--英雄选择-->
                        <div v-if="gameParameters.gameflowPhase == 'ChampSelect'">
                            <MatchHistory v-if="!profile && activePuuid" :puuid="activePuuid" />
                            <PlayerProfile v-else-if="activePuuid" :puuid="activePuuid" v-if="activePuuid"
                                :championId="selectChampion[activePuuid]" />
                        </div>
                        <!--搜索模式-->
                        <div v-else-if="searchMode">
                            <PlayerProfile :puuid="searchPuuid" />
                            <MatchHistory :puuid="searchPuuid" />
                        </div>
                        <!--游戏中-->
                        <div v-else-if="gameParameters.gameflowPhase === 'InProgress'">
                            <InGame />
                        </div>
                        <Home :event="click" v-else />
                    </div>
                    <!--设置模式-->
                    <div v-else>
                        <Setting />
                    </div>
                </n-layout>
            </n-layout>
            <!-- 底部 -->
            <n-layout-footer position="absolute" :style="`background-color: rgba(${overlayStore.background.FooterRGBA});`">
                <n-switch :round="false" v-model:value="profile"
                    v-if="gameParameters.gameflowPhase !== 'None' && gameParameters.gameflowPhase !== 'Lobby'" />
                <n-button type="primary" v-if="searchMode" @click="searchMode = !searchMode">
                    Back
                </n-button>
            </n-layout-footer>
        </n-layout>
    </div>
</template>
<style scoped>
.Overlay {
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    z-index: 300;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 80vh;
    background-size: contain;
}

.title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}


.n-layout-header {
    background: rgba(128, 128, 128, 0.1);
    height: 64px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.n-layout-footer {
    height: 64px;

    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.1);
}

.n-layout {
    background-color: rgba(128, 128, 128, 0);
}
</style>

<script setup lang="ts">
import { onMounted, ref, type Ref, h, watch } from 'vue'
import { useNotification, type NotificationType, NLayoutSider, NLayoutFooter, NLayoutHeader, NLayout, NMenu, type MenuOption, NSwitch, NIcon, NButton, NAvatar, useMessage } from 'naive-ui'
import { useOverlayStore } from '@/states/overlayOptions';
import { useGameParameters } from '@/states/gameParameters';
import { Settings } from '@vicons/ionicons5';
import MatchHistory from '@/components/MatchHistory.vue';
import PlayerProfile from '@/components/PlayerProfile.vue';
import Home from '@/components/Home.vue';
import Setting from '@/components/Setting.vue';
import InGame from '@/components/InGame.vue';
import { i18 } from '@/main'
const { t } = i18.global
function hide() {
    overlayStore.overlayOptions.show = false;
}
const click = (value: string) => {
    searchMode.value = true;
    searchPuuid.value = value;
}
const collapsed = ref(true);
const profile = ref(true);
const overlayStore = useOverlayStore();
const gameParameters = useGameParameters();
const notification = useNotification()
const message = useMessage()
/**
 *  key: player.puuid,
 *  label: name,
 *  icon: renderIcon(iconUrl)
 */
const Player: Ref<MenuOption[]> = ref([]);
/**活动puuid */
const activePuuid = ref<string | null>(null);
/**选用英雄 */
const selectChampion = ref({}) as Ref<{ [key: string]: number }>;

/**搜索模式 */
const searchMode = ref(false);
const searchPuuid = ref('');
/**
 * render icon
 * @param iconSrc icon路径
 */
function renderIcon(iconSrc: string) {
    return () => h('div', {
        style: {
            height: '100%',
            width: '100%',
            backgroundImage: 'url("' + iconSrc + '")',
            backgroundSize: 'cover',
        }
    }
    )
}
/**
 * @param type 通知level
 * @param message 通知内容
 */
function notify(type: NotificationType, message: string) {
    notification[type]({
        content: 'TeamInsightZ',
        meta: message,
        duration: 2500,
        keepAliveOnHover: true
    })
}




function load() {
    notification.create({
        title: t('msg.title'),
        description: t('msg.description'),
        content: t('msg.content'),
        avatar: () =>
            h(NAvatar, {
                size: 'small',
                round: true,
                src: '/lol-game-data/assets/v1/profile-icons/5066.jpg'
            }),
        onAfterLeave: () => {
            message.success("Wellcome to TeamInsightZ!")
        }
    })

}

/**
 * @description: watch gameParameters
 *
 */
watch(gameParameters, async (newVal, oldVal) => {
    if (newVal.championSelectSession?.myTeam) {
        //更新玩家列表
        const PlayerInfo = await Promise.all(newVal.championSelectSession.myTeam.map(async (player) => {
            //查名字
            const name = await fetch('/lol-summoner/v2/summoners/puuid/' + player.puuid)
                .then((res) => res.json())
                .then((res: PlayerInfo) => res.gameName || res.displayName);
            //设置头像
            let iconUrl = "/lol-game-data/assets/v1/champion-icons/" + player.championId + ".png";
            if (player.championId === 0) {//还没选择英雄时的头像
                iconUrl = "/fe/lol-champ-select/images/champion-grid/random-champion.png"
            }
            if (player.puuid === "") {
                console.log('[TeamInsightZ] bot player? cell in ', player.cellId);

                return {
                    key: player.puuid,
                    label: "bot",
                    icon: renderIcon(iconUrl),
                    disabled: true
                }
            }
            return {
                key: player.puuid,
                label: name,
                icon: renderIcon(iconUrl)
            };
        }));
        //更新玩家列表
        Player.value = PlayerInfo;
        //如果未选中玩家,默认选中第一个
        if (activePuuid.value === null) {
            activePuuid.value = PlayerInfo[0].key;
        }
        //更新选用英雄列表,键为puuid,值为championId
        selectChampion.value = newVal.championSelectSession.myTeam.reduce((obj: { [key: string]: number }, player) => {
            obj[player.puuid] = player.championId|player.championPickIntent;
            return obj;
        }, {});

    }
    if (newVal.gameflowPhase === 'None' || newVal.gameflowPhase === 'WaitingForStats' || newVal.gameflowPhase === 'EndOfGame' || newVal.gameflowPhase === 'InProgress') {
        Player.value = [];
        activePuuid.value = null;
        selectChampion.value = {};
    }
})

/**
 * 挂载时检查gameParameters是否初始化
 */
onMounted(() => {
    load()
    if (gameParameters.storeInit) {
        notify('success', 'TeamInsightZ is ready!')
    } else {
        notify('error', 'TeamInsightZ is not ready!')
        console.error('[TeamInsightZ] gameParameters is not init!', gameParameters)
    }


})

</script>
