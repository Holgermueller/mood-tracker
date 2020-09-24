import { writable } from "svelte/store";

const MoodStore = writable([
  {
    date: "xxx",
    mood: "Bored",
    moodId: "bored",
    timesFelt: 0,
  },
  {
    date: "yyy",
    mood: "Happy",
    moodId: "happy",
    timesFelt: 1,
  },
  {
    date: "xxx",
    mood: "Sad",
    moodId: "Sad",
    timesFelt: 2,
  },
  {
    date: "xxx",
    mood: "Tired",
    moodId: "tired",
    timesFelt: 3,
  },
  {
    date: "xxx",
    mood: "Crazed",
    moodId: "crazed",
    timesFelt: 4,
  },
  {
    date: "xxx",
    mood: "Angry",
    moodId: "angry",
    timesFelt: 10,
  },
]);

export default MoodStore;
