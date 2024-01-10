<template>
  <div>
    <n-spin size="large" v-if="!matchList" style="margin: auto">
      <template #description>
        <span style="color: #fff">Wating...</span>
      </template></n-spin
    >
    <div class="Match" v-for="value in matchList">
      <!-- 所选英雄 -->
      <div class="hero">
        <n-avatar
          :size="64"
          :src="`/lol-game-data/assets/v1/champion-icons/${value.championId}.png`"
        />
        <div class="level">{{ value.championLevel }}</div>
      </div>
      <!-- 比赛结果 -->
      <div class="result">
        <div class="result_text win" v-if="value.win">{{ $t("win") }}</div>
        <div class="result_text lose" v-else>{{ $t("lose") }}</div>
        <div class="gameMode">{{ value.gameMode }}</div>
        <div class="summonerSpells">
          <div class="spell1">
            <n-avatar :size="32" :src="value.spell1" />
          </div>
          <div class="spell2">
            <n-avatar :size="32" :src="value.spell2" />
          </div>
        </div>
      </div>
      <!-- 装备 -->
      <div class="player-history-items">
        <ul class="player-history-items-list">
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item1 != 'none'"
                :src="value.items.item1"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item2 != 'none'"
                :src="value.items.item2"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item3 != 'none'"
                :src="value.items.item3"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item4 != 'none'"
                :src="value.items.item4"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item5 != 'none'"
                :src="value.items.item5"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item6 != 'none'"
                :src="value.items.item6"
              />
            </div>
          </li>
          <li class="player-history-item">
            <div>
              <img
                v-if="value.items.item7 != 'none'"
                :src="value.items.item7"
              />
            </div>
          </li>
        </ul>
        <div class="player-history-stats">
          <span class="player-history-stats-kills">
            <span>{{ value.kda.kills }}</span> /
            <span>{{ value.kda.deaths }}</span> /
            <span>{{ value.kda.assists }}</span>
          </span>
          <span class="player-history-stats-minions">
            {{ value.minions }}
          </span>
          <span class="player-history-stats-gold">{{ value.gold }}</span>
        </div>
      </div>
      <!-- 位置等其他信息  -->
      <div class="player-history-other">
        <div class="player-history-lane" v-if="value.isranked">
          <img
            :src="`/fe/lol-career-stats/position_${value.lane}.png`"
            alt=""
          />
        </div>
        <div class="player-history-gametime">
          <span>
            {{ value.gameDuration }}
          </span>
          <br />
          <span>
            {{ value.gameCreation }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Match {
  background-color: rgb(1, 2, 1, 0.2);
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 18px;
}

.hero {
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
}

.level {
  color: #9e9b93;
  background-color: #010a13;
  border: thin solid #c89b3c;
  border-radius: 50%;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  right: 0;
  bottom: 3px;
  text-align: center;
  width: 20px;
}

.result {
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
}

.gameMode {
  color: #a09b8c;
}

.result .result_text {
  color: #f0e6d2;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.075em;
  line-height: 18px;
}

.result .lose {
  color: #ff2345;
}

.result .win {
  color: #0acbe6;
}

.summonerSpells {
  display: flex;
}

.summonerSpells .spell1 {
  height: 32px;
  margin-right: 1px;
  border: thin solid #c89b3c;
}

.summonerSpells .spell2 {
  height: 32px;
  border: thin solid #c89b3c;
}

/* 装备条 */

.player-history-items {
  width: 260px;
  padding: 0 10px;
}

.player-history-items .player-history-items-list {
  margin: 0;
  padding: 0;
}

.player-history-stats-minions::after {
  background: url(/fe/lol-match-history/icon_minions.png) no-repeat 0 0;
  background-size: 100%;
  content: "";
  display: inline-block;
  height: 14px;
  margin-left: 2px;
  opacity: 0.6;
  position: relative;
  top: 2px;
  transition: opacity 0.3s ease;
  width: 13px;
}

.player-history-items .player-history-items-list .player-history-item {
  list-style: none;
  background: rgba(1, 10, 19, 0.5);
  border: 1px solid #463714;
  display: inline-block;
  height: 33px;
  width: 33px;
  margin-right: -1px;
}

.player-history-item div {
  height: 32px;
  width: 33px;
}

.player-history-item div img {
  max-height: 33px;
  max-width: 100%;
  margin-bottom: 1px;
}

.player-history-stats-gold::after {
  background: url(/fe/lol-match-history/icon_gold.png) no-repeat 0 0;
  background-size: 100%;
  content: "";
  display: inline-block;
  height: 13px;
  margin-left: 2px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  width: 16px;
}

.player-history-stats {
  color: #a09b8c;
  direction: ltr;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.player-history-stats-kills {
  min-width: 100px;
}

.player-history-stats-minions {
  margin: 0 9px;
}

/* 装备条结束 */

/* 位置信息 */
.player-history-other {
  display: flex;
  align-items: center;
}

.player-history-other .player-history-lane {
  width: 48px;
  height: 48px;
}

.player-history-lane img {
  max-height: 48px;
  max-width: 100%;
}

.player-history-gameInfo {
  width: 48px;
  height: 48px;
}

.player-history-gametime {
  display: inline-block;
  color: #a09b80;
}
</style>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useNotification, type NotificationType, NSpin } from "naive-ui";
import { useGameParameters } from "@/states/gameParameters";
import { NAvatar } from "naive-ui";
import { LcuData } from "@/states/lcuData";
import { i18 } from '@/main'
const { t } = i18.global
const GameParameters = useGameParameters();
const notification = useNotification();
/**
 * @param type 通知level
 * @param message 通知内容
 */
function notify(type: NotificationType, message: string) {
  notification[type]({
    content: "TeamInsightZ",
    meta: message,
    duration: 2500,
    keepAliveOnHover: true,
  });
}
const matchList = ref<MtachLsit[]>();
interface MtachLsit {
  win: boolean;
  /**比赛模式 */
  gameMode: string;
  /**英雄名 */
  championId: number;
  /**等级 */
  championLevel: number;
  /**召唤师1path */
  spell1: string;
  /**召唤师2path */
  spell2: string;
  /**战绩信息 */
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
  /**小兵数 */
  minions: number;
  /**金钱 */
  gold: number;
  /**装备path */
  items: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
    /**饰品 */
    item7: string;
  };
  isranked: boolean;
  lane: "top" | "jungle" | "mid" | "bottom" | "support";
  /**创建时间 */
  gameCreation: string;
  /**游戏时长 */
  gameDuration: string;
}
const props = defineProps({
  puuid: {
    type: String,
  },
});
function updateData() {
  fetch(
    "/lol-match-history/v1/products/lol/" +
      props.puuid +
      "/matches?begIndex=0&endIndex=9"
  )
    .then((res) => res.json())
    .then((res: MatchInfo) => {
      if ((res as unknown as errorResponse).httpStatus) {
        console.error([
          "[TeamInsightz] MatchHistory fetch error gameServer info ",
          res,
        ]);
        notify("error", t('msg.error'));
        return;
      }
      function getLane(
        role: Timeline["role"],
        lane: Timeline["lane"]
      ): "top" | "jungle" | "mid" | "bottom" | "support" {
        switch (lane) {
          case "MIDDLE":
            return "mid";
          case "NONE":
            if (role === "CARRY") return "bottom";
            else return "support";
          default:
            return lane.toLowerCase() as "top" | "jungle" | "bottom";
        }
      }
      /**
       * 获取时间
       * @param time 毫秒时间
       */
      function getTime(time: any) {
        const date = new Date(time); // 直接使用毫秒

        if (time < 24 * 60 * 60 * 1000) {
          // 如果时间小于一天（以毫秒为单位），返回分钟和秒数
          const totalSeconds = Math.floor(time / 1000);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        } else {
          // 否则，返回日期
          return `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
        }
      }
      matchList.value = res.games.games.map((game) => {
        const match: MtachLsit = {
          win: game.participants[0].stats.win,
          gameMode: LcuData.GameModeInId(game.queueId),
          championId: game.participants[0].championId,
          championLevel: game.participants[0].stats.champLevel,
          spell1: LcuData.getspellIconPath(game.participants[0].spell1Id),
          spell2: LcuData.getspellIconPath(game.participants[0].spell2Id),
          kda: {
            kills: game.participants[0].stats.kills,
            deaths: game.participants[0].stats.deaths,
            assists: game.participants[0].stats.assists,
          },
          minions:
            game.participants[0].stats.neutralMinionsKilled +
            game.participants[0].stats.totalMinionsKilled,
          gold: game.participants[0].stats.goldEarned,
          items: {
            item1: LcuData.getItemsIconPath(game.participants[0].stats.item0),
            item2: LcuData.getItemsIconPath(game.participants[0].stats.item1),
            item3: LcuData.getItemsIconPath(game.participants[0].stats.item2),
            item4: LcuData.getItemsIconPath(game.participants[0].stats.item3),
            item5: LcuData.getItemsIconPath(game.participants[0].stats.item4),
            item6: LcuData.getItemsIconPath(game.participants[0].stats.item5),
            item7: LcuData.getItemsIconPath(game.participants[0].stats.item6),
          },
          isranked: LcuData.IsRankedInId(game.queueId),
          lane: getLane(
            game.participants[0].timeline.role,
            game.participants[0].timeline.lane
          ),
          gameCreation: getTime(game.gameCreationDate),
          gameDuration: getTime(game.gameDuration * 1000), //秒转毫秒
        };
        return match;
      });
    })
    .catch((err) => {
      console.error(["[TeamInsightz] MatchHistory fetch error", err]);
    });
}
/**响应式 */
watch(props, () => {
  updateData();
});
onMounted(() => {
  updateData();
});
</script>
