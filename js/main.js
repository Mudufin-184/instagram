
function suma() {
    // Explicación algoritmo
    alert("Algoritmo que realiza una suma entre dos valores");

    // Declaración de variables
    let a = 0;
    let b = 0;
    let s = 0;

    // Capturamos los datos
     a = parseInt(prompt("Ingrese un número: "));
     b = parseInt(prompt("Ingrese otro número: "));

    //  Realizamos la operación
     s = a+b;

    //  Muestra el resultado de la suma 
    alert("El resultado de la suma es: "+s);
}

function opBasicas() {
    alert("Suma, resta, mult y división de 2 números ingresados");

    let a = 0;
    let b = 0;
    let s = 0;
    let r = 0;
    let m = 0;
    let d = 0;

    a = parseInt(prompt("Ingrese un número: "));
    b = parseInt(prompt("Ingrese otro número: "));

    s = a+b;
    alert("El resultado de la suma es: "+s);

    r = a - b;
    alert("El resultado de la resta es: "+r);

    m = a * b;
    alert("El resultado de la multiplicación es: "+m);

    d = a / b;
    alert("El resultado de la división es: "+d);
}

function cuadradoNumero(){
    //Explicacion de algoritmo
    alert("Algoritmo que calcula el cuadrado de un numero ingresado");
    //Declaracion de variables
    let n,c= 0;
    //captura de datos 
    n = parseInt(prompt("Ingrese un número: "));
    //Realizamos la operacion 
    c = n * n ;
    //Mostramos el resultado
    alert("El resultado de al cuadrado es: " + c);

}

function areaTriangulo (){
    //Explicacion de codigo
    alert("Algoritmo que calcula el area de un triangulo al ingresar su base y la altura ");
    //Declaracion de variables
    let  b,h = 0;
    //Captura de datos
    b = parseInt(prompt("Ingrese la base del triangulo: "));
    h = parseInt(prompt("Ingrese la altura del triangulo:  "));
    //Realizamos la operacion
    c = (b*h)/2;
    //Mostramos resultado
    alert("El resultado de area del triangulo : " + c);
}
//conversion de unidades  es un algoritmo que determine las pulgadas los kilometros y los milimetros de un valor dado en metros
function conversionUnidades() {
    // Explicación del código
    alert("Algoritmo que realiza conversión de unidades de metros a pulgadas, kilómetros y milímetros");

    // Declaración de variables
    let metros, pulgadas, kilometros, milimetros;

    // Captura de datos
    metros = parseInt(prompt("Ingrese la cantidad en metros: "));

    // Realizamos las operaciones de conversión
    pulgadas = metros * 39.3701; // 1 metro = 39.3701 pulgadas
    kilometros = metros * 0.001; // 1 metro = 0.001 kilómetros
    milimetros = metros * 1000; // 1 metro = 1000 milímetros

    // Mostramos el resultado
    alert(metros + " metros son aproximadamente:\n" +
          pulgadas + " pulgadas\n" +
          kilometros + " kilómetros\n" +
          milimetros + " milímetros");
}
//mayor de dos numeros  derterminar el mayor de dos numeros ingresado por elusuario
function mayordeDosNumeros(){
    //Explicacion de codigo
    alert("Algoritmo que calcula el mayor de dos numeros ");
    //Declaracion de variables
    let  n1,n2 = 0;
    //Captura de datos 
    n1 = parseInt(prompt("Ingrese el primer numero: "));
    n2 = parseInt(prompt("Ingrese el segundo numero: "));
    //Realizamos la operacion  //Mostramos resultado
    if (n1 == n2){
        alert(" ambos valores son iguales, no sea nutria");
    }else if(n1 > n2){
        alert(n1  + " es mayor que: "+  n2);
    }else {
        alert(n2  + " es mayor que: "+  n1);
    }
}
// menor de tres numeros ingresados por el usuario. (n1==n2)and(n1==n3)
function mayordeTresNumeros(){
    //Explicacion de codigo
    alert("Algoritmo que calcula el mayor de dos numeros ");
    //Declaracion de variables
    let  n1,n2,n3 = 0;
    //Captura de datos 
    n1 = parseInt(prompt("Ingrese el primer numero: "));
    n2 = parseInt(prompt("Ingrese el segundo numero: "));
    n3 = parseInt(prompt("Ingrese el tercer numero: "));
    //Realizamos la operacion  //Mostramos resultado
    if ((n1 == n2) && (n1 == n3)){
        alert(" los valores son iguales, no sea Guacamayo ");
    }else if((n1 < n2) && (n1 < n3)){
        alert(n1  + " es menor que "+  n2 + " y "+ n3);
    }else if ((n1 < n2) && (n2 < n3)){
        alert(n2  + " es menor que "+  n1+ " y "+ n3);
    }else{
        alert(n3  + " es menor que "+ n1+ " y "+ n2);
    }
}
// algoritmo que determine si un esttudiante aprobo o reprobo la materia de algoritmia teniendo en cuenta que en total son 7 notas entra 1 y 10 y se aprueba con 6,1 o mas

function PromedioNotas(){
       //Explicacion de codigo
        alert(" Algoritmo que determine si un estudiante aprobo o reprobo la materia de algoritmia teniendo en cuenta que en total son 7 notas entra 1 y 10 y se aprueba con 6,1 o mas")
        //Declaracion de variables
        let n1,n2,n3,n4,n5,n6,n7=0
        //Captura de datos
        n1 = parseInt(prompt("Ingrese la primera nota: "));
        n2 = parseInt(prompt("Ingrese la segunda nota: "));
        n3 = parseInt(prompt("Ingrese la tercera nota: "));
        n4 = parseInt(prompt("Ingrese la cuarta nota: "));
        n5 = parseInt(prompt("Ingrese la quinta nota: "));
        n6 = parseInt(prompt("Ingrese la sexta nota: "));
        n7 = parseInt(prompt("Ingrese la septima nota: "));
        //Realizamos la operacion
        pro= (n1+n2+n3+n4+n5+n6+n7)/7;
        //Mostramos resultado
        if (pro>=6.1){
            alert(" El estudiante aprobo, vamos a por ello ");
        }else {
            alert(" El estudiante reprobo, haber haber que paso ");
        }
}

//Una fruteria vende manzanas a X precio por kilo realize un algoritmo que permita saber al vendedor cuanto debe pagra un cliente teniendo en cuenta que la fruteria tiene la siguiente tabla de ddescuentos por kilo.
// 0-2 no hay  3-5 10% 6-10 15% 11-mas 20% 
function calcularPago() {
    // Explicación del código
    alert("Este algoritmo calcula el monto que un cliente debe pagar por una cantidad de manzanas, considerando los descuentos por kilo.");
    // Declaración de variables
    let precioKilo, kilos, totalPagar;
    // Captura de datos
    precioKilo = parseFloat(prompt("Ingrese el precio por kilo de las manzanas: "));
    kilos = parseInt(prompt("Ingrese la cantidad de kilos de manzanas compradas: "));

    // Cálculo del total a pagar con descuentos
    if (kilos >= 0 && kilos <= 2) {
        totalPagar = precioKilo * kilos;
    } else if (kilos >= 3 && kilos <= 5) {
        totalPagar = precioKilo * kilos * 0.9; // Descuento del 10%
    } else if (kilos >= 6 && kilos <= 10) {
        totalPagar = precioKilo * kilos * 0.85; // Descuento del 15%
    } else {
        totalPagar = precioKilo * kilos * 0.8; // Descuento del 20%
    }

    // Mostrar el total a pagar
    alert("El cliente debe pagar $" + totalPagar.toFixed(2));
}

//Un obreo necesita calcular su salario semanal el cual se obtiene de la siguiente manera, si trabaja 40 horas o menos la empresa le paga a 12.500 la hora, si trabaja mas de 40 horas la empresa le paga 12.500 por las primeras 40 horas y 18mil por cada hora extra
function calcularSalarioSemanal() {
    // Explicación del código
    alert("Este algoritmo calcula el salario semanal de un obrero.");

    // Declaración de variables
    let horasTrabajadas, salarioSemanal;

    // Captura de datos
    horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas esta semana: "));

    // Cálculo del salario semanal
    if (horasTrabajadas <= 40) {
        salarioSemanal = horasTrabajadas * 12500; // $12,500 por hora
    } else {
        // Calcular las horas extras
        let horasExtras = horasTrabajadas - 40;
        salarioSemanal = (40 * 12500) + (horasExtras * 18000); // $12,500 por las primeras 40 horas, $18,000 por hora extra
    }
    // Mostrar el salario semanal
    alert("El salario semanal del obrero es $" + salarioSemanal.toFixed(2));
}

   //Explicacion de codigo
 
        //Declaracion de variables
   
        //Captura de datos
    
        //Realizamos la operacion
      
        //Mostramos resultado