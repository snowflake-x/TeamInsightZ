<template>
    <div class="profile">
        <div class="player-profile">
            <div class="rank-info">
                <!-- 头像 -->
                <n-avatar :size="64" :src="profileInfo.heroIcon" />
                <div>
                    <!-- 段位图标 -->
                    <div class="player-rank-icon">
                        <n-image preview-disabled :src="`/fe/lol-shared-components/${profileInfo.soloTier.toLowerCase()}.png`" width="100"
                            fallback-src="/fe/lol-profiles/images/profile_unranked.png" />

                    </div>
                    <div class="profile-mode-title">{{ $t('soloDuo') }}</div>
                    <div class="profile-rank-title">
                        <span>{{ $t(`RANK.${profileInfo.soloTier}`) }}</span>
                        <span v-if="profileInfo.soloDivision != 'NA'">
                            {{ profileInfo.soloDivision }}</span>
                    </div>
                </div>
                <div>
                    <!-- 段位图标 -->
                    <div class="player-rank-icon">
                        <n-image preview-disabled :src="`/fe/lol-shared-components/${profileInfo.flexTier.toLowerCase()}.png`" width="100"
                            fallback-src="/fe/lol-profiles/images/profile_unranked.png" />
                    </div>
                    <div class="profile-mode-title">{{ $t('flex') }}</div>
                    <div class="profile-rank-title">
                        <span>{{ $t(`RANK.${profileInfo.flexTier}`) }}</span>
                        <span v-if="profileInfo.flexDivision != 'NA'">
                            {{ profileInfo.flexDivision }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="player-stats">
            <span>{{profileInfo.name}}</span>
            <div ref="kdaEchart" style="width: 500px;height: 300px;"></div>
        </div> -->
        <div class="player-details">
            <span class="title">{{ profileInfo.name }}</span>
            <ul>
                <li>
                    <span>{{ $t('Player_Level') }}:</span>
                    <span>{{ profileInfo.level }}</span>

                </li>
                <li>
                    <span>{{ $t('Private') }}:</span>
                    <n-icon style="margin-right: -5px;" size="20px">
                        <LockOpen v-if="profileInfo.privacy" />
                        <LockClosed v-else />
                    </n-icon>
                </li>
                <li>
                    <span>{{ $t('soloDuoWins') }}:</span>
                    <span>{{ profileInfo.soloWin }}</span>
                </li>
                <li>
                    <span>{{ $t('soloDuoLp') }}:</span>
                    <span>{{ profileInfo.soloPoint }}</span>
                </li>
                <li>
                    <span>{{ $t('flexWins') }}:</span>
                    <span>{{ profileInfo.flexWin }}</span>
                </li>
                <li>
                    <span>{{ $t('flexLp') }}:</span>
                    <span>{{ profileInfo.flexPoint }}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>{{ $t('select') }}:</span>
                    <span>{{ profileInfo.currentChampion }}</span>
                </li>
                <li>
                    <span>{{ $t('seasonUsageCount') }}:</span>
                    <span>{{ profileInfo.seasonUse }} | {{ profileInfo.victory }}</span>
                </li>
                <li>
                    <span>{{ $t('score') }}:</span>
                    <span>{{ profileInfo.gameScore }}</span>
                </li>
                <li>
                    <span>{{ $t('security') }}:</span>
                    <span>{{ profileInfo.security }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.profile {
    width: 100%;
    height: 100%;
    display: flex;

}

.player-profile {
    position: relative;
    padding: 0 30px;
}

.player-rank-icon {
    position: relative;
    width: 100px;
    height: 100px;

}

.player-rank-icon img {
    width: 100%;
    height: 100%;

}

.rank-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100px;
}

.profile-mode-title {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #cdbe91;
}

.profile-rank-title {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: rgb(248, 247, 244);
}

.player-stats span {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 3%;
}

.player-details {
    padding-left: 20px;
    width: 100%;
}

.title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;

}

.player-details ul {
    padding: 0;
    list-style: none;
    color: #fff;
}

.player-details ul li {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
</style>
<script setup lang="ts">
import { NAvatar, NImage, NIcon, NSpace } from 'naive-ui';
import { onMounted, ref, watch } from 'vue';
import { LockOpen, LogoGithub, LockClosed } from '@vicons/ionicons5'
import * as echarts from 'echarts';
const profileInfo = ref({
    name: 'RiotGames',
    heroIcon: '/lol-game-data/assets/v1/profile-icons/5662.jpg',
    level: 144,
    privacy: true,
    soloTier: 'CHALLENGER',
    soloDivision: '',
    /**胜场 */
    soloWin: 32,
    /**胜点 */
    soloPoint: 32,
    /**段位 */
    flexTier: 'CHALLENGER',
    /**分段 */
    flexDivision: '',
    flexWin: 32,
    flexPoint: 32,
    currentChampion: '潮汐海灵',
    /**使用次数 */
    seasonUse: 10,
    /**胜利场次 */
    victory: 10,
    gameScore: 1,
    security: '高危'
});

const kdaEchart = ref(null);
const props = defineProps({
    puuid: {
        type: String,
        required: true
    },
    championId: {
        type: Number,
    }
})
/*const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: '#fff'
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        }
    ],
    series: [
        {
            name: 'KDA',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [1.3, 3.2, 2.3, 2.5, 8.1, 2.3, 4.5],
            itemStyle: {
                color: 'Salmon'
            }
        }

    ]
};
const initEchart = () => {
    const myChart = echarts.init(kdaEchart.value);
    myChart.setOption(option);
};*/
let PlayerStats: PlayerStats[] = [];


function updateSelect() {
    if(!props.championId){
        profileInfo.value.currentChampion = '随机英雄';
        profileInfo.value.seasonUse = 0;
        profileInfo.value.victory = 0;
        profileInfo.value.gameScore = 0;
        profileInfo.value.security = '低危';
        return;
    }
    let gamesCalculated = 0;
    let victory = 0;
    /**统计信息 */
    PlayerStats.map((item) => {
        if (item.championId === props.championId) {
            gamesCalculated++;
            victory += item.stats['CareerStats.js'].victory;
        }
    })
    /**获取选中英雄的信息 */
    fetch('/lol-game-data/assets/v1/champions/' + props.championId + '.json').then((res) => res.json()).then((res: ChampionInfo) => {
        profileInfo.value.currentChampion = res.name;
    }).catch((err) => {
        console.error('[TeamInsightZ] championId changed!', err);
    })
    profileInfo.value.seasonUse = gamesCalculated;
    profileInfo.value.victory = victory;
    profileInfo.value.gameScore = 1;
    profileInfo.value.security = '高危';
}
function updataPuuid() {
    /**基本信息 */
    fetch('/lol-summoner/v2/summoners/puuid/' + props.puuid)
        .then((res) => res.json())
        .then((res: PlayerInfo) => {
            profileInfo.value.name = res.gameName||res.displayName + (res.tagLine ? '#' + res.tagLine : res.tagLine);
            profileInfo.value.heroIcon = '/lol-game-data/assets/v1/profile-icons/' + res.profileIconId + '.jpg';
            profileInfo.value.level = res.summonerLevel;
            profileInfo.value.privacy = res.privacy == "PUBLIC";
        });
    /**段位信息 */
    fetch('/lol-ranked/v1/ranked-stats/' + props.puuid).then((res) => res.json()).then((res: RankInfo) => {
      //  console.log('[TeamInsightZ] rankInfo changed!', res);
        profileInfo.value.soloTier = res.queueMap['RANKED_SOLO_5x5'].tier || "NONE";
        profileInfo.value.soloDivision = res.queueMap['RANKED_SOLO_5x5'].division;
        profileInfo.value.soloWin = res.queueMap['RANKED_SOLO_5x5'].wins;
        profileInfo.value.soloPoint = res.queueMap['RANKED_SOLO_5x5'].leaguePoints;
        profileInfo.value.flexTier = res.queueMap['RANKED_FLEX_SR'].tier || "NONE";
        profileInfo.value.flexDivision = res.queueMap['RANKED_FLEX_SR'].division;
        profileInfo.value.flexWin = res.queueMap['RANKED_FLEX_SR'].wins;
        profileInfo.value.flexPoint = res.queueMap['RANKED_FLEX_SR'].leaguePoints;

    })
    /**统计信息 */
    fetch('/lol-career-stats/v1/summoner-games/' + props.puuid).then((res) => res.json()).then((res: PlayerStats[]) => {
        PlayerStats = res;
    })
}
watch(() => props.championId, () => {
    updateSelect()
})

watch(() => props.puuid, () => {
    updataPuuid()
})
onMounted(() => {
    // "/recently-played-summoners" 最近游戏玩家
    updataPuuid()
    updateSelect()
});
</script>