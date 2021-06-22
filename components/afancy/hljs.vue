<template>
  <div>


  <pre style='background: #000;margin: 0px;' :style='box_style' ><code :class="'language-'+lang"><slot /></code></pre>


  </div>
</template>




<script>
import hljs from 'highlight.js';
export default {
  props: {
    lang: {
      type:  String,
      default: ''
    },
    box_style: {
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  mounted(){
    hljs.highlightAll();
  }
}
</script>
