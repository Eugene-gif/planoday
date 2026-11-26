<script setup lang="ts">
	const primarySections = [
		{ label: 'Сегодня', to: '/today', icon: 'today' },
		{ label: 'Входящие', to: '/inbox', icon: 'inbox' },
		{ label: 'Календарь', to: '/calendar', icon: 'calendar' },
		{ label: 'Привычки', to: '/habits', icon: 'habits' },
		{ label: 'Заметки', to: '/notes', icon: 'notes' },
	] as const;

	const additionalSections = [
		{ label: 'Архив', to: { name: 'archive' }, exact: true },
		{ label: 'Корзина', to: { name: 'trash' }, exact: true },
	];

	const route = useRoute();
	const isAdditionalSection = computed(() =>
		additionalSections.some(({ to }) => to.name === route.name),
	);
</script>

<template>
	<div class="min-h-dvh md:flex">
		<nav
			aria-label="Разделы Planoday"
			class="fixed inset-x-0 bottom-0 z-10 border-t border-default bg-default px-1 pt-1 pb-[calc(0.25rem+env(safe-area-inset-bottom))] md:sticky md:top-0 md:flex md:h-dvh md:w-52 md:shrink-0 md:flex-col md:overflow-y-auto md:border-t-0 md:border-r md:bg-muted md:px-3.5 md:pt-6 md:pb-5"
		>
			<p class="mb-6 hidden px-3 text-2xl font-semibold text-highlighted md:block">Planoday</p>

			<ul class="grid grid-cols-5 md:grid-cols-1 md:gap-1">
				<li v-for="section in primarySections" :key="section.to">
					<NuxtLink
						:to="section.to"
						class="section-link flex min-h-11 flex-col items-center justify-center gap-1 text-center text-[0.6875rem] md:flex-row md:justify-start md:gap-3 md:px-3 md:text-base"
					>
						<SectionIcon :name="section.icon" />
						{{ section.label }}
					</NuxtLink>
				</li>
			</ul>

			<ul class="mt-auto hidden grid-cols-1 gap-1 border-t border-default pt-3 md:grid">
				<li v-for="section in additionalSections" :key="section.to.name">
					<NuxtLink :to="section.to" class="section-link flex min-h-11 items-center px-3">
						{{ section.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<div class="relative min-w-0 flex-1">
			<div class="absolute top-2 right-2 z-10 md:hidden">
				<UDropdownMenu
					:items="additionalSections"
					:content="{ align: 'end', sideOffset: 4 }"
					:ui="{
						item: 'aria-[current=page]:font-semibold aria-[current=page]:text-primary aria-[current=page]:before:bg-primary/10 data-highlighted:ring-2 data-highlighted:ring-primary data-highlighted:ring-inset',
					}"
					:portal="false"
				>
					<UButton
						aria-label="Дополнительные разделы"
						:color="isAdditionalSection ? 'primary' : 'neutral'"
						:variant="isAdditionalSection ? 'soft' : 'ghost'"
						class="size-11 justify-center focus-visible:outline-2 focus-visible:outline-primary"
					>
						<svg
							class="size-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
							fill="currentColor"
						>
							<circle cx="5" cy="12" r="1.5" />
							<circle cx="12" cy="12" r="1.5" />
							<circle cx="19" cy="12" r="1.5" />
						</svg>
					</UButton>
				</UDropdownMenu>
			</div>

			<main
				class="mx-auto max-w-7xl px-3 pt-3 pb-[calc(4rem+env(safe-area-inset-bottom))] md:px-[clamp(1.5rem,4vw,3.5rem)] md:py-8"
			>
				<slot />
			</main>
		</div>
	</div>
</template>

<style scoped>
	.section-link {
		border-radius: var(--ui-radius);
		color: var(--ui-text-muted);
	}

	.section-link:hover {
		background-color: var(--ui-bg-elevated);
	}

	.section-link[aria-current='page'] {
		background-color: color-mix(in srgb, var(--ui-primary) 10%, transparent);
		color: var(--ui-primary);
		font-weight: 600;
	}

	.section-link:focus-visible {
		outline: 2px solid var(--ui-primary);
		outline-offset: -2px;
	}
</style>
