// Sürdürülebilir yazılımlar geliştirmek için. Class lar Pascal Case yazılır yani ilk harf büyük.

// this.ad Personel içerisine ad diye birşey ekliyor.

class Personel {

    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet() {
        console.log(`Personel kaydedildi : ${this.ad}`);
    }
}

const personel = new Personel("Muslum", "Erol") //Bietane class örneği oluşturdum.

personel.kaydet();

personel.ad = "Muslum"
console.log(personel.ad);



