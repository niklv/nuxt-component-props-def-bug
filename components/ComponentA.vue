<script lang="ts" setup>
const {propA} = defineProps<{
    propA: string
}>()
</script>

<template>
    <div v-text="propA" />
</template>
