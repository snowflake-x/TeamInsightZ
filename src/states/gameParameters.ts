import { defineStore } from "pinia";
import { ref } from "vue";
/**初始化状态 */
let storeInit = false;
/**注册状态 */
let register = false;
export const useGameParameters = defineStore("gameParameters", () => {
  /**游戏流程阶段*/
  const gameflowPhase = ref<phase>("None");
  /** 选人阶段的数据 */
  const championSelectSession = ref<ILolChampSelectSession>();
  /** 游戏进行中的数据 */
  const InProgressSession = ref<GameData>();
  if (!storeInit && register) {
    console.error("[TeamInsightz] GmaeParameters not init! ");
  }
  return {
    /**游戏进程 */
    gameflowPhase,
    /** 游戏进行中的数据 */
    championSelectSession,
    /** 选人阶段的数据 */
    InProgressSession,
    /**是否初始化完成*/
    storeInit,
  };
});
/**
 * 注册socket监听
 * @param context Penguloader的上下文
 */
export function registryParameter(context: PenguInitContext) {
  register = true;
  storeInit = true;
  const gameParameters = useGameParameters();
  try {
    
    context.socket.observe("/lol-gameflow/v1/session", (data) => {
      const gameflowSession: IGeneratedInterface = data.data;
      gameParameters.gameflowPhase = gameflowSession.phase;
      if (gameflowSession.phase === "InProgress") {
        gameParameters.InProgressSession = gameflowSession.gameData;
      }
      console.log("[TeamInsightz] Gameflow session update: ", data);
    });
    context.socket.observe("/lol-champ-select/v1/session", (data) => {
      //如果收到champ select session的更新，且当前游戏流程阶段为None，则将游戏流程阶段设置为ChampSelect
      //避免是重启了客户端，导致游戏流程阶段没有更新
      if (
        gameParameters.gameflowPhase === "None" &&
        data.eventType !== "Delete"
      ) {
        gameParameters.gameflowPhase = "ChampSelect";
      }
      gameParameters.championSelectSession = data.data;
      // if(gameParameters.championSelectSession?.myTeam[0].nameVisibilityType)
      //   console.log(
      //     "[TeamInsightz] Champ select session update: ",
      //     gameParameters.championSelectSession
      //   );
    });
  } catch (err) {
    storeInit = false;
    console.error("[TeamInsightz] registryParameter Error: ", err);
  }
 
}
