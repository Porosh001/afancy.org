<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Colors</div>

    <div class='my-2'>Afancy has main colors that are maintained throughout the application to facilitate change and effective operation.</div>
    <div>Default colors:</div>
    <ul>
      <li>primary</li>
      <li>success</li>
      <li>danger</li>
      <li>warning</li>
      <li>light</li>
      <li>dark</li>
    </ul>

    <div class="row gy-3">
      <div class="col-4"><div class='box text-center pt-2 bg-primary'>primary</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-success'>success</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-danger'>danger</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black bg-warning'>warning</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black bg-light'>light</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-black'>black</div></div>
    </div>


    <hljs class='mt-5' lang='css'>
    /** :root */
    :root {
      --fnc-primary: #185cff;
      --fnc-success: #188457;
      --fnc-danger:  #e61f31;
      --fnc-warning: #d78f06;
      --fnc-light:   #faf9f8;
      --fnc-black:   #000000;
    }
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
      title: 'Colors' + this.$config.base.APP_TITLE
    }
  }
}
</script>


<style scoped>
.box {
  /* width: 200px; */
  height: 45px;
}
</style>