type MatchInfo = {
    accountId: number;
    games: Games;
    platformId: string;
};

type Games = {
    gameBeginDate: string;
    /**
     * 返回战绩总数
     */
    gameCount: number;
    /**
     * 游戏结束时间
     */
    gameEndDate: string;
    /**
     * 开始的战绩索引
     */
    gameIndexBegin: number;
    /**
     * 结束的战绩索引
     */
    gameIndexEnd: number;
    /**
     * 战绩列表
     */
    games: Game[];
};

/**
 * Game代表游戏中的一场比赛。
 */
type Game = {
    /** 游戏创建的时间，自纪元以来的毫秒数。 */
    gameCreation: number;

    /** 游戏创建的日期，ISO 8601格式。 */
    gameCreationDate: string;

    /** 游戏的持续时间，以秒为单位。 */
    gameDuration: number;

    /** 游戏的唯一标识符。 */
    gameId: number;

    /** 游戏的模式（例如，“CLASSIC”，“ARAM”）。 */
    gameMode: string;

    /** 游戏的类型（例如，“MATCHED_GAME”，“CUSTOM_GAME”）。 */
    gameType: string;

    /** 游戏的版本。 */
    gameVersion: string;

    /** 地图的ID。 */
    mapId: number;

    /** 参与者的身份信息。 */
    participantIdentities: ParticipantIdentity[];

    /** 游戏的参与者
     * 只有自己的信息,请使用索引0
     */
    participants: Participant[];

    /** 平台的ID。 */
    platformId: string;

    /** 队列的ID。 */
    queueId: number;

    /** 赛季的ID。 */
    seasonId: number;

    /** 游戏的队伍。 */
    teams: Team[];
};

type ParticipantIdentity = {
    participantId: number;
    player: Player;
};

type Player = {
    accountId: number;
    currentAccountId: number;
    currentPlatformId: string;
    gameName: string;
    matchHistoryUri: string;
    platformId: string;
    profileIcon: number;
    puuid: string;
    summonerId: number;
    summonerName: string;
    tagLine: string;
};

/**
 * Participant代表游戏中的一个参与者。
 */
type Participant = {
    /** 玩家选择的英雄ID */
    championId: number;

    /** 玩家达到的最高赛季等级 */
    highestAchievedSeasonTier: string;

    /** 玩家对局内的ID 
     * 1-5为蓝队
     * 6-10为红队
    */
    participantId: number;

    /** 第一个召唤师技能ID */
    spell1Id: number;

    /** 第二个召唤师技能ID */
    spell2Id: number;

    /** 统计数据 */
    stats: Stats;

    /** 玩家所在的队伍ID */
    teamId: number;

    /** 玩家的时间线数据 */
    timeline: Timeline;
};



/**
 * 玩家统计数据。
 */
type Stats = {
    /** 助攻数 */
    assists: number;

    /** 导致提前投降 */
    causedEarlySurrender: boolean;

    /** 英雄等级 */
    champLevel: number;

    /** 战斗玩家得分 */
    combatPlayerScore: number;

    /** 对目标造成的伤害 */
    damageDealtToObjectives: number;

    /** 对炮塔造成的伤害 */
    damageDealtToTurrets: number;

    /** 自我减免的伤害 */
    damageSelfMitigated: number;

    /** 死亡数 */
    deaths: number;

    /** 双杀次数 */
    doubleKills: number;

    /** 提前投降的帮凶 */
    earlySurrenderAccomplice: boolean;

    /** 首次助攻 */
    firstBloodAssist: boolean;

    /** 首次击杀 */
    firstBloodKill: boolean;

    /** 首次破坏防御塔助攻 */
    firstInhibitorAssist: boolean;

    /** 首次破坏防御塔 */
    firstInhibitorKill: boolean;

    /** 首次破坏炮塔助攻 */
    firstTowerAssist: boolean;

    /** 首次破坏炮塔 */
    firstTowerKill: boolean;

    /** 游戏在提前投降中结束 */
    gameEndedInEarlySurrender: boolean;

    /** 游戏在投降中结束 */
    gameEndedInSurrender: boolean;

    /** 获得的金币 */
    goldEarned: number;

    /** 花费的金币 */
    goldSpent: number;

    /** 破坏防御塔的次数 */
    inhibitorKills: number;

    /** 物品0的ID */
    item0: number;

    /** 物品1的ID */
    item1: number;

    /** 物品2的ID */
    item2: number;

    /** 物品3的ID */
    item3: number;

    /** 物品4的ID */
    item4: number;

    /** 物品5的ID */
    item5: number;

    /** 物品6的ID */
    item6: number;

    /** 杀人连续次数 */
    killingSprees: number;

    /** 击杀数 */
    kills: number;

    /** 最大的关键攻击 */
    largestCriticalStrike: number;

    /** 最大的连续击杀 */
    largestKillingSpree: number;
    /** 最大的多重杀敌 */
    largestMultiKill: number;

    /** 最长的存活时间 */
    longestTimeSpentLiving: number;

    /** 造成的魔法伤害 */
    magicDamageDealt: number;

    /** 对英雄造成的魔法伤害 */
    magicDamageDealtToChampions: number;

    /** 承受的魔法伤害 */
    magicalDamageTaken: number;

    /** 击杀的中立小兵数 */
    neutralMinionsKilled: number;

    /** 在敌方丛林击杀的中立小兵数 */
    neutralMinionsKilledEnemyJungle: number;

    /** 在我方丛林击杀的中立小兵数 */
    neutralMinionsKilledTeamJungle: number;

    /** 目标玩家得分 */
    objectivePlayerScore: number;

    /** 参与者ID */
    participantId: number;

    /** 五杀次数 */
    pentaKills: number;

    /** 天赋0的ID */
    perk0: number;

    /** 天赋0的变量1 */
    perk0Var1: number;

    /** 天赋0的变量2 */
    perk0Var2: number;

    /** 天赋0的变量3 */
    perk0Var3: number;

    /** 天赋1的ID */
    perk1: number;

    /** 天赋1的变量1 */
    perk1Var1: number;

    /** 天赋1的变量2 */
    perk1Var2: number;

    /** 天赋1的变量3 */
    perk1Var3: number;

    /** 天赋2的ID */
    perk2: number;

    /** 天赋2的变量1 */
    perk2Var1: number;

    /** 天赋2的变量2 */
    perk2Var2: number;

    /** 天赋2的变量3 */
    perk2Var3: number;
    /** 天赋3的ID */
    perk3: number;

    /** 天赋3的变量1 */
    perk3Var1: number;

    /** 天赋3的变量2 */
    perk3Var2: number;

    /** 天赋3的变量3 */
    perk3Var3: number;

    /** 天赋4的ID */
    perk4: number;

    /** 天赋4的变量1 */
    perk4Var1: number;

    /** 天赋4的变量2 */
    perk4Var2: number;

    /** 天赋4的变量3 */
    perk4Var3: number;

    /** 天赋5的ID */
    perk5: number;

    /** 天赋5的变量1 */
    perk5Var1: number;

    /** 天赋5的变量2 */
    perk5Var2: number;

    /** 天赋5的变量3 */
    perk5Var3: number;

    /** 主要天赋风格 */
    perkPrimaryStyle: number;

    /** 次要天赋风格 */
    perkSubStyle: number;

    /** 造成的物理伤害 */
    physicalDamageDealt: number;

    /** 对英雄造成的物理伤害 */
    physicalDamageDealtToChampions: number;

    /** 承受的物理伤害 */
    physicalDamageTaken: number;

    /** 玩家增强1 */
    playerAugment1: number;

    /** 玩家增强2 */
    playerAugment2: number;

    /** 玩家增强3 */
    playerAugment3: number;

    /** 玩家增强4 */
    playerAugment4: number;

    /** 玩家得分0 */
    playerScore0: number;

    /** 玩家得分1 */
    playerScore1: number;

    /** 玩家得分2 */
    playerScore2: number;

    /** 玩家得分3 */
    playerScore3: number;

    /** 玩家得分4 */
    playerScore4: number;
    /** 玩家得分5 */
    playerScore5: number;

    /** 玩家得分6 */
    playerScore6: number;

    /** 玩家得分7 */
    playerScore7: number;

    /** 玩家得分8 */
    playerScore8: number;

    /** 玩家得分9 */
    playerScore9: number;

    /** 玩家子队ID */
    playerSubteamId: number;

    /** 四杀次数 */
    quadraKills: number;

    /** 游戏中购买的视野守卫数量 */
    sightWardsBoughtInGame: number;

    /** 子队排名 */
    subteamPlacement: number;

    /** 队伍是否提前投降 */
    teamEarlySurrendered: boolean;

    /** 控制别人的时间 */
    timeCCingOthers: number;

    /** 造成的总伤害 */
    totalDamageDealt: number;

    /** 对英雄造成的总伤害 */
    totalDamageDealtToChampions: number;

    /** 承受的总伤害 */
    totalDamageTaken: number;

    /** 总治疗量 */
    totalHeal: number;

    /** 击杀的小兵总数 */
    totalMinionsKilled: number;

    /** 玩家的总得分 */
    totalPlayerScore: number;

    /** 总得分排名 */
    totalScoreRank: number;

    /** 造成的总控制时间 */
    totalTimeCrowdControlDealt: number;
    /** 治疗的单位总数 */
    totalUnitsHealed: number;

    /** 三杀次数 */
    tripleKills: number;

    /** 造成的真实伤害 */
    trueDamageDealt: number;

    /** 对英雄造成的真实伤害 */
    trueDamageDealtToChampions: number;

    /** 承受的真实伤害 */
    trueDamageTaken: number;

    /** 破坏的塔数量 */
    turretKills: number;

    /** 超神杀敌数 */
    unrealKills: number;

    /** 视野分数 */
    visionScore: number;

    /** 游戏中购买的视野守卫数量 */
    visionWardsBoughtInGame: number;

    /** 摧毁的守卫数量 */
    wardsKilled: number;

    /** 放置的守卫数量 */
    wardsPlaced: number;

    /** 是否获胜 */
    win: boolean;
};

type Timeline = {
    creepsPerMinDeltas: Record<string, number>;
    csDiffPerMinDeltas: Record<string, number>;
    damageTakenDiffPerMinDeltas: Record<string, number>;
    damageTakenPerMinDeltas: Record<string, number>;
    goldPerMinDeltas: Record<string, number>;
    /**
     * 位置
     * MIDDLE
     * TOP
     * JUNGLE
     * BOTTOM
     * NONE
     * 位置NONE表示玩家不在任何位置 此时看角色
     */
    lane: "MIDDLE" | "TOP" | "JUNGLE" | "BOTTOM" | "NONE";
    participantId: number;
    /**
     * 角色
     * DUO
     * NONE
     * SOLO
     * CARRY
     * SUPPORT
     * 位置NONE表示玩家不在任何位置 此时看位置
     */
    role: "DUO" | "SOLO" | "CARRY" | "SUPPORT" | "NONE";
    xpDiffPerMinDeltas: Record<string, number>;
    xpPerMinDeltas: Record<string, number>;
};

type Team = {
    bans: Ban[];
    baronKills: number;
    dominionVictoryScore: number;
    dragonKills: number;
    firstBaron: boolean;
    firstBlood: boolean;
    firstDargon: boolean;
    firstInhibitor: boolean;
    firstTower: boolean;
    inhibitorKills: number;
    riftHeraldKills: number;
    teamId: number;
    towerKills: number;
    vilemawKills: number;
    win: string;
};

type Ban = {
    championId: number;
    pickTurn: number;
};