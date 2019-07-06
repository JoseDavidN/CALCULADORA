var calculadora = {

    botones: function(){
        var btn0 = document.getElementById('0')
        var btn1 = document.getElementById('1')
        var btn2 = document.getElementById('2')
        var btn3 = document.getElementById('3')
        var btn4 = document.getElementById('4')
        var btn5 = document.getElementById('5')
        var btn6 = document.getElementById('6')
        var btn7 = document.getElementById('7')
        var btn8 = document.getElementById('8')
        var btn9 = document.getElementById('9')
        
        btn1.addEventListener("click", function(){
            var dis = document.getElementById('display').value
            //pendiente para correccion
            if(dis == 0){
                //document.getElementById('display').innerHTML = btn1.value=1;
            }else{
               document.getElementById('display').textContent += btn1.value=1;
            }
        });
        btn2.addEventListener("click", function(){
            document.getElementById('display').textContent += btn2.value=2;
        });
        btn3.addEventListener("click", function(){
            document.getElementById('display').textContent += btn3.value=3;
        });
        btn4.addEventListener("click", function(){
            document.getElementById('display').textContent += btn4.value=4;
        });
        btn5.addEventListener("click", function(){
            document.getElementById('display').textContent += btn5.value=5;
        });
        btn6.addEventListener("click", function(){
            document.getElementById('display').textContent += btn6.value=6;
        });
        btn7.addEventListener("click", function(){
            document.getElementById('display').textContent += btn7.value=7;
        });
        btn8.addEventListener("click", function(){
            document.getElementById('display').textContent += btn8.value=8;
        });
        btn9.addEventListener("click", function(){
            document.getElementById('display').textContent += btn9.value=9;
        });
        btn0.addEventListener("click", function(){
            document.getElementById('display').textContent += btn0.value=0;
        });
    },

    punto: function(){
        var pant = document.getElementById('display');
        document.getElementById('punto').addEventListener("click", function(){
            pant.textContent += ".";
        })
    },
    
    reset: function(){
        var onc = document.getElementById('on');
        onc.addEventListener("click", function(){
            document.getElementById('display').innerHTML = 0;
        })
    },

    init: function(){
        this.reset();
        this.botones();
        this.punto();
    }
};

//funcion de inicializacion
calculadora.init()

