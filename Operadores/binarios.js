// in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicomoro");
0 in arvores;   //retorna true
3 in arvores;   //retorna true
6 in arvores;   // retorna false
"cedro" in arvores  //retorna false(você deve especificar o número do índice não o valor naque indice)
"lenght" in arvores  //retorna true(lenght é uma propriedade de Array)

//Objetor predefinidos
"PI" in Math;    //retorna true
var minhaString = new String("coral");
"lenght" in minhaString; // retorna true

//Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;      //retorna true
"modelo" in meucarro;    //retorna true

//instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if(dia instanceof Date) {
    // code here
}