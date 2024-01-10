import { defineStore } from "pinia";
import { ref } from "vue";
export const useOverlayStore = defineStore("overlayOptions", () => {
    const overlayOptions = ref({
        show: true,
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });
    const background = ref({
        LeftRGBA:"128, 128, 128, 0.2",
        FooterRGBA:"128, 128, 128, 0.2",
        HeaderRGBA:"128, 128, 128, 0.2",
        MainRGBA:"128, 128, 128, 0.2",
    })
    const settingMode = ref(false);
    const backgroundPath = ref("/lol-game-data/assets/v1/champion-splashes/64/64003.jpg");
    const backgroundChampionId = ref(64)
    const backgroundChampionSkinId = ref(64003)
    const language = ref("zh-CN")
    return {
        overlayOptions,
        settingMode,
        backgroundPath,
        backgroundChampionId,
        backgroundChampionSkinId,
        background,
        language
    };
});