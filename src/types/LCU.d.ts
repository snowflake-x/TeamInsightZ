/**
 * LCU相关类型定义
 * 本页类型跟gameParameters.ts中的类型有交互,请注意
 */

/**召唤师技能 */
interface SummonerSpell {
    id: number;
    name: string;
    description: string;
    summonerLevel: number;
    cooldown: number;
    gameModes: string[];
    iconPath: string;
}



/**游戏模式 */
interface GameMode {
    allowablePremadeSizes: number[];
    /**
     * 是否允许使用免费英雄
     */
    areFreeChampionsAllowed: boolean;
    assetMutator: string;
    /**模式分类 */
    category: string;
    championsRequiredToPlay: number;
    description: string;
    detailedDescription: string;
    /**模式名
     * ARAM
     * CLASSIC...等
     */
    gameMode: string;
    gameTypeConfig: GameTypeConfig;
    /**模式id */
    id: number;
    isRanked: boolean;
    isTeamBuilderManaged: boolean;
    lastToggledOffTime: number;
    lastToggledOnTime: number;
    mapId: number;
    maxDivisionForPremadeSize2: string;
    maxTierForPremadeSize2: string;
    maximumParticipantListSize: number;
    minLevel: number;
    minimumParticipantListSize: number;
    name: string;
    numPlayersPerTeam: number;
    queueAvailability: string;
    queueRewards: QueueRewards;
    removalFromGameAllowed: boolean;
    removalFromGameDelayMinutes: number;
    shortName: string;
    showPositionSelector: boolean;
    showQuickPlaySlotSelection: boolean;
    spectatorEnabled: boolean;
    type: string;
}
/**装备 */
interface Item {
    id: number;
    name: string;
    description: string;
    active: boolean;
    inStore: boolean;
    from: number[];
    to: number[];
    categories: string[];
    maxStacks: number;
    requiredChampion: string;
    requiredAlly: string;
    requiredBuffCurrencyName: string;
    requiredBuffCurrencyCost: number;
    specialRecipe: number;
    isEnchantment: boolean;
    price: number;
    priceTotal: number;
    iconPath: string;
}



type Passive = {
    abilityIconPath: string;
    abilityVideoImagePath: string;
    abilityVideoPath: string;
    description: string;
    name: string;
}

type skin = {
    id: number;
    isBase: boolean;
    name: string;
    /**
     * 背景图
     */
    splashPath: string;
    /**头像大小图 */
    tilePath: string;

};

/**
 * 英雄数据
 * @link /lol-game-data/assets/v1/champions/{id}.json
 */
interface ChampionInfo {
    alias: string;
    banVoPath: string;
    chooseVoPath: string;
    id: number;
    /**名字 */
    name: string;
    passive: Passive;
    playstyleInfo: {
        crowdControl: number;
        damage: number;
        durability: number;
        mobility: number;
        utility: number;
    }
    recommendedItemDefaults: any[];
    roles: string[];
    shortBio: string;
    skins: skin[];
}

/**
 * 英雄统计数据
 * @link /lol-collections/v1/inventories/{puuid}/champion-mastery
 */
interface ChampionStats {
    /** 英雄ID */
    championId: number;
    /** 英雄等级 */
    championLevel: number;
    /** 英雄点数 */
    championPoints: number;
    /** 自上次升级后获得的英雄点数 */
    championPointsSinceLastLevel: number;
    /** 到下一级所需的英雄点数 */
    championPointsUntilNextLevel: number;
    /** 是否已获得宝箱 */
    chestGranted: boolean;
    /** 格式化的英雄点数 */
    formattedChampionPoints: string;
    /** 格式化的精通目标 */
    formattedMasteryGoal: string;
    /** 最高等级 */
    highestGrade: string;
    /** 最后游玩时间 */
    lastPlayTime: number;
    /** 玩家ID */
    playerId: number;
    /** 玩家唯一标识符 */
    puuid: string;
    /** 获得的代币数量 */
    tokensEarned: number;
};

/**
 * 英雄数据
 * @link /lol-game-data/assets/v1/champion-summary.json
 */
type Champion = {
    id: number;
    name: string;
    alias: string;
    squarePortraitPath: string;
    roles: string[];
};