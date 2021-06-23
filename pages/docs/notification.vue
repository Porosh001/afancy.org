<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Notification</div>

    <div class="btn-group mb-2">
      <button @click="ntfc('neutral', 'Hi, This is a neutral notification example. This is default notification without adding additional css.')" class="btn btn-outline-primary">Neutral</button>
      <button @click="ntfc('success', 'Hi, This is a success notification example. This is default notification without adding additional css.')" class="btn btn-outline-success">Success</button>
      <button @click="ntfc('error',   'Hi, This is a error   notification example. This is default notification without adding additional css.')" class="btn btn-outline-danger">Error</button>
    </div>

    <ntfc ref='ntfc' />

    <hljs lang='xml'>
    &lt;!-- template --&gt;
    &lt;ntfc ref=&apos;ntfc&apos; /&gt;
    </hljs>

    <hljs class='mt-2' lang='js'>
    // method
    this.$refs.ntfc.open({
      content: &apos;&apos;,
      style: {
        &apos;--background-color&apos;: &apos;blue&apos; // change the background and shadow color
        // feel free to add custom CSS. note: css declaration must be separated by comma (,). eg.
        // &apos;border-radius&apos;: &apos;15px&apos;,
        // &apos;color&apos;: &apos;white&apos;
      }
    });
    </hljs>


  </div>
</template>



<script>
import hljs from '@/components/afancy/hljs.vue';
export default {
  layout: 'docs',
  components: {hljs},
  head() {
    return {
      title: 'Notification' + this.$config.base.APP_TITLE
    }
  },
  methods: {
    ntfc( type ,content ){
      if(type==='neutral') type='blue';
      if(type==='success') type='var(--bs-success)';
      if(type==='error') type='var(--bs-danger)';
      
      this.$refs.ntfc.open({
        content,
        style: {
          '--background-color': type
        }
      });
    }
  }
}
</script>