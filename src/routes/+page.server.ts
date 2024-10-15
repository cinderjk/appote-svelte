import { redirect } from '@sveltejs/kit';

export function load() {
    // Redirect pengguna dari '/' ke '/login'
    throw redirect(307, '/login');
}
