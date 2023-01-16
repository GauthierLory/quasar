<template>
  <q-page class="flex flex-center">

    <q-form style="max-width: 450px" class="q-gutter-sm">
      <q-input outlined v-model="Email" label="Email to receive magic link" />
      <q-btn label="Magic Link" type="submit" color="primary" />
      <q-btn outline label="Login with Twitter" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
