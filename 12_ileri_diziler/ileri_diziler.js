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


const dizi = [1, 2, 3, 4]

const mapDizi = dizi.map(sayi => sayi * 3)

console.log(mapDizi);

