<template>
    <label class="swap swap-flip mr-3"> 
        <input type="checkbox" @input="toggle" />
        <div class="swap-on">
            <svg width="32" height="32" viewBox="0 0 32 32" class="inline-block w-12 h-12"><g fill="none"><path fill="#FF822D" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.936 2.936 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.936 2.936 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.936 2.936 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.936 2.936 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.936 2.936 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.936 2.936 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.936 2.936 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.936 2.936 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.936 2.936 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.936 2.936 0 0 0 3.249-1.055Z"/><path fill="#FCD53F" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83c-5.005-2.89-6.72-9.29-3.83-14.294c2.89-5.005 9.29-6.72 14.294-3.83c5.005 2.89 6.72 9.29 3.83 14.294Z"/></g></svg>
        </div>
        <div class="swap-off">
            <svg width="32" height="32" viewBox="0 0 32 32" class="inline-block w-12 h-12"><g fill="none"><path fill="#FCD53F" d="M23.41 5.632c.5 2.04.56 4.26.02 6.56c-1.26 5.33-5.64 9.51-11.02 10.48c-2.91.53-5.68.13-8.09-.92c-.56-.25-1.09.39-.8.93c2.65 4.88 8.11 8 14.22 7.19c6.23-.83 11.22-5.91 11.97-12.15c.6-5.18-1.6-9.86-5.28-12.75c-.47-.36-1.16.08-1.02.66Z"/><path fill="#F9C23C" d="M27.87 12.562a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0Zm-12.92 12.88a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0Zm11.85-6.47a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98Zm-2 3.01a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg>
        </div>
    </label>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

onMounted(() => {
    const mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (mode) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.add('light')
    }
})

const toggle = () => {
    const doc = document.documentElement
    const body = document.body
    const theme = doc.getAttribute('data-theme')
    console.log(theme)

    if (theme === 'light') {
        doc.setAttribute('data-theme', 'dark')
        body.classList.remove('light')
        body.classList.add('dark')
    } else {
        doc.setAttribute('data-theme', 'light')
        body.classList.remove('dark')
        body.classList.add('light')
    }
}
</script>