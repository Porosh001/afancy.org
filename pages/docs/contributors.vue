<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Contributors</div>

    <div class="alert alert-success fnc-text-center fs-4 mt-3">Coming Soon</div>


  </div>
</template>



<script>
import hljs from '@/components/afancy/hljs.vue';
export default {
  layout: 'docs',
  components: {hljs},
  head() {
    return {
      title: 'Colors' + this.$config.base.APP_TITLE
    }
  }
}
</script>
