<template>
  <div>

    <div class='list-group border-0 mt-2'>
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
          name: 'Colors',
          path: '/docs/colors'
        },
        {
          name: 'Background',
          path: '/docs/background'
        },
        {
          name: 'Text',
          path: '/docs/text'
        },
        {
          name: 'Cursor',
          path: '/docs/cursor'
        },
        {
          name: 'Scrollbar',
          path: '/docs/scrollbar'
        },
        {
          name: 'Grid',
          path: '/docs/grid'
        },
        {
          name: 'Placeholder',
          path: '/docs/placeholder'
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