<template>
  <div>


  <pre style='background: #000;margin: 0px;' :style='box_style' ><code :class="'language-'+lang"><slot /></code></pre>


  </div>
</template>




<script>
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

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
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('bash', bash);
    hljs.highlightAll();
  }
}
</script>
