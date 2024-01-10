

/**
* LOL选择英雄会话接口
*/
interface ILolChampSelectSession {
    actions: [
        [
            {
                /**
                 * 操作者的Cell ID
                 */
                actorCellId: number;
                /**
                 * 选择的英雄ID
                 */
                championId: number;
                /**
                 * 操作是否已完成
                 */
                completed: boolean;
                /**
                 * 操作的唯一ID
                 */
                id: number;
                /**
                 * 操作是否是友方操作
                 */
                isAllyAction: boolean;
                /**
                 * 操作是否正在进行中
                 */
                isInProgress: boolean;
                /**
                 * 选择顺序
                 */
                pickTurn: number;
                /**
                 * 操作类型
                 */
                type: 'pick';
            }
        ]
    ];
    /**
     * 是否允许战斗加速
     */
    allowBattleBoost: boolean;
    /**
     * 是否允许重复选择英雄
     */
    allowDuplicatePicks: boolean;
    /**
     * 是否允许锁定事件
     */
    allowLockedEvents: boolean;
    /**
     * 是否允许重新选择英雄
     */
    allowRerolling: boolean;
    /**
     * 是否允许选择皮肤
     */
    allowSkinSelection: boolean;
    bans: {
        /**
         * 我方禁用的英雄列表
         */
        myTeamBans: [];
        /**
         * 禁用的英雄数量
         */
        numBans: number;
        /**
         * 对方禁用的英雄列表
         */
        theirTeamBans: [];
    };
    /**
     * 预备英雄列表
     */
    benchChampions: [];
    /**
     * 是否启用预备英雄
     */
    benchEnabled: boolean;
    /**
     * 可选择的皮肤数量
     */
    boostableSkinCount: number;
    chatDetails: {
        mucJwtDto: {
            /**
             * 频道声明
             */
            channelClaim: string;
            /**
             * 域
             */
            domain: string;
            /**
             * JWT
             */
            jwt: string;
            /**
             * 目标地区
             */
            targetRegion: string;
        };
        /**
         * 多用户聊天ID
         */
        multiUserChatId: string;
        /**
         * 多用户聊天密码
         */
        multiUserChatPassword: string;
    };
    /**
     * 计数器
     */
    counter: number;
    /**
     * 游戏ID
     */
    gameId: number;
    /**
     * 是否有同时禁用英雄
     */
    hasSimultaneousBans: boolean;
    /**
     * 是否有同时选择英雄
     */
    hasSimultaneousPicks: boolean;
    /**
     * 是否自定义游戏
     */
    isCustomGame: boolean;
    /**
     * 是否观战
     */
    isSpectating: boolean;
    /**
     * 本地玩家的Cell ID
     */
    localPlayerCellId: number;
    /**
     * 锁定事件索引
     */
    lockedEventIndex: number;
    myTeam: [
        {
            /**
             * 分配的位置
             */
            assignedPosition: string;
            /**
             * Cell ID
             */
            cellId: number;
            /**
             * 选择的英雄ID
             */
            championId: number;
            /**
             * 英雄选择意图
             */
            championPickIntent: number;
            /**
             * 名称可见性类型
             */
            nameVisibilityType: string;
            /**
             * 模糊化的PUUID
             */
            obfuscatedPuuid: string;
            /**
             * 模糊化的召唤师ID
             */
            obfuscatedSummonerId: number;
            /**
             * PUUID
             */
            puuid: string;
            /**
             * 选择的皮肤ID
             */
            selectedSkinId: number;
            /**
             * 召唤师技能1的ID
             */
            spell1Id: number;
            /**
             * 召唤师技能2的ID
             */
            spell2Id: number;
            /**
             * 召唤师ID
             */
            summonerId: number;
            /**
             * 队伍编号
             */
            team: number;
            /**
             * 守卫皮肤ID
             */
            wardSkinId: number;
        }
    ];
    /**
     * 选择顺序交换列表
     */
    pickOrderSwaps: [];
    /**
     * 恢复计数器
     */
    recoveryCounter: number;
    /**
     * 剩余可重新选择的次数
     */
    rerollsRemaining: number;
    /**
     * 是否跳过英雄选择
     */
    skipChampionSelect: boolean;
    /**
     * 对方队伍信息
     */
    theirTeam: [];
    timer: {
        /**
         * 调整后的当前阶段剩余时间
         */
        adjustedTimeLeftInPhase: number;
        /**
         * 当前时间（以毫秒为单位）
         */
        internalNowInEpochMs: number;
        /**
         * 是否无限时间
         */
        isInfinite: boolean;
        /**
         * 当前阶段
         */
        phase: 'BAN_PICK';
        /**
         * 阶段总时间
         */
        totalTimeInPhase: number;
    };
    /**
     * 交易列表
     */
    trades: [];
};







/**
 * 游戏客户端信息
 */
interface GameClient {
    /**
     * 观察者服务器IP
     */
    observerServerIp: string;
    /**
     * 观察者服务器端口
     */
    observerServerPort: number;
    /**
     * 游戏是否正在运行
     */
    running: boolean;
    /**
     * 游戏服务器IP
     */
    serverIp: string;
    /**
     * 游戏服务器端口
     */
    serverPort: number;
    /**
     * 是否可见
     */
    visible: boolean;
}

/**
 * 游戏数据
 */
interface GameData {
    /**
     * 游戏ID
     */
    gameId: number;
    /**
     * 游戏名称
     */
    gameName: string;
    /**
     * 是否自定义游戏
     */
    isCustomGame: boolean;
    /**
     * 游戏密码
     */
    password: string;
    /**
     * 玩家选取的英雄
     */
    playerChampionSelections: any[];
    /**
     * 游戏队列
     */
    queue: Queue;
    /**
     * 是否允许观战
     */
    spectatorsAllowed: boolean;
    /**
     * 第一队伍
     */
    teamOne: { 
        /**英雄id */
        championId: number;
        /**皮肤索引 */
        lastSelectedSkinIndex: number;
        /**头像id */
        profileIconId: number;
        /**puuid */
        puuid: string;
        /**summid */
        summonerId: number;
        /**summ接口名字 */
        summonerInternalName: string;
        /**玩家名字 */
        summonerName: string;
        /**是否队长 */
        teamOwner: boolean;
        /**队伍id */
        teamParticipantId: number;
    }[]|[];
    /**
     * 第二队伍
     */
    teamTwo: { 
           /**英雄id */
           championId: number;
           /**皮肤索引 */
           lastSelectedSkinIndex: number;
           /**头像id */
           profileIconId: number;
           /**puuid */
           puuid: string;
           /**summid */
           summonerId: number;
           /**summ接口名字 */
           summonerInternalName: string;
           /**玩家名字 */
           summonerName: string;
           /**是否队长 */
           teamOwner: boolean;
           /**队伍id */
           teamParticipantId: number;
    }[]|[];
}

/**
 * 游戏队列
 */
interface Queue {
    /**
     * 可允许的预组队大小
     */
    allowablePremadeSizes: number[];
    /**
     * 是否允许免费英雄
     */
    areFreeChampionsAllowed: boolean;
    /**
     * 资源变异器
     */
    assetMutator: string;
    /**
     * 类别
     */
    category: string;
    /**
     * 所需的英雄数量
     */
    championsRequiredToPlay: number;
    /**
     * 描述
     */
    description: string;
    /**
     * 详细描述
     */
    detailedDescription: string;
    /**
     * 游戏模式
     */
    gameMode: string;
    /**
     * 游戏类型配置
     */
    gameTypeConfig: GameTypeConfig;
    /**
     * ID
     */
    id: number;
    /**
     * 是否由协同构建管理
     */
    isTeamBuilderManaged: boolean;
    /**
     * 上次关闭时间
     */
    lastToggledOffTime: number;
    /**
     * 上次打开时间
     */
    lastToggledOnTime: number;
    /**
     * 地图ID
     */
    mapId: number;
    /**
     * 参与者列表的最大大小
     */
    maximumParticipantListSize: number;
    /**
     * 最低等级
     */
    minLevel: number;
    /**
     * 参与者列表的最小大小
     */
    minimumParticipantListSize: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 每队玩家数量
     */
    numPlayersPerTeam: number;
    /**
     * 队列可用性
     */
    queueAvailability: string;
    /**
     * 队列奖励
     */
    queueRewards: QueueRewards;
    /**
     * 允许离开游戏
     */
    removalFromGameAllowed: boolean;
    /**
     * 离开游戏延迟时间（分钟）
     */
    removalFromGameDelayMinutes: number;
    /**
     * 短名称
     */
    shortName: string;
    /**
     * 是否显示位置选择器
     */
    showPositionSelector: boolean;
    /**
     * 是否启用观战
     */
    spectatorEnabled: boolean;
    /**
     * 类型
     */
    type: string;
    /**
     * 是否排位赛
     */
    isRanked: boolean;
}

/**
 * 游戏类型配置
 */
interface GameTypeConfig {
    /**
     * 是否启用高级学习任务
     */
    advancedLearningQuests: boolean;
    /**
     * 是否允许交换
     */
    allowTrades: boolean;
    /**
     * 禁用模式
     */
    banMode: string;
    /**
     * 禁用计时长
     */
    banTimerDuration: number;
    /**
     * 战斗加成
     */
    battleBoost: boolean;
    /**
     * 跨队伍英雄池
     */
    crossTeamChampionPool: boolean;
    /**
     * 死亡竞赛
     */
    deathMatch: boolean;
    /**
     * 不要移除
     */
    doNotRemove: boolean;
    /**
     * 重复选择
     */
    duplicatePick: boolean;
    /**
     * 独占选择
     */
    exclusivePick: boolean;
    /**
     * ID
     */
    id: number;
    /**
     * 是否启用学习任务
     */
    learningQuests: boolean;
    /**
     * 主要选择计时器持续时间
     */
    mainPickTimerDuration: number;
    /**
     * 最大禁用数量
     */
    maxAllowableBans: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 新手引导合作模式
     */
    onboardCoopBeginner: boolean;
    /**
     * 选择模式
     */
    pickMode: string;
    /**
     * 后选择计时器持续时间
     */
    postPickTimerDuration: number;
    /**
     * 是否允许重选
     */
    reroll: boolean;
    /**
     * 队伍英雄池
     */
    teamChampionPool: boolean;
}

/**
 * 队列奖励
 */
interface QueueRewards {
    /**
     * 是否启用英雄点数奖励
     */
    isChampionPointsEnabled: boolean;
    /**
     * 是否启用IP奖励
     */
    isIpEnabled: boolean;
    /**
     * 是否启用经验奖励
     */
    isXpEnabled: boolean;
    /**
     * 派对大小IP奖励
     */
    partySizeIpRewards: any[];
}

/**
 * 游戏闪避信息
 */
interface GameDodge {
    /**
     * 闪避ID列表
     */
    dodgeIds: any[];
    /**
     * 阶段
     */
    phase: string;
    /**
     * 状态
     */
    state: string;
}

/**
 * 地图信息
 */
interface Map {
    /**
     * 资源
     */
    assets: any;
    /**
     * 分类内容包
     */
    categorizedContentBundles: any;
    /**
     * 描述
     */
    description: string;
    /**
     * 游戏模式
     */
    gameMode: string;
    /**
     * 游戏模式名称
     */
    gameModeName: string;
    /**
     * 游戏模式短名称
     */
    gameModeShortName: string;
    /**
     * 游戏变异器
     */
    gameMutator: string;
    /**
     * ID
     */
    id: number;
    /**
     * 是否随机游戏模式
     */
    isRGM: boolean;
    /**
     * 地图字符串ID
     */
    mapStringId: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 每个位置不允许的召唤师技能
     */
    perPositionDisallowedSummonerSpells: Record<string, string>;
    /**
     * 每个位置要求的召唤师技能
     */
    perPositionRequiredSummonerSpells: Record<string, string>;
    /**
     * 平台ID
     */
    platformId: string;
    /**
     * 平台名称
     */
    platformName: string;
    /**
     * 属性
     */
    properties: any;
}


/**
 * 游戏状态
 * None: 大厅
 * Lobby: 组队
 * Matchmaking: 匹配
 * ReadyCheck: 准备确认
 * ChampSelect: 选择英雄
 * InProgress: 游戏中
 * WaitingForStats: 等待统计
 * TerminatedInError: 错误终止
 */
type phase = 'None' | 'Lobby' | 'Matchmaking' | 'ReadyCheck' | 'ChampSelect' | 'GameStart' | 'InProgress' | 'WaitingForStats' | 'TerminatedInError' | 'EndOfGame';


/**
 * 游戏信息接口
 */
interface IGeneratedInterface {
    /**
     * 游戏客户端信息
     */
    gameClient: GameClient;
    /**
     * 游戏数据
     */
    gameData: GameData;
    /**
     * 游戏闪避信息
     */
    gameDodge: GameDodge;
    /**
     * 地图信息
     */
    map: Map;
    /**
     * 游戏阶段
     */
    phase: phase;
}