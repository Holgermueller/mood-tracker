import { writable } from "svelte/store";

const MoodStore = writable([
  {
    date: "xxx",
    id: "x",
    mood: "7",
    moodId: "7",
  },
  {
    date: "yyy",
    id: "y",
    mood: "1",
    moodId: "1",
  },
]);

export default MoodStore;
