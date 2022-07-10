<template>
    <header class="header">
    </header>
</template>

<script>
import Header from '../Header.vue'
export default {
  components: { Header },
    name: 'Header'
}
</script>

<style scoped>
    .content {
        grid-area: header;
        background-color: linear-gradient( to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>