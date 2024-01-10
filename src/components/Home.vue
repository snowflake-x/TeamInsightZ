<template>
    <div class="home">

        <span class="title">TeamInsightZ</span>
        <div>
            <span>{{ $t('wating') }}</span>
        </div>
        <n-input-group style="width: 50%;">
            <n-input type="text" show-count  v-model:value="value"/>
            <n-button type="primary"  @click="handleInput" color="#8a2be2">
                {{ $t('search')  }}
            </n-button>
        </n-input-group>

    </div>
</template>
<style scoped>
.home {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.title {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton ,NInputGroup} from 'naive-ui';
const value = ref<string>('')
const props = defineProps({
    event: Function
})
const emit = defineEmits(['event'])
const handleInput = () => {
    // 调用父组件传递的回调函数
    if (props.event) {
        if(value.value)
        //这里的转化#号是因为riot的api是%23
        fetch('/lol-summoner/v1/summoners?name=' + value.value.replace(/#/g, '%23')).then(res => res.json()).then((res: PlayerInfo) => {
            if (props.event)
            if (res.puuid) {
                props.event(res.puuid)
            }else{
                console.log('[TeamInsightZ] 未找到玩家['+value.value+']');
                
            }
                
        })

    }
}
</script>