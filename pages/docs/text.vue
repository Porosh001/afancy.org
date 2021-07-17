<template>
  <div>

    <div class="h1 text-center fnc-text-primary" style='font-family: Fredericka the Great;'>Text</div>

    <div class="fs-4 fnc-text-primary">text Color</div>
    <div class='my-2'>Afancy has mainly 6 classes for text color</div>
    <div class="row gy-3">
      <div class="col-4"><div class='fnc-text-primary'>.fnc-text-primary</div></div>
      <div class="col-4"><div class='fnc-text-success'>.fnc-text-success</div></div>
      <div class="col-4"><div class='fnc-text-danger'>.fnc-text-danger</div></div>
      <div class="col-4"><div class='fnc-text-warning'>.fnc-text-warning</div></div>
      <div class="col-4"><div class='fnc-text-light'>.fnc-text-light</div></div>
      <div class="col-4"><div class='fnc-text-black fnc-bg-success'>.fnc-text-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** text color classes */
    .fnc-text-primary
    .fnc-text-success
    .fnc-text-danger
    .fnc-text-warning
    .fnc-text-light
    .fnc-text-black
    </hljs>

    <div class="fs-4 mt-5 fnc-text-primary">text hover Color</div>
    <div class='my-2'>move the mouse over the text</div>
    <div class="row gy-3">
      <div class="col-4"><div class='fnc-hover-text-primary'>.fnc-text-primary</div></div>
      <div class="col-4"><div class='fnc-hover-text-success'>.fnc-text-success</div></div>
      <div class="col-4"><div class='fnc-hover-text-danger'>.fnc-text-danger</div></div>
      <div class="col-4"><div class='fnc-hover-text-warning'>.fnc-text-warning</div></div>
      <div class="col-4"><div class='fnc-hover-text-light'>.fnc-text-light</div></div>
      <div class="col-4"><div class='fnc-hover-text-black fnc-bg-success'>.fnc-text-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** text hover color classes */
    .fnc-hover-text-primary
    .fnc-hover-text-success
    .fnc-hover-text-danger
    .fnc-hover-text-warning
    .fnc-hover-text-light
    .fnc-hover-text-black
    </hljs>

    <div class="fs-4 mt-5 fnc-text-primary">text alignment</div>
    <div class="fnc-bg-primary fnc-text-start">text-start</div>
    <div class="fnc-bg-success fnc-text-center">text-center</div>
    <div class="fnc-bg-black fnc-text-end">text-end</div>
    <div class="fnc-bg-black fnc-text-justify">text-justify</div>
    <hljs class='mt-3' lang='css'>
    /** text alignment classes */
    .fnc-text-start
    .fnc-text-center
    .fnc-text-end
    .fnc-text-justify
    </hljs>

    <div class="fs-4 mt-5 fnc-text-primary">text highlight</div>
    <hljs class='mt-3' lang='css'>
    /** text highlight classes */
    .fnc-selection-primary
    .fnc-selection-success
    .fnc-selection-danger
    .fnc-selection-warning
    .fnc-selection-light
    .fnc-selection-black
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