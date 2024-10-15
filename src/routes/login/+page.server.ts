import { NAME } from "$env/static/private";

export async function load() {
    console.log("load login");
    return {
        props: {
            site_name: NAME,
            title: "Login",
            description: "Login to your account",
        },
    };
}
