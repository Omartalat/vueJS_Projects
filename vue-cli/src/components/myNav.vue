<template>
  <div class="my-nav">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="menu">
      <ul>
        <li v-for="(navlink, i) in navLinks" :key="i">
          <router-link class="menu-link" :to="navlink.to">
            {{ navlink.name }}
          </router-link>
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
      navLinks: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "About",
          to: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    list-style: none;
  }
  .menu-link {
    color: inherit;
    text-decoration: none;
  }
  button {
    padding: 5px 10px;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
