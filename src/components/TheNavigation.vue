<template>
  <nav class id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/brazil">Brazil</router-link>|
    <router-link to="/awai">Awai</router-link>|
    <router-link to="/Jamaica">Jamaica</router-link>|
    <router-link to="/panama">Panama</router-link>|
  </nav>
</template>

<script>
export default {
  
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.vue-school-active-class {
  color: #4289b9;
}
</style>


