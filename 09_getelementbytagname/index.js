//id üzerinden erişim.

// var intro1 = document.getElementById("intro1")
// var mesaj = document.getElementById("mesaj")

// mesaj.innerHTML = intro1.innerHTML; //intro1 idli içeriği mesaj idli içeriğe yazdırdık.

//-----------------------------------------------------------------------------------------------

//tagname üzerinden erişim.

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
// }

//-----------------------------------------------------------------------------------------------

//getElementsByClassName

// var classElemanlari = document.getElementsByClassName("intro1");

// alert(classElemanlari[1].innerHTML);

//-----------------------------------------------------------------------------------------------

//querySelector

var queryElemanlari = document.querySelectorAll("p.intro1") //p taginden intro1 clası olanları döndürür.

alert(queryElemanlari.length)

//-----------------------------------------------------------------------------------------------





