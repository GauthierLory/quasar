<template>
  <q-page class="flex flex-center">
    <q-form class="q-gutter-sm" @submit.prevent="handleLogin()">
      <q-input outlined v-model="email" label="Email to receive magic link" />
      <q-btn label="Magic Link" type="submit" color="primary" />
      <q-btn outline label="Login with Twitter" @click.prevent="handleLogin('twitter')" type="submit" color="primary" />
      <q-btn outline label="Login with Github" @click.prevent="handleLogin('github')" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>
<script>
export default {
  name: 'LoginPage'
}
</script>
<script setup>
import { ref } from 'vue'
import useAuthUser from '../composables/useAuthUser.js'

import { useRouter } from 'vue-router'

const router = useRouter()

const { signInWithEmail, loginWithSocialProvider } = useAuthUser()
const email = ref('')

const handleLogin = async (provider) => {
  try {
    if (provider) {
      return await loginWithSocialProvider(provider)
    } else {
      await signInWithEmail(email.value)
      alert('Check your email for the login link!')
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    await router.push('/')
  }
}
</script>
