var numbers = [1, 3, 5, 7, 9, 11]

numbers
    (6)[1, 3, 5, 7, 9, 11]
numbers[2]
5
numbers[5]
11

//######################################################################################################

var sehirler = ["ankara", "istanbul", "izmir"]
undefined
sehirler
    (3)['ankara', 'istanbul', 'izmir']
sehirler[2]
'izmir'

//######################################################################################################

var dizi = ["Ankara", 1, false]
undefined
dizi[0]
'Ankara'
dizi[2]
false

//######################################################################################################


var fonksiyonDizisi = [function selamVer() {
    console.log("Birinci fonksiyon çalıştı.")
}, function selamVer2() {
    console.log("İkinci fonksiyon çalıştı.")
}]
undefined
fonksiyonDizisi
    (2)[ƒ, ƒ]0: ƒ selamVer()1: ƒ selamVer2()length: 2[[Prototype]]: Array(0)
fonksiyonDizisi[1]
ƒ selamVer2(){
    console.log("İkinci fonksiyon çalıştı.")
}

fonksiyonDizisi[0]()
 Birinci fonksiyon çalıştı.