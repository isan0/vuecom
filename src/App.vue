<template>
  <input v-model="subcomentario" placeholder="Deja tu comentario" @keypress.enter="guardarMensaje">
  <button @click="cargarComentarios">Cargar ya</button>
  <p v-for="comentario in comentarios" :key="comentario.id">
    {{comentario.texto}}
  </p>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        subcomentario: "holaaa",
        comentarios: [
          {id: 1, texto: "adios muy buenas", fecha: "17/17/11"},
          {id: 2, texto: "que tal muy buenas", fecha: "17/15/11"},
          {id: 3, texto: "bye bye muy buenas", fecha: "17/16/11"},
          {id: 4, texto: "jajaja muy buenas", fecha: "17/18/11"}
        ]
      }
    },
    methods: {
      guardarMensaje(){
        // Aqui se guardara en la BBDD
        this.comentarios.push({id: 5, texto: this.subcomentario})
      },
      async cargarComentarios(){
        this.comentarios = await(await fetch("/api/get")).json();
      }
    }
  }
</script>

<style scoped>
  input {
    color: blue;
    font-family: sans;
  }
</style>