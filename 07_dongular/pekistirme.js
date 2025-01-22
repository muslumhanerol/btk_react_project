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


function kullaniciVarmi(email, sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar.sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (kullaniciVarmi(email, sifre)) {
        console.log(tivitler)
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı.")
    }
}

giris(email.sifre)

