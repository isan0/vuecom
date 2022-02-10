<template>
  <input v-model="subcomentario" placeholder="Deja tu comentario" @keypress.enter="guardarMensaje">
  <button @click="cargarComentarios">Cargar ya</button>
  <p v-for="comentario in comentarios" :key="comentario.id">
    {{comentario.contenido}}
  </p>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        subcomentario: "holaaa",
        comentarios: [
          {id: 1, contenido: "adios muy buenas", fecha: "17/17/11"},
          {id: 2, contenido: "que tal muy buenas", fecha: "17/15/11"},
          {id: 3, contenido: "bye bye muy buenas", fecha: "17/16/11"},
          {id: 4, contenido: "jajaja muy buenas", fecha: "17/18/11"}
        ]
      }
    },
    methods: {
      async guardarMensaje(){
        // Aqui se guardara en la BBDD
        let resultado = await (await fetch(`/api/add?contenido=${this.subcomentario}`)).json();
        this.comentarios.push({id: resultado.insertId, contenido: this.subcomentario});
        this.subcomentario="";
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