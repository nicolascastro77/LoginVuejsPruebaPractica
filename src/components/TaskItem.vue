<template>
    <div>
      <div>
        <div>
          <div class="clickable" @click="showDescription = !showDescription">
            <input
              class="clickable"
              :disabled="!editTitle"
              type="text"
              v-model="task.itemTitle"
              @blur.stop="editTitle = false"
            />
          </div>
          <b-button variant="outline-warning" v-show="!showDescription" @click="editTitle = !editTitle">
            {{ editTitleButton }}
          </b-button>
        </div>
      </div>
      <div v-show="showDescription">
        <textarea
          :disabled="!editDescription"
          v-model="task.itemDesc"
          @blur.stop="editDescription = false"
        ></textarea>
      </div>
      {{ task.itemStatus }}
      <button
        v-show="showDescription"
        @click="editDescription = !editDescription"
      >
        {{ editDescriptionButton }}
      </button>
      <b-button variant="outline-success" @click="setStatusButton">{{ statusButton }}</b-button>
      <b-button variant="outline-danger" @click="moveToDeleted">Eliminar</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskItem",
    props: {
      taskDetails: {
        taskTitle: String,
        taskDescription: String,
        taskStatus: String,
        taskId: Number
      }
    },
    data() {
      return {
        showDescription: false,
        editDescription: false,
        editTitle: false,
        task: {
          itemTitle: this.taskDetails.taskTitle,
          itemDesc: this.taskDetails.taskDescription,
          itemStatus: this.taskDetails.taskStatus,
          itemId: this.taskDetails.taskId
        }
      };
    },
    methods: {
      setStatusButton() {
        this.task.itemStatus = this.task.itemStatus === "Por hacer" ? "Realizada" : "Por hacer";
      },
      moveToDeleted() {
        this.task.itemStatus = "deleted";
      }
    },
    updated() {
      this.$emit("task-update", this.task);
    },
    computed: {
      editTitleButton() {
        return this.editTitle ? "Guardar" : "Editar";
      },
      editDescriptionButton() {
        return this.editDescription ? "Guardar" : "Editar";
      },
      statusButton() {
        return this.task.itemStatus === "Por hacer" ? "Realizada" : "Por hacer";
      }
    }
  };
  </script>
  
  <style >
  .clickable {
    cursor: pointer;
  }
  </style>