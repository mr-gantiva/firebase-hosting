<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, auth, signOut } from '@/auth';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        await signOut(auth);
        alert('Usuario registrado con éxito ✅');
        email.value = '';
        password.value = '';

        router.push('/login');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
}
</script>

<template>
    <div>
        <h2>Registro</h2>
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="register">Registrarse</button>
    </div>
</template>


<style lang="scss" scoped></style>