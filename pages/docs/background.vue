<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Background</div>

    <div class="fs-4 text-primary">Background Color</div>
    <div class='my-2'>Afancy has mainly 6 classes for background color</div>
    <div class="row gy-3">
      <div class="col-4"><div class='box text-center pt-2 fnc-bg-primary'>.fnc-bg-primary</div></div>
      <div class="col-4"><div class='box text-center pt-2 fnc-bg-success'>.fnc-bg-success</div></div>
      <div class="col-4"><div class='box text-center pt-2 fnc-bg-danger'>.fnc-bg-danger</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black fnc-bg-warning'>.fnc-bg-warning</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black fnc-bg-light'>.fnc-bg-light</div></div>
      <div class="col-4"><div class='box text-center pt-2 fnc-bg-black'>.fnc-bg-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** background-color classes */
    .fnc-bg-primary
    .fnc-bg-success
    .fnc-bg-danger
    .fnc-bg-warning
    .fnc-bg-light
    .fnc-bg-black
    </hljs>

    <div class="fs-4 mt-5 text-primary">Background Hover Color</div>
    <div class='my-2'>move the mouse over the box</div>
    <div class="row gy-3">
      <div class="col-4"><div class='box text-center pt-2 border border-primary fnc-hover-bg-primary'>.fnc-bg-primary</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-success fnc-hover-bg-success'>.fnc-bg-success</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-danger  fnc-hover-bg-danger'>.fnc-bg-danger</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-warning fnc-hover-bg-warning'>.fnc-bg-warning</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-light   fnc-hover-bg-light fnc-hover-text-black'>.fnc-bg-light</div></div>
      <div class="col-4"><div class='box text-center pt-2 border                fnc-hover-bg-black' style='border: 3px solid #000 !important;' >.fnc-bg-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** background color classes in hover state */
    .fnc-hover-bg-primary
    .fnc-hover-bg-success
    .fnc-hover-bg-danger
    .fnc-hover-bg-warning
    .fnc-hover-bg-light
    .fnc-hover-bg-black
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