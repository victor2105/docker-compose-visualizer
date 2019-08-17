<script>
import { onMount } from 'svelte';
import flowchart from 'flowchart';
import {options} from './graph';

import Canvas from './Canvas.svelte';

import { selected, opens } from '../stores/models.js';

const close = (list, i, isSelected) => {
  if(isSelected){
    if(i > 0) {
      selected.update(list[i-1]);
    }else{
      selected.update(list[list.length]);
    }
  }
  opens.remove(i);
}

</script>

<style>
  .layout {
    color: white;
		word-wrap: break-word;
    overflow: auto;
  }
  .layout {
    display: grid;
    grid-template-areas:
    "abas space actions"
    "canvas canvas canvas";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr auto;
  }
  .space {
    grid-area: space;
    background: rgb(65, 62, 62);
  }
  .abas {
    grid-area: abas;
    justify-self: left;
  }
  .aba {
    padding: 1em;
    min-width: 60px;
    display: inline-block;
  }
  .aba.active {
  }
  .aba.back{
    background: rgb(65, 62, 62);
  }

  .canvas {
    grid-area: canvas;
    overflow: auto;
  }
</style>

<div class="layout">
  <div class="abas">
    {#each $opens as m, i}
      <div on:click={() => {selected.update(m)}} class="aba {$selected === m ? 'active' : 'back'}">
        Modelo <span on:click={() => close($opens, i, $selected === m )}>x</span>
      </div>
    {/each}
  </div>
  <div class="space"></div>
  {#each $opens as m}
    {#if $selected === m}
      <Canvas model={m} />
    {/if}
  {/each}
</div>