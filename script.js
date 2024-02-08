// Funkcja wywoływana po kliknięciu przycisku "TAK"
function showCatGif() {
  // Pobierz element <img> z dokumentu
  const gifImage = document.getElementById("gifImage");
  // Wyświetl element <img>
  gifImage.style.display = "block";
}

// Pobierz przycisk "TAK" z dokumentu
const yesButton = document.getElementById("yesButton");
// Dodaj nasłuchiwanie na kliknięcie przycisku "TAK"
yesButton.addEventListener("click", showCatGif);
