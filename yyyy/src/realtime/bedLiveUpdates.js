import { socket } from "./socketClient";

const beds = [
  "ICU-01",
  "ICU-02",
  "G-12",
  "G-14",
  "S-08",
];

const statuses = ["Available", "Occupied", "Cleaning"];

export const startBedLiveUpdates = () => {
  setInterval(() => {
    const bed = beds[Math.floor(Math.random() * beds.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    socket.emit("bed:update", {
      bed,
      status,
      timestamp: new Date().toLocaleTimeString(),
    });
  }, 3000);
};

