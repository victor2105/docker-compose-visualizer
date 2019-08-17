<script>
import { onMount } from 'svelte';
import flowchart from 'flowchart';
import {options} from './graph';

function init() {
  try{
    var diagram = flowchart.parse(model);
    diagram.drawSVG('diagram');
    diagram.drawSVG('diagram', options);
  }catch(err) {
    console.log(err);
    
    model = null;
  }
}

onMount(init);

export let model;

</script>

<style>
  .canvas {
    grid-area: canvas;
    overflow: auto;
  }
</style>

<div id="diagram" class="canvas">
</div>
