<template>
    <div class="connect-wrap">
        <button @click="connectHandler()"> Connect </button>
    </div>
</template>

<script>
import { initWeb3 } from '@/utils/web3.js'

export default {
    name: 'connect',
    methods: {
        async connectHandler() {
          // ethers
          try {
            await initWeb3(/*this*/)
          } catch (e) {
            console.log(e)
          }
        }
    }
}
</script>