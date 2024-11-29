<script lang="ts">
  import GeneratedValue from "./lib/GeneratedValue.svelte";
  import { dniGenerator } from "./lib/generators";

  let dniGenerated = $state("Generar DNI");
</script>

<main>
  <header>
    <h1 class="text-9xl text-center">Generadores</h1>
  </header>

  <div class="card">
    <GeneratedValue
      content={dniGenerated}
      on:click={() => (dniGenerated = dniGenerator())}
    />
  </div>
</main>
