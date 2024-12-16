<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter } from "vue-router";
import { signInWithEmailAndPassword, auth } from '@/auth';

const router = useRouter();

const email = ref('');
const password = ref('');

const signIn = async () => {
    try {
        // console.log(`auth ----> ${auth}`);
        const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        // console.log(user);
        alert('Bienvenido 👋🏼')
        router.push('/');
        email.value = '';
        password.value = '';
    } catch (error) {
        console.error('Error al iniciar sesióno:', error);
    }
}

</script>

<template>
    <div>
        <h2>Login</h2>
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="signIn">Iniciar sesión</button>
    </div>
</template>

<style lang="scss" scoped></style>