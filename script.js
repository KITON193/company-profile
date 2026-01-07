const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Selamat Pagi 👋";
else if (hour < 15) greeting.textContent = "Selamat Siang 👋";
else if (hour < 18) greeting.textContent = "Selamat Sore 👋";
else greeting.textContent = "Selamat Malam 👋";

function sendMessage(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim. Terima kasih!");
}
