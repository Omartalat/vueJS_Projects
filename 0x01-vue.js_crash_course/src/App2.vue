<script setup>
import { ref } from 'vue'

const name = ref('Omar Talat')
const status = ref('active')
const tasks = ref(['Task One', 'Task Two', 'Task Three'])
const newTask = ref('')
const toggleStatus = () => {
  if (status.value === 'inactive') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'active'
  } else {
    status.value = 'inactive'
  }
}
const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}
const deleteTask = (i) => {
  tasks.value.splice(i, 1)
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <form @submit.prevent="addTask">
    <label for="newTask">New Task</label>
    <input type="text" id="input-task" name="newTask" v-model="newTask" />
    <button type="submit">submit</button>
  </form>
  <ul>
    <li v-for="(task, i) in tasks">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(i)">X</button>
    </li>
  </ul>
  <a :href="http">example</a>
  <br />
  <br />
  <button @click="toggleStatus">Change the status</button>
</template>

<style scoped></style>
