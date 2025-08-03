// Arka plan renkleri ve gezegen adları
const planetColors = {
    "Güneş": "#FFD700",    // Altın sarısı
    "Ay": "#C0C0C0",       // Gümüş grisi
    "Merkür": "#4B4B4B",   // Koyu gri
    "Jüpiter": "#D2691E",// Toprak kahverengisi
    "Satürn":"#847962"  //Satürn'ün daha derin, bulutlu kahverengi ve gri tonları
};


const body = document.getElementById("body");
const colorButton = document.getElementById("ColorButton");


colorButton.addEventListener("click", () => {
    // Sayfanın başlığından gezegen adını alıyoruz (örnek: "Güneş Hakkında Bilgiler")
    const planetName = document.querySelector("h2").innerText.split(" ")[0];
    
    // Renk tablosundan gezegenin arka plan rengini seçiyoruz
    const newColor = planetColors[planetName] ; // 
    
    // Arka plan rengini değiştiriyoruz
    body.style.backgroundColor = newColor;
    
    // Butonun kendisini de etkileyici hale getiriyoruz
    colorButton.style.backgroundColor = newColor;
    colorButton.style.color = "#fff";
});
