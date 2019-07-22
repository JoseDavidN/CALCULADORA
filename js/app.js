var calculadora = {

    display: document.getElementById('display'),
    pantalla: "0",
    operacion: "",
    primerValor: 0,
    segundoValor: 0,
    ultimoValor: 0,
    resultado: 0,
    auxTeclaIgual: false,//para permitir ingreso consecutivo

    //Funcion de inicializacion
    init: (function(){
        this.asignaEventoBotones('.tecla');
        this.asignaFuncionBotones();
    }),

    //Asignacion de eventos de los botones
    asignaEventoBotones: function(selector){
        var x = document.querySelectorAll(selector);
        for(i=0; i < x.length; i++){
            x[i].onmouseover = this.eventoDisminuirBoton;
            x[i].onmouseout = this.eventoRestaurarBoton;
        }
    },

    eventoDisminuirBoton: function(event){
        calculadora.disminuirBoton(event.target)
    },

    eventoRestaurarBoton: function(event){
        calculadora.restauraBoton(event.target)
    },

    //Formato botones
    disminuirBoton: function(elemento){
        var x = elemento.id;
        if(x == "1" || x == "2" || x == "3" || x == "0" || x == "punto" || x == "igual"){
            elemento.style.width = "28%";
			elemento.style.height = "62px";
        }else if(x == "mas"){
            elemento.style.width = "88%";
            elemento.style.height = "98%";
        }else{
            elemento.style.width = "21%";
            elemento.style.height = "62px";
        }
    },

    restauraBoton: function(elemento){
        var x = elemento.id;
        if(x == "1" || x == "2" || x == "3" || x == "0" || x == "punto" || x == "igual"){
            elemento.style.width = "29%";
			elemento.style.height = "62.91px";
        }else if(x == "mas"){
            elemento.style.width = "90%";
            elemento.style.height = "100%";
        }else{
            elemento.style.width = "22%";
            elemento.style.height = "62.91px";
        }
    },

    //Eventos de funcion de la calculadora 

    asignaFuncionBotones: function(){
        document.getElementById('0').addEventListener("click", function(){calculadora.ingresoDato("0");});
        document.getElementById('1').addEventListener("click", function(){calculadora.ingresoDato("1");});
        document.getElementById('2').addEventListener("click", function(){calculadora.ingresoDato("2");});
        document.getElementById('3').addEventListener("click", function(){calculadora.ingresoDato("3");});
        document.getElementById('4').addEventListener("click", function(){calculadora.ingresoDato("4");});
        document.getElementById('5').addEventListener("click", function(){calculadora.ingresoDato("5");});
        document.getElementById('6').addEventListener("click", function(){calculadora.ingresoDato("6");});
        document.getElementById('7').addEventListener("click", function(){calculadora.ingresoDato("7");});
        document.getElementById('8').addEventListener("click", function(){calculadora.ingresoDato("8");});
        document.getElementById('9').addEventListener("click", function(){calculadora.ingresoDato("9");});
        document.getElementById('on').addEventListener("click", function(){calculadora.resetPantalla();});
        document.getElementById('sign').addEventListener("click", function(){calculadora.cambiarSigno();});
        document.getElementById('punto').addEventListener("click", function(){calculadora.ingresoDecimal();});
        document.getElementById('mas').addEventListener("click", function(){calculadora.ingresoOperacion("+");});
        document.getElementById('menos').addEventListener("click", function(){calculadora.ingresoOperacion("-");});
        document.getElementById('por').addEventListener("click", function(){calculadora.ingresoOperacion("*");});
        document.getElementById('dividido').addEventListener("click", function(){calculadora.ingresoOperacion("/");});
        document.getElementById('igual').addEventListener("click", function(){calculadora.verResultado();});
    },

    ingresoDato: function(valor){
        if(this.pantalla.length < 8){
            if(this.pantalla == "0"){
                this.pantalla = "";
                this.pantalla = this.pantalla + valor;
            }else{
                this.pantalla = this.pantalla + valor
            }
            this.updatePantalla()
        }
    },

    resetPantalla: function(){
        this.pantalla = "0";
        this.operacion = "";
        this.primerValor = 0;
        this.segundoValor = 0;
        this.ultimoValor = 0;
        this.resultado = 0;
        this.auxTeclaIgual = false;
        this.updatePantalla();
    },

    cambiarSigno: function(){
        if(this.pantalla != "0"){
            var aux;
            if(this.pantalla.charAt(0) == "-"){
                aux = this.pantalla.slice(1);
            }else{
                aux = "-" + this.pantalla;
            }
            this.pantalla = "";
            this.pantalla = aux;
            this.updatePantalla();
        }
    },

    ingresoDecimal: function(){
        if(this.pantalla.indexOf('.') == -1){
            if(this.pantalla == ""){
                this.pantalla = this.pantalla + "0.";
            }else{
                this.pantalla = this.pantalla + ".";
            }
            this.updatePantalla();
        }
    },

    ingresoOperacion: function(oper){
        this.primerValor = parseFloat(this.pantalla);
        this.pantalla = "";
        this.operacion = oper;
        this.auxTeclaIgual = false;
        this.updatePantalla();
    },

    verResultado: function(){//TECLA IGUAL

        if(!this.auxTeclaIgual){// Primera vez que se presiona igual
            this.segundoValor = parseFloat(this.pantalla);
            this.ultimoValor = this.segundoValor;

            //calculo el resultado
            this.realizarOperaciones(this.primerValor, this.segundoValor, this.operacion);
        }else{//seguidas veces que se preciona igual
            //calculo e resultado
            this.realizarOperaciones(this.primerValor, this.ultimoValor, this.operacion)
        }

        //Almaceno el resultado como primer valor para poder seguir operando
        this.primerValor = this.resultado;

        //Borro la pantalla y la remplazo por el resultado
        this.pantalla = "";

        //Verifico el largo del resultado para recortarlo si es nesesario
        if(this.resultado.toString().length < 9){
            this.pantalla = this.resultado.toString();
        }else{
            this.pantalla = this.resultado.toString().slice(0, 8) + "...";
        }

        //auxiliar para indicar si ya se preciono la tecla igual, para calcular sobre el ultimo valor
        this.auxTeclaIgual = true;
        this.updatePantalla();
    },

    realizarOperaciones: function(primerValor, segundoValor, operacion){
        switch(operacion){
            case "+":
                this.resultado = eval(primerValor + segundoValor);
            break;
            case "-":
                this.resultado = eval(primerValor - segundoValor);
            break;
            case "*":
                this.resultado = eval(primerValor * segundoValor);
            break;
            case "/":
                this.resultado = eval(primerValor / segundoValor);
            break;
        }
    },

    updatePantalla: function(){
        this.display.textContent = this.pantalla;
    },
};

calculadora.init();