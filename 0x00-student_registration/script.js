const { createApp } = Vue;

createApp({
  data() {
    return {
      id: 0,
      form: { name: "", email: "", password: "" },
      students: [],
    };
  },

  methods: {
    addStudent() {
      this.id++;
      this.students.push({
        id: this.id,
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      });
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      console.log(this.students);
    },
  },
}).mount("#app");
