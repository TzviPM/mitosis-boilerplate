<script context="module" lang="ts">
  export type Props = {
    name?: string;
  };
</script>

<script lang="ts">
  export let name: Props["name"];
</script>

<div class="text-red-900">Hello {name ?? "World"}!</div>