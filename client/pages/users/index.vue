<template>
    <div>
        <h1>Usuarios</h1>
        <input type="text" v-model="userId">
        <button @click="onSaveUser">Salvar</button>
    </div>
</template>

<script>

export default{
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        onSaveUser(){
            this.$router.push('/users/' + this.userId)
        }
    },
    layout: 'default'
}
</script>
