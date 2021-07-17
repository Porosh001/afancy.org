<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>fnc-cursor</div>

    <div class='my-2'>Move the mouse over these boxes</div>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-none">none</button>
      <button  class="btn border-success text-light fnc-cursor-auto">auto</button>
      <button  class="btn border-danger text-light  fnc-cursor-default" >default</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-text">text</button>
      <button  class="btn border-success text-light fnc-cursor-pointer">pointer</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-wait">wait</button>
      <button  class="btn border-success text-light fnc-cursor-progress">progress</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-move">move</button>
      <button  class="btn border-success text-light fnc-cursor-copy">copy</button>
      <button  class="btn border-danger text-light  fnc-cursor-col-resize" >col-resize</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-zoom-in">zoom-in</button>
      <button  class="btn border-success text-light fnc-cursor-zoom-out">zoom-out</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light fnc-cursor-help">help</button>
      <button  class="btn border-success text-light fnc-cursor-not-allowed">not-allowed</button>
    </div>

    <ntfc ref='ntfc' />

    <hljs lang='css'>
    /** css classes */
    .fnc-cursor-none
    .fnc-cursor-auto
    .fnc-cursor-default
     ================
    .fnc-cursor-text
    .fnc-cursor-pointer
     ================
    .fnc-cursor-wait
    .fnc-cursor-progress
     ================
    .fnc-cursor-move
    .fnc-cursor-copy
    .fnc-cursor-col-resize
     ================
    .fnc-cursor-zoom-in
    .fnc-cursor-zoom-out
     ================
    .fnc-cursor-help
    .fnc-cursor-not-allowed
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
      title: 'fnc-cursor' + this.$config.base.APP_TITLE
    }
  }
}
</script>