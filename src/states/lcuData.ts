/*export function registryLcuData(){
    window.Pengu.PluginFS.read('/LCU/test.txt').then((res)=>{
        console.log('[TeamInsightz] LCU data: ', res);
        
    })
}*/
import { useGameParameters } from "./gameParameters";
export class LcuData {
    static SummonerSpell:SummonerSpell[] = [];
    static GameQueueMode:GameMode[] = [];
    static items:Item[] = [];
    static AllChampionData:Champion[] = [];
    static init(){
        const gameParameters = useGameParameters();
        // 初始召唤师技能列表
        fetch('/lol-game-data/assets/v1/summoner-spells.json').then((res) => res.json()).then((data: SummonerSpell[]) => {
            // console.log('[TeamInsightz] SummonerSpell: ', data);
            LcuData.SummonerSpell = data;
        }).catch((err) => {
            gameParameters.storeInit = false;
            console.error('[TeamInsightz] SummonerSpellData init Error: ', err);
        });
        
        // 初始模式列表
        fetch('/lol-game-queues/v1/queues').then((res) => res.json()).then((data: GameMode[]) => {
            // console.log('[TeamInsightz] Queue: ', data);
            LcuData.GameQueueMode = data;
        }).catch((err) => {
            gameParameters.storeInit = false;
            console.error('[TeamInsightz] QueueModeInfo init Error: ', err);
        });
        //初始装备列表
        fetch('/lol-game-data/assets/v1/items.json').then((res) => res.json()).then((data: Item[]) => {
            // console.log('[TeamInsightz] items: ', data);
            LcuData.items = data;
        }).catch((err) => {
            gameParameters.storeInit = false;
            console.error('[TeamInsightz] items init Error: ', err);
        });
        // 初始英雄列表
        fetch('/lol-game-data/assets/v1/champion-summary.json').then((res) => res.json()).then((data: Champion[]) => {
            // console.log('[TeamInsightz] AllChampionData: ', data);

            LcuData.AllChampionData = data;
            LcuData.AllChampionData.shift(); //删掉第一个,第一个是无英雄
        }).catch((err) => {
            gameParameters.storeInit = false;
            console.error('[TeamInsightz] AllChampionData init Error: ', err);
        });
    }
    /**
     * 通过模式id获取模式名称
     * 如果没有找到则返回none
     * @param id 模式id
     * @returns 模式名称
     */
    static GameModeInId(id:number):string{
        return LcuData.GameQueueMode.find((mode)=>mode.id===id)?.name||'none';
    }
    /**
     * 判断模式是否为排位
     * 如果没有找到则返回false
     * @param id 模式id
     * @returns 是否为排位 true为排位 false为非排位
     */
    static IsRankedInId(id:number):boolean{
        return LcuData.GameQueueMode.find((mode)=>mode.id===id)?.isRanked||false;
    }
    /**
     * 通过召唤师技能id获取召唤师技能图标路径
     * @param id 召唤师技能id
     * @returns 图标路径
     */
    static getspellIconPath(id:number):string{
        return LcuData.SummonerSpell.find((spell)=>spell.id===id)?.iconPath||'none';
    }
    /**
     * 通过装备id获取装备图标路径
     * @param id 装备id
     * @returns 图标路径
     */
    static getItemsIconPath(id:number):string{
        return LcuData.items.find((item)=>item.id===id)?.iconPath||'none';
    }
}