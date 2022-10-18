const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const wyswietlacz = document.getElementById("img1");

function fun1(x) {
    console.log(x);

    switch(x){
        case 1: wyswietlacz.innerText = "wybrałeś obraz 1 cena 12zł"; break;
        case 2: wyswietlacz.innerText = "wybrałeś obraz 2 cena 15zł"; break;
        case 3: wyswietlacz.innerText = "wybrałeś obraz 3 cena za darmo"; break;

        default: wyswietlacz.innerText = " wybierz pamiątkę "; break;
    }
}