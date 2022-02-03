<template>
  <section class="container">
    <Header />
    <nuxt-link to="/users">Usuários</nuxt-link>
  </section>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'IndexPage',
  components:{
    Header
  }
}
</script>
