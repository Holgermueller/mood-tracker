import { writable } from "svelte/store";

const MoodStore = writable([
  {
    date: "xxx",
    id: "x",
    mood: "7",
    moodId: "7",
  },
]);

export default MoodStore;
