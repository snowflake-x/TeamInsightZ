<template>
    <div class="main">
        <h2 style="color: white;">InGame</h2>
        <!-- <table>
            <thead>
                <tr>
                    <th>选手</th>
                    <th>英雄</th>
                    <th>最近KDA</th>
                    <th>段位</th>
                    <th>赛季胜率</th>
                    <th>位置</th>
                    <th>赛季胜率</th>
                    <th>段位</th>
                    <th>最近KDA</th>
                    <th>英雄</th>
                    <th>选手</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <img src="/lol-game-data/assets/v1/profile-icons/5662.jpg">
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table> -->
    </div>
</template>
<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

}
</style>
<script setup lang="ts">
import {ref} from 'vue'
import { useGameParameters } from '@/states/gameParameters';
const gameParameters = useGameParameters();

</script>