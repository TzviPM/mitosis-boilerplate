<template>
  <div class="text-red-900">Hello {{ name ?? "World" }}!</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export type Props = {
  name?: string;
};

export default defineComponent({
  name: "hello",

  props: ["name"],
});
</script>