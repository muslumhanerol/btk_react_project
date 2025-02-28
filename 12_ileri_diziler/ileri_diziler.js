//Dizideki sayıları sıralama.
// const dizi = [1, 2, 3, 4]

// dizi.forEach(sayi => {
//     console.log(sayi)
// })

// const diziler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// diziler.forEach(siralaDizi => {
//     console.log(siralaDizi)
// })

//#################################################################################

//Dizideki sayıların karasini bulma.

// const dizi = [1, 2, 3, 4]

// const kareDizisi = []

// dizi.forEach(sayi => {
//     kareDizisi.push(sayi * sayi);

// })

// console.log(kareDizisi);

//#################################################################################

//map fonksiyonu. Tek bir satırda yazılmalı aksi halde undefined hatası alırsın.


// const dizi = [1, 2, 3, 4]

// const mapDizi = dizi.map(sayi => sayi * 3)

// console.log(mapDizi);


// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mapSirala = dizi.map(sayi => sayi)
// console.log(mapSirala);

//#################################################################################

// filter fonksiyonu.

// const dizi = [1, 2, 3, 4]

// const filterDizi = dizi.filter(sayi => sayi > 2) //sadece 2 den büyük olanları yazdırır.
// console.log(filterDizi);


// const mapDizi = dizi.map(sayi => sayi > 2) // 2 den büyük olanlar true küçük olanlar false olarak gösterilir.
// console.log(mapDizi);

//#################################################################################

// reduce fonksiyonu. sum denilen kümülatif toplama işlemi gerçekleşir.
const dizi = [1, 2, 3, 4]

const toplam = dizi.reduce((acc, sayi) => { //acc varsayılan değeri 0 dır toplama sıfırdan bailar.
    return acc + sayi;
})

const toplam2 = dizi.reduce((acc, sayi) => { //acc başlanğıç değerini 10 dan başlattık.
    return acc + sayi;
}, 10)

console.log(toplam2);


