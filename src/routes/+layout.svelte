<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { DarkMode } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-700 bg-gray-100 dark:bg-gray-950 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-3xl p-3 fixed right-7 bottom-7 z-50';
	let hoverAnimation =
		'transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110';
	$: activeUrl = $page.url.pathname;
	let year = new Date().getFullYear();
</script>

<div>
	<slot></slot>
</div>

<DarkMode btnClass={darkmodebtn} size="lg" />

