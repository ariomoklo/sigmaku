<template>
    <div class="animate__animated animate__fadeIn animate__delay-2s">
        <div class="w-96">
            <img :src="`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`" />
        </div>
    </div>
</template>

<script setup lang="ts">
function uuidv4(): string {
    return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, (c: any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}
    
let seed = uuidv4()
</script>