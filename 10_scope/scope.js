//var ile tanımlama yaptığımızda aynı adda birden fazla değişken oluşturabiliriz buda karışıklığa sebep olabilir. Bu yüzden ecma5 ile beraber let kullanıyoruz. let ile aynı adda değişken tanımlamaya çalıştığımızda hata verir, değişken adını mevcut diye.

var sayi = 10;
var sehir = "Ankara";

sayi = 11;
sehir = "İstanbul";

var sehir = "Adana"


let il = "Ankara";
il = "Bursa";
// let il = "izmir";


function mesajVer() {
    var isim = "Muslum";
    console.log(sehir);
    console.log(isim)
}


// console.log(sayi);
// console.log(sehir);
// console.log(il);

//mesajVer();

//console.log(isim); buradan func içi değişkene erişemeyiz func içi çağırabiliriz.


for (let i = 1; i < 10; i++) {

}

console.log(i);
