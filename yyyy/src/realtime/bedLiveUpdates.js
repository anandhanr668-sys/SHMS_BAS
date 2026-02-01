import { socket } from "./socketClient";

const beds = [
  "ICU-01",
  "ICU-02",
  "G-12",
  "G-14",
  "S-08",
];

const statuses = ["Available", "Occupied", "Cleaning", "Maintenance"];

let bedUpdateInterval = null;
let lastUpdate = null;

export const startBedLiveUpdates = (callback) => {
  socket.connect();

  socket.on("bed_update", (data) => {
    lastUpdate = data;
    if (callback) callback(data);
  });

  bedUpdateInterval = setInterval(() => {
    const bed = beds[Math.floor(Math.random() * beds.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    const update = {
      bedId: bed,
      bed,
      status,
      patientId: status === "Occupied" ? `P-${Math.floor(Math.random() * 100)}` : null,
      patientName: status === "Occupied" ? `Patient ${Math.floor(Math.random() * 100)}` : null,
      timestamp: Date.now(),
      changeType: lastUpdate && lastUpdate.status !== status ? "status_changed" : "update",
    };

    lastUpdate = update;
    socket.emit("bed_update", update);
  }, 3000);
};

export const stopBedLiveUpdates = () => {
  if (bedUpdateInterval) {
    clearInterval(bedUpdateInterval);
    bedUpdateInterval = null;
  }
  socket.disconnect();
};

export const getLastBedUpdate = () => lastUpdate;
