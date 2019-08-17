<script>
  import { fade } from "svelte/transition";
  import { models, selected, opens } from './stores/models.js'

  import EditorLayout from "./components/EditorLayout.svelte";
  import TextEditor from "./components/TextEditor.svelte";
 
  function select(model) {
    selected.update(model);
    opens.add(model);
  }
</script>

<style>
  .layout {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-areas:
      "header header header"
      "top-bar top-bar top-bar"
      "menu canvas text"
      "footer footer footer";
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 20% 50% 30%;
    overflow: hidden;
    /* grid-column-gap: 0.5em; */
  }

  .layout {
    background: rgb(70, 68, 67);
    color: white;
  }

  header {
    grid-area: header;
		padding: 1em 1em;
		background: #ccc;
		color: black;
  }

  .top-bar {
    grid-area: top-bar;
	}
	
	.menu-button {
		border-radius: 0;
		padding: 0.1em 0.5em;
		margin: 0;
	}

  footer {
    grid-area: footer;
		background: blue;
		color: white;
  }

  menu {
    grid-area: menu;
    display: grid;
    grid-template-rows: 40px;
    padding: 0;
    margin: 0;
    background: rgb(65, 62, 62);
  }

  section.canvas {
    grid-area: canvas;
    display: grid;
		background: rgb(34, 34, 34);
    overflow : auto;
  }

  section.editor {
    background: rgb(7, 7, 7);
    border: none;
    grid-area: text;
    color: white;
    display: grid;
  }
  
</style>

<div class="layout">
  <header style="text-align: center;">Docker Visual Editor</header>
  
  <section class="canvas">

  <EditorLayout />

  </section>
  <menu>
    <ul>
      {#each $models as model, i}
        <li transition:fade>
          <p
            style="cursor: pointer"
            on:click={() => {
              select(model);
            }}>
            {i + 1}º Modelo
          </p>
        </li>
      {/each}
    </ul>
  </menu>
  <section class="editor">
    <TextEditor />
  </section>

  <footer>
    Victor Henrique dos Santos
  </footer>
</div>
