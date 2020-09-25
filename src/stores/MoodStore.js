import { writable } from "svelte/store";

const MoodStore = writable([
  {
    date: "xxx",
    mood: "Bored",
    id: "bored",
    timesFelt: 0,
  },
  {
    date: "yyy",
    mood: "Happy",
    id: "happy",
    timesFelt: 1,
  },
  {
    date: "xxx",
    mood: "Sad",
    id: "sad",
    timesFelt: 2,
  },
  {
    date: "xxx",
    mood: "Tired",
    id: "tired",
    timesFelt: 3,
  },
  {
    date: "xxx",
    mood: "Crazed",
    id: "crazed",
    timesFelt: 4,
  },
  {
    date: "xxx",
    mood: "Angry",
    id: "angry",
    timesFelt: 10,
  },
]);

export default MoodStore;
