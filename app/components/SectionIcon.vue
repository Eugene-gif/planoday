<script setup lang="ts">
	const paths = {
		today:
			'M7 3v4m10-4v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 8h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01',
		inbox: 'M3 13l4-8h10l4 8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Zm0 0h5l2 3h4l2-3h5',
		calendar:
			'M7 3v4m10-4v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
		habits: 'M9 3h6m-3 11 3-3m4 3a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
		notes:
			'M13 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5M3 8h4m-4 4h4m-4 4h4m4-4 1-3 6-6 2 2-6 6-3 1Z',
	};

	defineProps<{ name: keyof typeof paths }>();
</script>

<template>
	<svg
		class="size-4 shrink-0 md:size-[1.125rem]"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		aria-hidden="true"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="1.7"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path :d="paths[name]" />
	</svg>
</template>
