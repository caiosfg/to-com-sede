<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- {{ cpf | cpf | inverter }} -->
    <button @click="post()">Helllllloooo</button>
  </div>
</template>

<script>
// import wattersMixin from "./wattersMixin";
export default {
  // mixins: [wattersMixin],
  // filters: {
  //   cpf(valor) {
  //     const arr = valor.split("");
  //     arr.splice(3, 0, ".");
  //     arr.splice(7, 0, ".");
  //     arr.splice(11, 0, "-");

  //     return arr.join("");
  //   },
  // },
  name: "App",
  data() {
    return {
      cpf: "12345678912",
    };
  },
  methods: {
    post() {
      this.$http
        .post("usuarios.json", {
          name: "Caio",
          email: "caio.sfg@gmail.com",
        })
        .then((res) => console.log(res));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>