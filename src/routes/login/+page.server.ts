import { NAME, PB_URI } from "$env/static/private";
import PocketBase from 'pocketbase';

const pb = new PocketBase(PB_URI);

export async function load() {
    return {
        props: {
            site_name: NAME ?? "Appote",
            title: "Masuk ke Appote",
        },
    };
}
