<template>
  <div>
    <ul>
      <li v-for="(student, index) in students" :key="index">{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
