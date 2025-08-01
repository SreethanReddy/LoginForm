<template>
  <div class="div_1">
    <h1>Username</h1>
    <input type="text" v-model="username" placeholder="Enter Username" />
    <h1>Password</h1>
    <input type="password" v-model="password" placeholder="Enter Password" :v-if="isActive" />
    <input type="password" v-model="password" placeholder="Enter Password" :v-else="isActive" />
    <br /><br /><br /><br />
    <button @click="login">Login</button>
    <br />
    <button @click="SeePassword">See Password</button>
    <h1>{{ loginSuccessful }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const isActive = ref(true)
const loginSuccessful = ref('')

// function SeePassword(){

// }

function login() {
  if (username.value === 'Sreethan' && password.value === '1234') {
    loginSuccessful.value = 'Login Successful'
  } else {
    loginSuccessful.value = 'Login Unsuccessful, Try again'
  }
}
function SeePassword(){
  isActive
}
</script>

<style scoped>
.div_1 {
  text-align: center;
}
</style>
