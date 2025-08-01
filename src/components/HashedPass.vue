<template>
  <div>
    <h1> Username </h1>
    <input type="text" placeholder="Enter Username"/>
    <h1> Password </h1>
    <div v-if="isActive">
        <input type="password" placeholder="Enter Password" />
    </div>
    <div v-else>
        <input type="text" v-model="password" placeholder="Enter Password" />
    </div>
    <button @click="SeePass">See Password</button>
  </div>
</template>

<script>
export default {
    name : 'HashedPass',
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        SeePass(){
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>

</style>