<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Installation</div>
    <div class='fs-4 text-success'>Requirement:</div>
    <ul>
      <li>Nuxt framework</li>
      <li>Bootstrap framework</li>
    </ul>

    <hljs lang='bash'>
    # install afancy in nuxt application
    yarn add @afancy/afancy
    # or
    npm i @afancy/afancy
    </hljs>

    <div class='my-2'>copy and paste these code in plugins directory</div>
    <hljs lang='javascript'>
    // file: afancy.js   (plugins/afancy.js)
    import Vue from &apos;vue&apos;;
    import Afancy from &apos;@afancy/afancy&apos;;
    import &apos;@afancy/afancy/dist/css/afancy.min.css&apos;;

    Vue.use(Afancy);
    </hljs>

    <hljs class='mt-3' lang='typescript'>
    /** add afancy plugin in nuxt.config.js file */
    // file: nuxt.config.js
    plugins: [
      &apos;@/plugins/afancy&apos;
    ]
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
      title: 'Installation' + this.$config.base.APP_TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Install afancy in nuxt application'
        }
      ],
    }
  }
})
</script>