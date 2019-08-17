<script>
	import { createEventDispatcher } from 'svelte';
  import { models, selected, opens } from '../stores/models.js';

	const dispatch = createEventDispatcher();

  let text = '';


	function addModel() {
    models.add(text);
    opens.add(text);
    selected.update(text);
	}
</script>

<style>
  .layout {
    color: white;
    word-wrap: break-word;
    overflow: hidden;
  }
  .layout {
    display: grid;
    grid-template-areas:
      "abas space actions"
      "canvas canvas canvas";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr auto;
  }
  .actions {
    grid-area: actions;
  }
  .btn {
    border: none; margin: 0; padding: 1em;
  }
  .primary {
    background: blue;
    color: white;
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
  }
  .canvas {
    grid-area: canvas;
    background: 0%;
    color: white;
    border: 1px blue solid;
    margin: 0;
  }
</style>

<div class="layout">
  <div class="abas">
    <div class="aba">Yarm</div>
  </div>
  <div class="actions">
    {#if text != ''}
      <button type="button" style="cursor: pointer;" on:click={addModel} class="btn primary" >Carregar</button>
    {/if}
  </div>
  <div class="space" />
  <textarea bind:value={text} placeholder="Cole o text do docker-compose aqui, se quiser." class="canvas" />
</div>
