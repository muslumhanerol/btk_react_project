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


//########################################################################
//var ile tanımladık = dışarıdan çağırdık, sonuç olarak doğrudan 10 u verir.

// for (var i = 1; i < 10; i++) {

// }
// console.log(i);


//let ile tanımladık = dışarıdan çağrılmaz 1 den 9 a kadar yazar.

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }


//########################################################################

// const = sabit anlamına gelir. Değişmeyecek veriler için kullanılır.

const soyad = "Erol";

//soyad = "Han"; //soyadı değiştirmek istersek yapamayız çünkü üstte const olarak tanımladık.


const sehirler = ["Ankara", "İstanbul"]
sehirler.push("İzmir"); //Diziye yeni eleman eklemede sorun yaşamayız. Dizinin adresi aynı old sorun yok.


//sehirler = ["Bursa", "Mardin"] //Buna izin vermez. Yeni adresleme yapıldığından olmaz.




console.log(soyad);
console.log(sehirler);

