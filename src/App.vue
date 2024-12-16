<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from "vue-router";
import { auth, signOut } from "@/auth";
// import router from './router';

// const user = ref(auth.currentUser);

const user = ref(null);

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    user.value = null;
    alert('Sesión cerrada');
    router.push('/login')
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  user.value = auth.currentUser;

  auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
  });
});
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link v-if="!user" to="/signup">Registro</router-link>
    <router-link v-if="!user" to="/login">Login</router-link>
    <button v-if="user" @click="logout">Cerrar Sesión</button>
    <router-view />
  </div>
</template>


<style scoped>
/* .nav {
  background: #fff;
} */
</style>