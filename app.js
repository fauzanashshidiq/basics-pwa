if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((err) => {
        console.error("Service Worker registration failed:", err);
      });
  });
}

document.getElementById("notifyBtn").addEventListener("click", async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification("Halo Fauzan!", {
        body: "Ini notifikasi dari PWA",
        icon: "/images/learn.png",
        vibrate: [200, 100, 200],
      });
    });
  } else {
    alert("Notifikasi tidak diizinkan oleh user.");
  }
});
