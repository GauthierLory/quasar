<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn v-if="isLoggedIn()" flat @click="drawer = !drawer" round dense icon="menu" />
        <q-btn v-else color="primary">
          <RouterLink style="text-decoration: none; color: inherit;" :to="{ name: 'Login' }">
            Connexion
          </RouterLink>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="400">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item v-if="isLoggedIn()" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              <RouterLink :to="{ name: 'Logout' }">
                <btn color="secondary" @click="drawer = !drawer">Logout</btn>
              </RouterLink>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import useAuthUser from '../composables/useAuthUser.js'

const { isLoggedIn } = useAuthUser()
export default {
  setup () {
    return {
      drawer: ref(false),
      isLoggedIn
    }
  }
}
</script>
