<template>
    <div>
        <h2>Agregar Tarea</h2> 
      <div @keyup.enter="$emit('create-new-task', task)">
        Nombre de la tarea
        <b-form-input type="text" placeholder="Ingrese tarea" v-model="task.newTaskTitle" />
        Descripcion de la tarea
        <b-form-input type="text" placeholder="Descripción" v-model="task.newTaskDesc" />
      </div>
      Agregar Tarea
      <b-button variant="outline-primary" @click="$emit('create-new-task', task)"> + </b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewTask",
    components: "",
    props: {},
    data() {
      return {
        task: {
          newTaskTitle: "",
          newTaskDesc: ""
        }
      };
    },
    methods: {
    },
    computed: {}
  };
  </script>
  
  <style></style>