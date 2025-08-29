<script>
export default {
  data() {
    return {
      name: 'Omar Talat',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      http: 'http://example.com',
    }
  },

  methods: {
    toggleStatus() {
      if (this.status === 'inactive') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'active'
      } else {
        this.status = 'inactive'
      }
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <ul>
    <li v-for="task in tasks">{{ task }}</li>
  </ul>
  <a :href="http">example</a>
  <br />
  <br />
  <button @click="toggleStatus">Change the status</button>
</template>

<style scoped></style>
