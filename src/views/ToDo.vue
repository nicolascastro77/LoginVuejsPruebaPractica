<template>
    


    <b-container id="mainContainer" align-v="center">

        <div>
  <b-jumbotron >
    <div class="filter-bar">
        <h1> Lista de tareas</h1>
        <b-button-group>
      <b-button variant="success" @click="filterBy = 'all'">Todas</b-button>
      <b-button variant="info" @click="filterBy = 'todo'">Por Hacer </b-button>
      <b-button variant="warning" @click="filterBy = 'done'">Realizadas </b-button>
    </b-button-group>
      </div>
      <new-task @create-new-task="createNewTask"></new-task>
  </b-jumbotron>


  <div>
  <b-card class="text-center">
    <div class="">
        <h2> Tareas</h2>
        <div v-for="task in tasksToShow" :key="task.taskId">
        <task-item
          class="blue"
          :task-details="task"
          @task-update="updateATask"
        ></task-item>
      </div>
    </div>
  </b-card>
</div>


</div>
    </b-container>
  </template>
  
  <script>
  import NewTask from "../components/NewTask";
  import TaskItem from "../components/TaskItem";
  export default {
    name: "TodoList",
    components: { NewTask, TaskItem },
    props: {
      // msg: String
    },
    data() {
      return {
        tasks: [],
        filterBy: "all"
      };
    },
    mounted() {
      this.getFromLocalStorage();
    },
    methods: {
      createNewTask(task) {
        // adds a new task to the array
        let newTask = {
          taskTitle: task.newTaskTitle,
          taskDescription: task.newTaskDesc,
          taskStatus: "todo",
          taskId: this.newTaskId
        };
        if (newTask.taskTitle.length > 0) {
          this.tasks.push(newTask);
          this.saveToLocalStorage();
        }
      },
      updateATask(updatedTask) {
        this.tasks.forEach(task => {
          if (task.taskId === updatedTask.itemId) {
            task.taskTitle = updatedTask.itemTitle;
            task.taskDescription = updatedTask.itemDesc;
            task.taskStatus = updatedTask.itemStatus;
          }
        });
        this.saveToLocalStorage();
      },
      getFromLocalStorage() {
        if (localStorage.tasks) this.tasks = JSON.parse(localStorage.getItem("tasks"));
      },
      saveToLocalStorage() {
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
      },
    },
    computed: {
      newTaskId() {
        return (
          this.tasks.reduce((max, curr) => Math.max(max, curr.taskId), 0) + 1
        );
      },
      tasksToShow() {
        return this.filterBy === "all"
          ? this.tasks.filter(task => task.taskStatus !== "deleted")
          : this.tasks.filter(task => task.taskStatus === this.filterBy);
      }
    }
  };
  </script>
  
  <style>
  </style>