<template>
    <div class="container">
        <h1>Weather in Hyderabad</h1>
    <br/>
        <h1>Temperature: {{ temp }}</h1>
    <br/>
        <h1>Humidity : {{ percentage }}%</h1>
    <br/>
        <h1>Weather Condition : {{ condition }}</h1>
    <br/>
        <button @click="getInfo">Get Info</button>
    </div>         
</template>

<script setup>
import { ref } from 'vue'
const temp = ref(0)
const percentage = ref(0)
const condition = ref('')
function getInfo(){
    temp.value = Math.floor(Math.random() * (45 - 15 + 1)) + 15;         
    percentage.value = Math.floor(Math.random() * 100);   
    const conditions =  ['Sunny', 'Rainy', 'Foggy', 'Clear', 'Windy', 'Stormy', 'Cloudy']
    condition.value = conditions[Math.floor(Math.random() * conditions.length)]
}
</script>

<style>
.container{
    text-align: center;
}
</style>