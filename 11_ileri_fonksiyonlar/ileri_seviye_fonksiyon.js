//İki farklı fonksiyon yazım tekniği. Alttakini tercih et.

// function selam() {
//     console.log("Merhaba")
// }
// selam();


var selamFonksiyonu = function selam() {
    console.log("Merhaba")
}
selamFonksiyonu();

//######################################################################################33

//() => selamFonksiyonu2 isimli bir değişken tanımlıyorum bu bir fonksiyondur demek.

// üsttekinin bir başka yazım tekniği.
const selamFonksiyonu2 = () => console.log("Merhaba 2");

selamFonksiyonu2();


// üsttekinin bir başka yazım tekniği.
//{} kullanma sebebimiz uzun fonksiyonlarda kullanmak.

const selamFonksiyonu3 = () => {
    console.log("Merhaba 3");
    console.log("Birşey");
}
selamFonksiyonu3();



//parametreli fonk yazımı.
const selamFonksiyonu4 = (mesaj) => {
    console.log(mesaj);
}

selamFonksiyonu4("Merhaba Dünya");


//2 parametreli fonk yazımı.
const selamFonksiyonu5 = (mesaj, mesaj2) => {
    console.log(mesaj);
}

selamFonksiyonu4("Merhaba Dünya");


// değer döndürmeli fonksiyon.

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}

let toplam = topla(3, 4);
console.log(toplam);


