const data = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function userStatus(data) {
  const away = data
    .filter((entry) => entry.status === "online" && entry.lastActivity > 10)
    .map((entry) => entry.username);
  const online = data
    .filter((entry) => entry.status === "online" && entry.lastActivity <= 10)
    .map((entry) => entry.username);
  const offline = data
    .filter((entry) => entry.status === "offline")
    .map((entry) => entry.username);

  return away.length > 0 || online.length > 0 || offline.length > 0
    ? {
        online,
        away,
        offline,
      }
    : [];
}

console.log(userStatus(data));
