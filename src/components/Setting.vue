<template>
    <div class="setting">
        <span class="title">{{ $t('setting') }}</span>
        <ul class="setting-list">
            <li>
                <span>{{ $t('background') }}</span>
                <div style="display: flex;align-items: center;">

                    <span>{{ $t('champion') }}: </span>
                    <n-select filterable style="width: 200px;" v-model:value="backgroundChampionId"
                        :render-label="renderLabel" @update:value="updateChampion"  :options="Champions" />
                    <span style="margin-left: 10px;">{{ $t('skin') }}: </span>
                    <n-select style="width: 300px;" v-model:value="backgroundChampionSkinId" :render-label="renderLabel"
                        @update:value="updateSkin" :options="ChampionSkins" />
                </div>
            </li>
            <!-- <li>
                <span>玩家列表RGBA</span>
                <div style="width: 180px;">
                    <n-color-picker :on-update:value="setRgbaL" :default-value="`rgba(${overOptions.background.LeftRGBA})`"  size="small"/>
                </div>
            </li>
            <li>
                <span>顶栏RGBA</span>
                <div style="width: 180px;">
                    <n-color-picker :on-update:value="setRgbaH" :default-value="`rgba(${overOptions.background.HeaderRGBA})`" size="small"/>
                </div>
            </li>
            <li>
                <span>底部RGBA</span>
                <div style="width: 180px;">
                    <n-color-picker :on-update:value="setRgbaF" :default-value="`rgba(${overOptions.background.FooterRGBA})`" size="small"/>
                </div>
            </li>
            <li>
                <span>主体RGBA</span>
                <div style="width:  180px;">
                    <n-color-picker :on-update:value="setRgbaM" :default-value="`rgba(${overOptions.background.MainRGBA})`" size="small"/>
                </div>
            </li> -->
            <!-- 语言设置 -->
            <li>
                <span>{{ $t('lnaguage') }}</span>
                <div style="width:  auto;">
                    <n-select style="width: 300px;" v-model:value="selectLang" @update:value="updateLang"
                         :options="LangeuageOptions" />
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.title {
    display: block;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    padding-bottom: 20px;

}

.setting {
    height: 100%;
    width: 80%;
}

.setting-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
}

.setting-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

}
</style>
<script setup lang="ts">
import { h, inject, onMounted, ref } from 'vue';
import { NAvatar, NSelect, NColorPicker, type SelectRenderLabel } from 'naive-ui';
import { useOverlayStore } from '@/states/overlayOptions';
import { LcuData } from '@/states/lcuData'
const overOptions = useOverlayStore();


const backgroundChampionId = ref(overOptions.backgroundChampionId);
const backgroundChampionSkinId = ref(overOptions.backgroundChampionSkinId);
const Champions = ref<{ label: string, value: number, icon: string }[]>();
const ChampionSkins = ref<{ label: string, value: number, icon: string, path: string }[]>([]);


//#region 语言
const LangeuageOptions = ref<{ label: string, value: string }[]>([
    {
        label: '简体中文',
        value: 'zh-CN'
    },
    {
        label: 'English',
        value: 'en-US'
    },
    {
        label: 'Deutsch',
        value: 'de-DE'
    },
    {
        label: '한국어',
        value: 'ko-KR'
    },
    {
        label: 'Tiếng Việt',
        value: 'vi-VN'
    }
]);
interface i18n {
    global: {
        locale: string;
    }
}
const selectLang = ref(overOptions.language);
const i18n = inject('i18n') as i18n;
const updateLang = (e: string) => {
    overOptions.language = e;
    i18n.global.locale = e;
}

//#endregion


//#region 更新背景透明度
function setRgba(value: string) {
    return value.replace('rgba(', '').replace(')', '').split(',');
}

function setRgbaM(value: string) {
    overOptions.background.MainRGBA = setRgba(value).toString();
}

function setRgbaH(value: string) {
    overOptions.background.HeaderRGBA = setRgba(value).toString();
}

function setRgbaL(value: string) {
    overOptions.background.LeftRGBA = setRgba(value).toString();
}

function setRgbaF(value: string) {
    overOptions.background.FooterRGBA = setRgba(value).toString();
}

const renderLabel: SelectRenderLabel = (option) => {
    return h(
        'div',
        {
            style: {
                display: 'flex',
                alignItems: 'center'
            }
        },
        [
            h(NAvatar, {
                src: option.icon,
                round: true,
                size: 'small'
            }),
            h(
                'div',
                {
                    style: {
                        marginLeft: '12px',
                        padding: '4px 0'
                    }
                },
                [
                    h('div', null, [option.label as string]),
                ]
            )
        ]
    )
}
//#endregion
/**判断第一个数跟第二个数的关系 */
function startsWithNumber(num1: number, num2: number) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    return str2.startsWith(str1);
}

/**更换英雄时更新皮肤列表 */
function updateChampion(value: number) {
    fetch(`/lol-game-data/assets/v1/champions/${value}.json`).then((res) => res.json()).then((res: ChampionInfo) => {
        const skins = res.skins.map((item) => {
            return {
                label: item.name,
                value: item.id,
                icon: item.tilePath,
                path: item.splashPath
            }
        });
        ChampionSkins.value = skins;
        if (startsWithNumber(backgroundChampionId.value, backgroundChampionSkinId.value)) {
            return;
        }
        backgroundChampionSkinId.value = skins[0].value;
    });

}
/**更换皮肤时触发,更新背景图 */
function updateSkin(value: number, option: { label: string, value: number, icon: string, path: string }) {
    overOptions.backgroundChampionSkinId = backgroundChampionSkinId.value;
    overOptions.backgroundChampionId = backgroundChampionId.value;
    overOptions.backgroundPath = option.path;
}

onMounted(() => {
    Champions.value = LcuData.AllChampionData.map((item) => {
        return {
            label: item.name,
            value: item.id,
            icon: `/lol-game-data/assets/v1/champion-icons/${item.id}.png`
        }
    })
    updateChampion(overOptions.backgroundChampionId);
});
</script>