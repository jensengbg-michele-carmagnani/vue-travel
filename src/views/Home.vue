<template>
  <div class="home">
    <h1>All destination</h1>
    <section class="destinations">
      <article v-for="destination in destinations" :key="destination.name">
        <router-link :to="{name:'DestinationDetails', params:{id:destination.id}}">
          <h2>{{destination.name}}</h2>
        </router-link>
        <figure>
          <router-link :to="{name:'DestinationDetails',params:{id:destination.id}}">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
          </router-link>
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
img {
  max-width: 200px;
}
</style>
