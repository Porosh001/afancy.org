<template>
  <div>

    <div class='list-group border-0'>
      <nuxt-link 
        class='list-group-item rounded-0 border-success bg-transparent link-hover text-light'
        v-for='(e, i) in menus'
        :key='i'
        :to='e.path'
        :class="{ active: ($route.path===e.path) ? true : false }"
        >
        {{e.name}}
      </nuxt-link>
    </div>

  </div>
</template>



<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data(){
    return {
      menus: [
        {
          name: 'Installation',
          path: '/docs/installation'
        },
        {
          name: 'Notification',
          path: '/docs/notification'
        },
        {
          name: 'Cursor',
          path: '/docs/cursor'
        }
      ]
    }
  }
})
</script>





<style scoped>
.link-hover:hover, .active {
  background-color: var(--bs-success) !important;
}
</style>