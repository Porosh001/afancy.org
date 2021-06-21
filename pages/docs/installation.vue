<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Installation</div>
    <div class='fs-4 text-success'>Requirement:</div>
    <ul>
      <li>Nuxt framework</li>
      <li>Bootstrap framework</li>
      <li>Vue Knowledge</li>
      <li>TypeScript Knowledge (optional)</li>
    </ul>

    <hljs lang='sh'>
    # install afancy in nuxt application
    yarn add @afancy/afancy
    # or,
    npm i @afancy/afancy
    </hljs>

    <div class='my-2'>copy and paste these code in plugins directory</div>
    <hljs lang='typescript'>
    // file: afancy.ts   (plugins/afancy.ts)
    import Vue from &apos;vue&apos;;
    import Afancy from &apos;@afancy/afancy/src&apos;;

    Vue.use(Afancy);
    </hljs>
    <hljs class='mt-3' lang='typescript'>
    // file: afancy.d.ts    (plugins/afancy.d.ts)
    import Vue from &apos;vue&apos;;

    declare module &apos;vue/types/vue&apos; {
      interface Vue {
        $fnc: {
          version: string
        }
      }
    }
    </hljs>

    <hljs class='mt-3' lang='typescript'>
    /** add afancy plugin in nuxt.config.js file */
    // file: nuxt.config.js
    plugins: [
      &apos;@/plugins/afancy&apos;
    ]
    </hljs>
    <hljs class='mt-3' lang='json'>
    /** add afancy.d.ts in tsconfig.json */
    &quot;include&quot;: [
      &quot;plugins/afancy.d.ts&quot;
    ]
    </hljs>


  </div>
</template>



<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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