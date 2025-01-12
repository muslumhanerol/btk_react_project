var kullanicilar = [
    { email: "mslmhanerol@gmail.com", sifre: "12345" },
    { email: "hanerol@gmail.com", sifre: "12345" }
]

var tivitler = [
    { email: "mslmhanerol@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "mslmhanerol@gmail.com", tivit: "Bugün hava çok güzel 2" },
    { email: "hanerol@gmail.com", tivit: "Bugün hava çok güzel sıcak" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || email == kullanicilar[1].email && sifre == kullanicilar[1].sifre) {
        console.log(tivitler)
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı.")
    }
}

giris(email.sifre)