<template>
  <div class="my-nav">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="links">
      <ul>
        <li v-for="navLink in navLinks" :key="navLink.to">
          <router-link :to="navLink.to" class="menu-link">{{
            navLink.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button>Login</button>
      <button>Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      navLinks: [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
      ],
    };
  },
};
</script>

<style>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blanchedalmond;
  padding: 0 20px;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
}
.btn {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
button {
  background-color: aquamarine;
  padding: 10px 20px;
}

img {
  width: 40px;
}
.menu-link {
  color: inherit;
  text-decoration: none;
}
</style>
