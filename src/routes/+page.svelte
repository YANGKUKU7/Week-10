<h1>Welcome to SvelteKit zzzz</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script>
    export let data
</script>
{#if data.success}
<ul>
    {#each data.myData as item}
    <li>{item.name}</li>
    {/each}
</ul>
{:else}
<p>There was a problem getting the data...</p>
{/else}
