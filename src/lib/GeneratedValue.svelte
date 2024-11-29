<script lang="ts">
  type GeneratedValueProps = {
    title: string;
    generator: () => string;
  };

  let { title, generator }: GeneratedValueProps = $props();
  let content = $state("");

  $effect(() => {
    if (content) {
      navigator.clipboard.writeText(content);
    }
  });
</script>

<button
  class="cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
  onclick={() => (content = generator())}
>
  {content || title}
</button>
