// pop = son elemanı listeden siler.

var sehirler = ["Ankara", "İstanbul", "İzmir", "Gaziantep",]
undefined
sehirler.pop()
'Gaziantep'

sehirler
    (3)['Ankara', 'İstanbul', 'İzmir']

//###################################################################################################

// shift = ilk elemanı listeden siler.


sehirler.shift()
'Ankara'

sehirler
    (2)['İstanbul', 'İzmir']


//#################################################################################################

// push = listenin sonuna eleman ekler.

sehirler.push("Bursa")
3

sehirler
    (3)['İstanbul', 'İzmir', 'Bursa']

//#################################################################################################

// concat = Başka bir dizi ile birleştirir.

sehirler.concat(["Van", "Muş"])
    (5)['İstanbul', 'İzmir', 'Bursa', 'Van', 'Muş']

//#################################################################################################

// sort = diziyi yazdırır.

sehirler.sort()
    (3)['Bursa', 'İstanbul', 'İzmir']


//#################################################################################################

// length = dizinin uzunluğunu gösterir.

sehirler.length
3