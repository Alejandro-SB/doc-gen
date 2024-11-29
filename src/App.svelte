<script lang="ts">
  import GeneratedValue from "./lib/GeneratedValue.svelte";
  import { dniGenerator } from "./lib/generators";

  const generators = [
    {
      title: "Generar DNI",
      generator: dniGenerator,
    },
  ];
</script>

<main>
  <header class="my-10">
    <h1 class="text-9xl text-center">Generadores</h1>
  </header>
  <content class="flex justify-center mx-auto mt-10">
    {#each generators as generator}
      <GeneratedValue title={generator.title} generator={generator.generator} />
    {/each}
  </content>
</main>
