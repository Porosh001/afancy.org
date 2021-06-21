<template>
  <div>


    <Top />
    <div class="container-fluid my-5">
      <div class="row gy-4">
        <div class="col-md-3"><content-menus /></div>
        <div class="col-md-9"><Nuxt /></div>
      </div>
    </div>
    <Bottom />







  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Top from '@/components/layouts/default/navigation/top.vue';
import Bottom from '@/components/layouts/default/navigation/bottom.vue';
import content_menus from '@/components/layouts/default/content/menus.vue';

export default Vue.extend({
  components: {Top, Bottom, 'content-menus': content_menus}
})
</script>
