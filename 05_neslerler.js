var kisi = { //object notation
    ad: "müslüm",
    soyad: "erol",
    yas: 31,
    email: "mslmhanerol@gmail.com"

}

kisi.yas
31

kisi.ad
'müslüm'

kisi.soyad
'erol'

kisi
{ ad: 'müslüm', soyad: 'erol', yas: 31, email: 'mslmhanerol@gmail.com' }

//####################################################################################
// İçeriği değiştirme

kisi.ad = "han"
'han'
kisi.ad
'han'


//####################################################################################

//nesne içinde dizi tutma

var kisi = {
    ad: "müslüm",
    soyad: "erol",
    yas: 31,
    email: "mslmhanerol@gmail.com",
    arkadaslar: ["ahmet", "mehmet", "ali"]

}
undefined
kisi.arkadaslar
    (3)['ahmet', 'mehmet', 'ali']


//####################################################################################

//nesne içinde fonksiyon tutma

var kisi = {
    ad: "müslüm",
    soyad: "erol",
    yas: 31,
    email: "mslmhanerol@gmail.com",
    arkadaslar: ["ahmet", "mehmet", "ali"],
    selamVer: function () {
        console.log("Fonksiyon çalıştı.")
    }

}
undefined
kisi.selamVer()
 Fonksiyon çalıştı.