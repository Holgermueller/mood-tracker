import { writable } from "svelte/store";

const MoodStore = writable([
  {
    date: "xxx",
    mood: "Bored",
    id: "bored",
    timesFelt: 0,
    color: "green",
  },
  {
    date: "yyy",
    mood: "Happy",
    id: "happy",
    timesFelt: 1,
    color: "#ffd700",
  },
  {
    date: "xxx",
    mood: "Sad",
    id: "sad",
    timesFelt: 2,
    color: "blue",
  },
  {
    date: "xxx",
    mood: "Tired",
    id: "tired",
    timesFelt: 3,
    color: "#9932cc",
  },
  {
    date: "xxx",
    mood: "Crazed",
    id: "crazed",
    timesFelt: 4,
    color: "#ffa500",
  },
  {
    date: "xxx",
    mood: "Angry",
    id: "angry",
    timesFelt: 10,
    color: "red",
  },
]);

export default MoodStore;
