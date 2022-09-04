<template>
    <div class="prose">
        <p class="font-serif italic mb-6">{{ quote }}</p>
        <p class="text-sm">—— {{ author }}</p>
    </div>
</template>

<script setup lang="ts">
const res = await fetch(`https://api.goprogram.ai/inspiration?refresh=${new Date().getTime()}`)
const data = await res.json()

const quote = data?.quote ?? "Today is a good day to smile!"
const author = data?.author ?? "Ourself"
</script>