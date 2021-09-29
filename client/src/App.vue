<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ cpf | cpf }}
  </div>
</template>

<script>
export default {
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");

      return arr.join("");
    },
  },
  name: "App",
  data() {
    return {
      cpf: "12345678912",
    };
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