<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes['class']
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-slot="sidebar-menu-skeleton"
    data-sidebar="menu-skeleton"
    :class="cn('tw-:flex tw-:h-8 tw-:items-center tw-:gap-2 tw-:rounded-md tw-:px-2', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="tw-:size-4 tw-:rounded-md"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="tw-:h-4 tw-:max-w-(--skeleton-width) tw-:flex-1"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
