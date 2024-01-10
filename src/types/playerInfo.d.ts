/**
 * 玩家信息
 */
interface PlayerInfo {
  /**
   * 账户ID
   */
  accountId: number;
  /**
   * 显示名称
   */
  displayName: string;
  /**
   * 游戏名称
   */
  gameName: string;
  /**
   * 内部名称
   */
  internalName: string;
  /**
   * 名称更改标志
   */
  nameChangeFlag: boolean;
  /**
   * 下一级完成百分比
   */
  percentCompleteForNextLevel: number;
  /**
   * 隐私设置
   */
  privacy: string;
  /**
   * 个人资料图标ID
   */
  profileIconId: number;
  /**
   * PUUID
   */
  puuid: string;
  /**
   * 重选点数
   */
  rerollPoints: {
    /**
     * 当前点数
     */
    currentPoints: number;
    /**
     * 最大滚动次数
     */
    maxRolls: number;
    /**
     * 滚动次数
     */
    numberOfRolls: number;
    /**
     * 滚动点数成本
     */
    pointsCostToRoll: number;
    /**
     * 重选点数
     */
    pointsToReroll: number;
  };
  /**
   * 召唤师ID
   */
  summonerId: number;
  /**
   * 召唤师等级
   */
  summonerLevel: number;
  /**
   * 标签行
   */
  tagLine: string;
  /**
   * 是否未命名
   */
  unnamed: boolean;
  /**
   * 自上次升级以来的经验值
   */
  xpSinceLastLevel: number;
  /**
   * 直到下一级的经验值
   */
  xpUntilNextLevel: number;
}



/**
* 段位信息
*/
interface RankInfo {
  /**
   * 获得的Regalia奖励ID
   */
  earnedRegaliaRewardIds: any[];
  /**
   * 当前赛季达到的最高SR等级
   */
  highestCurrentSeasonReachedTierSR: string;
  /**
   * 上一赛季达到的最高分区
   */
  highestPreviousSeasonAchievedDivision: string;
  /**
   * 上一赛季达到的最高等级
   */
  highestPreviousSeasonAchievedTier: string;
  /**
   * 上一赛季结束时的最高分区
   */
  highestPreviousSeasonEndDivision: string;
  /**
   * 上一赛季结束时的最高等级
   */
  highestPreviousSeasonEndTier: string;
  /**
   * 最高排名条目
   */
  highestRankedEntry: RankedEntry;
  /**
   * 最高SR排名条目
   */
  highestRankedEntrySR: RankedEntry;
  /**
   * 队列映射
   */
  queueMap: QueueMap;
  /**
   * 队列数组
   */
  queues: RankedEntry[];
  /**
   * Regalia等级
   */
  rankedRegaliaLevel: number;
  seasons: Seasons;
}



interface SeasonInfo {
  currentSeasonEnd: number;
  currentSeasonId: number;
  nextSeasonStart: number;
}

/**
 * 赛季映射
 */
interface Seasons {
  CHERRY: SeasonInfo;
  RANKED_FLEX_SR: SeasonInfo;
  RANKED_SOLO_5x5: SeasonInfo;
  RANKED_TFT: SeasonInfo;
  RANKED_TFT_DOUBLE_UP: SeasonInfo;
  RANKED_TFT_TURBO: SeasonInfo;
}


/**
 * 队列映射
 */
interface QueueMap {
  CHERRY: RankedEntry;
  RANKED_FLEX_SR: RankedEntry;
  RANKED_SOLO_5x5: RankedEntry;
  RANKED_TFT: RankedEntry;
  RANKED_TFT_DOUBLE_UP: RankedEntry;
  RANKED_TFT_TURBO: RankedEntry;
}
/**
 * 排名条目
 */
interface RankedEntry {
  /**
   * 分段
   */
  division: string;
  /**
   * 分段
   */
  highestDivision: string;
  /**
   * 最高等级
   */
  highestTier: string;
  /**
   * 是否是临时的
   */
  isProvisional: boolean;
  /**
   * 联赛点数
   */
  leaguePoints: number;
  /**
   * 失败次数
   */
  losses: number;
  /**
   * 迷你系列进度
   */
  miniSeriesProgress: string;
  /**
   * 上一赛季达到的分区
   */
  previousSeasonAchievedDivision: string;
  /**
   * 上一赛季达到的等级
   */
  previousSeasonAchievedTier: string;
  /**
   * 上一赛季结束时的分区
   */
  previousSeasonEndDivision: string;
  /**
   * 上一赛季结束时的等级
   */
  previousSeasonEndTier: string;
  /**
   * 临时游戏阈值
   */
  provisionalGameThreshold: number;
  /**
   * 剩余的临时游戏
   */
  provisionalGamesRemaining: number;
  /**
   * 队列类型
   */
  queueType: string;
  /**
   * 评级分数
   */
  ratedRating: number;
  /**
   * 评级等级
   */
  ratedTier: string;
  /**
   * 段位
   */
  tier: string;
  /**
   * 警告
   */
  warnings: any;
  /**
   * 胜利次数
   */
  wins: number;
}


/**
 * 生涯统计
 */
interface CareerStats {
  /** 助攻次数 */
  assists: number;
  /** 控制分数 */
  ccScore: number;
  /** 转化的击杀和助攻次数 */
  convertedKillAndAssists: number;
  /** 补兵结束时的数量 */
  csAtLaningEnd: number;
  /** 补兵结束时的差值 */
  csDiffAtLaningEnd: number;
  /** 补兵分数 */
  csScore: number;
  /** 伤害值 */
  damage: number;
  /** 对队友的伤害抵挡值 */
  damageShieldedOnTeammates: number;
  /** 死亡次数 */
  deaths: number;
  /** 失败次数 */
  defeat: number;
  /** 双杀次数 */
  doubleKills: number;
  /** 游戏玩过的次数 */
  gamePlayed: number;
  /** 补兵结束时的金币数量 */
  goldAtLaningEnd: number;
  /** 补兵结束时的金币差值 */
  goldDiffAtLaningEnd: number;
  /** 获得的金币数量 */
  goldEarned: number;
  /** 对队友的治疗值 */
  healsOnTeammates: number;
  /** 击杀次数 */
  kills: number;
  /** 参与的目标获取次数 */
  objectiveTakenInvolved: number;
  /** 参与者ID */
  participantId: number;
  /** 五杀次数 */
  pentaKills: number;
  /** 位置 */
  position: number;
  /** 四杀次数 */
  quadraKills: number;
  /** 漫游优势分数 */
  roamDominanceScore: number;
  /** 队伍伤害 */
  teamDamage: number;
  /** 队伍击杀 */
  teamKills: number;
  /** 队伍获取的目标次数 */
  teamObjectivesTaken: number;
  /** 游戏时间 */
  timePlayed: number;
  /** 三杀次数 */
  tripleKills: number;
  /** 胜利次数 */
  victory: number;
  /** 视野分数 */
  visionScore: number;
}

/**
 * 玩家统计数据
 */
interface PlayerStats {
  /** 英雄ID */
  championId: number;
  /** 游戏ID */
  gameId: number;
  /** 计算的游戏次数 */
  gamesCalculated: number;
  /** 路线 */
  lane: string;
  /** 平台ID */
  platformId: string;
  /** 玩家唯一标识符 */
  puuid: string;
  /** 队列类型 */
  queueType: string;
  /** 角色 */
  role: string;
  /** 赛季 */
  season: number;
  /** 统计数据 */
  stats: {
    'CareerStats.js': CareerStats;
  };
  /** 队伍ID */
  teamId: number;
  /** 时间戳 */
  timestamp: number;
}