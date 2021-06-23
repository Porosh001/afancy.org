<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Text</div>

    <div class="fs-4 text-primary">text Color</div>
    <div class='my-2'>Afancy has mainly 6 classes for text color</div>
    <div class="row gy-3">
      <div class="col-4"><div class='text-primary'>.text-primary</div></div>
      <div class="col-4"><div class='text-success'>.text-success</div></div>
      <div class="col-4"><div class='text-danger'>.text-danger</div></div>
      <div class="col-4"><div class='text-warning'>.text-warning</div></div>
      <div class="col-4"><div class='text-light'>.text-light</div></div>
      <div class="col-4"><div class='text-black bg-success'>.text-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** text color classes */
    .text-primary
    .text-success
    .text-danger
    .text-warning
    .text-light
    .text-black
    </hljs>

    <div class="fs-4 mt-5 text-primary">text hover Color</div>
    <div class='my-2'>move the mouse over the text</div>
    <div class="row gy-3">
      <div class="col-4"><div class='hover-text-primary'>.text-primary</div></div>
      <div class="col-4"><div class='hover-text-success'>.text-success</div></div>
      <div class="col-4"><div class='hover-text-danger'>.text-danger</div></div>
      <div class="col-4"><div class='hover-text-warning'>.text-warning</div></div>
      <div class="col-4"><div class='hover-text-light'>.text-light</div></div>
      <div class="col-4"><div class='hover-text-black bg-success'>.text-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** text hover color classes */
    .hover-text-primary
    .hover-text-success
    .hover-text-danger
    .hover-text-warning
    .hover-text-light
    .hover-text-black
    </hljs>

    <div class="fs-4 mt-5 text-primary">text alignment</div>
    <div class="bg-primary text-start">text-start</div>
    <div class="bg-success text-center">text-center</div>
    <div class="bg-black text-end">text-end</div>
    <hljs class='mt-3' lang='css'>
    /** text alignment classes */
    .text-start
    .text-center
    .text-end
    </hljs>

    <div class="fs-4 mt-5 text-primary">text transform</div>
    <hljs class='mt-3' lang='css'>
    /** text transform classes */
    .text-lowercase
    .text-uppercase
    .text-capitalize
    </hljs>

    <div class="fs-4 mt-5 text-primary">text highlight</div>
    <hljs class='mt-3' lang='css'>
    /** text highlight classes */
    .selection-primary
    .selection-success
    .selection-danger
    .selection-warning
    .selection-light
    .selection-black
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