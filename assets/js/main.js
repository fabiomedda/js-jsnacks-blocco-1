/* JSnack 4
************/
/* 
JSnack 1A
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var palla = {
    nome: "palla",
    peso: 10
};
console.log(palla);

/*
JSnack 1B
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/

/*
palla.peso = Number(prompt("Cambia peso alla palla"));
console.log(palla);
*/

/*
JSnack 2
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

var arrayBici = [
    {
        nome: "MontainBike",
        peso: 15
    },
    {
        nome: "BMX",
        peso: 12
    },
    {
        nome: "Graziella",
        peso: 17
    },
    {
        nome: "Tandem",
        peso: 24
    }
];

console.log(arrayBici);

var indexPesoMinore = 0;

for (var index = 1; index < arrayBici.length; index++) {
    
    if (arrayBici[indexPesoMinore].peso > arrayBici[index].peso) {
        indexPesoMinore = index;
    }

}

console.log(arrayBici[indexPesoMinore]);

/*
JSnack 3
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
*/

var triangoloRettangolo = {
    catetoBase: 12,
    catetoAltezza: 5
};

var catetoBase = triangoloRettangolo.catetoBase;
var catetoAltezza = triangoloRettangolo.catetoAltezza;
var ipotenusa = Math.sqrt(Math.pow(catetoBase,2) + Math.pow(catetoAltezza,2));
console.log(ipotenusa);
var perimetro = catetoBase + catetoAltezza + ipotenusa;
console.log(perimetro);
var area = (catetoBase * catetoAltezza)/2;
console.log(area);

triangoloRettangolo.ipotenusa = ipotenusa;
triangoloRettangolo.perimetro = perimetro;
triangoloRettangolo.area = area;
console.log(triangoloRettangolo);

/*
JSnack 4A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

var squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Benevento",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(squadre);

/*
JSnack 4B
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.ceil(Math.random() * 100);
    squadre[i].falliSubiti = Math.ceil(Math.random() * 100);
}


for (var key in squadre) {
    squadre[key].puntiFatti = Math.ceil(Math.random() * 100);
    squadre[key].falliSubiti = Math.ceil(Math.random() * 100);
}


squadre.forEach(function (item) {  
    item.puntiFatti = Math.ceil(Math.random() * 100);
    item.falliSubiti = Math.ceil(Math.random() * 100);
});


console.log(squadre);


/* JSnack 5
************/
/*
JSnack 1
Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

var zucchine = {
    zucchina1: {
        varietà: "nero di Milano",
        peso: 546,
        lunghezza: 213
    },
    zucchina2: {
        varietà: "romanesco",
        peso: 456,
        lunghezza: 152
    },
    zucchina3: {
        varietà: "lunga fiorentina",
        peso: 156,
        lunghezza: 951
    },
    zucchina4: {
        varietà: "siciliano",
        peso: 245,
        lunghezza: 447
    },
    zucchina5: {
        varietà: "striata di Napoli",
        peso: 657,
        lunghezza: 645
    },
    zucchina6: {
        varietà: "bianca triestina",
        peso: 198,
        lunghezza: 564
    },
    zucchina7: {
        varietà: "rigata pugliese",
        peso: 357,
        lunghezza: 415
    },
    zucchina8: {
        varietà: "tondo di Piacenza",
        peso: 957,
        lunghezza: 159
    },
    zucchina9: {
        varietà: "ortolano di Faenza",
        peso: 486,
        lunghezza: 657
    },
    zucchina10: {
        varietà: "tondo di Nizza",
        peso: 823,
        lunghezza: 214
    }
     
};

console.log(zucchine);

var pesoTot = 0;
for (var key in zucchine) {
    console.log(key, zucchine[key]);
    pesoTot += zucchine[key].peso;
}
console.log(pesoTot, 'grammi');


/*
JSnack 2
Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC)
*/

var stringa = "Ciao";
console.log(stringaReverse(stringa));

function stringaReverse(stringa) {  
    var stringaRov = "";
    for (var i = stringa.length - 1; i >= 0; i--) {
        stringaRov = stringaRov + stringa[i];
    }
    return stringaRov;
}

/*
JSnack 3
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine
*/

var arrayZucchine = [
    {
        varietà: "nero di Milano",
        peso: 546,
        lunghezza: 213
    },
    {
        varietà: "romanesco",
        peso: 456,
        lunghezza: 52
    },
    {
        varietà: "lunga fiorentina",
        peso: 156,
        lunghezza: 151
    },
    {
        varietà: "siciliano",
        peso: 245,
        lunghezza: 47
    },
    {
        varietà: "striata di Napoli",
        peso: 657,
        lunghezza: 145
    },
    {
        varietà: "bianca triestina",
        peso: 198,
        lunghezza: 364
    },
    {
        varietà: "rigata pugliese",
        peso: 357,
        lunghezza: 41
    },
    {
        varietà: "tondo di Piacenza",
        peso: 957,
        lunghezza: 159
    },
    {
        varietà: "ortolano di Faenza",
        peso: 486,
        lunghezza: 257
    },
    {
        varietà: "tondo di Nizza",
        peso: 823,
        lunghezza: 21
    }
];

var array15CmPlus = [];
var array15CmLess = [];

for (var key in arrayZucchine) {
    if (arrayZucchine[key].lunghezza >= 150) {
        array15CmPlus.push(arrayZucchine[key]);
    } else {
        array15CmLess.push(arrayZucchine[key]);
    }
}

console.log(array15CmPlus);
console.log(array15CmLess);

var pesoTotPlus = 0;
var pesoTotLess = 0;

for (var key in array15CmPlus) {
    pesoTotPlus += array15CmPlus[key].peso;
}

for (var key in array15CmLess) {
    pesoTotLess += array15CmLess[key].peso;
}

console.log(pesoTotPlus + " grammi");
console.log(pesoTotLess + " grammi");

/*
JSnack 4
Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

var array1 = ["a","b","c","d"];
var array2 = [1,2,3,4];


function meltArray(array1Param, array2Param) {

    if (array1Param.length === array2Param.length) {
        
        var array3 = [];

        for (var i = 0; i < array1Param.length; i++) {
            array3.push(array1[i]);
            array3.push(array2[i]);
        }

        return array3;

    }

}

var meltArray = meltArray(array1, array2);
console.log(meltArray);

/*
JSnack 5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b”
*/

var arraySet = [0,1,2,3,4,5,6,7,8,9];
var x = 1;
var y = 5;

function arrayRatio(array, number1, number2) {  
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i >= number1 && i <= number2) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
var array10 = arrayRatio(arraySet,x,y);
console.log(array10);