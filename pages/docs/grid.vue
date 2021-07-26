<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Grid</div>

    <hljs lang='css'>
    /** container classes */
    .fnc-grid
    .fnc-col-[sm, md, lg, xl, xxl]-[1-12]

    

    /** breakpoints
     *
     * sm: 576px
     * md: 768px
     * lg: 992px
     * xl: 1200px
     * xxl: 1400px
     *
     */
    </hljs>


  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import hljs from '@/components/afancy/hljs.vue';
export default Vue.extend({
  layout: 'docs',
  components: {hljs},
  head() {
    return {
      title: 'Grid' + this.$config.base.APP_TITLE
    }
  }
})
</script>