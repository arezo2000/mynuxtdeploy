<template>
  <NuxtLink
    class="underline font-medium"
    :href="firstLesson.path"
  >
    Go to first lesson
  </NuxtLink>
</template>

<script setup>
const firstLesson = useFirstLesson();
// supabase ps ghJbujkpZL3W8K8l
// 55354700070987ce632df06d5ae25cfe2322e749
</script>
