import { writable } from "svelte/store";

const UserStore = writable({ user: null });

export default UserStore;
