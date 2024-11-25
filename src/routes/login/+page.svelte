<script>
    export let data;
    import pb from '$lib/pocketbase';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let error = '';
    
    async function login(){
        try { 
            await pb.collection('users').authWithPassword(email, password); 
            goto('/dashboard'); 
        }  catch (err) { 
            error = 'Email atau password salah';
        }

    }
</script>

<svelte:head>
    <title>{data.props.title}</title>
</svelte:head>

<div class="items-center justify-center w-full bg-gray-50 rounded-lg shadow md:mt-0 lg:max-w-md xl:p-0 dark:bg-gray-800">
    <div class="w-full p-6 space-y-8 p-4 lg:p-8">
        <form class="space-y-6" on:submit|preventDefault={login}>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" bind:value={email} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" bind:value={password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
            </div>
            {#if error} 
            <p>{error}</p> 
            {/if}
            <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Masuk ke akun</button>
        </form>
    </div>
</div>