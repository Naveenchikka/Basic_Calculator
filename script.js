



var cont = document.createElement('div');
cont.id = 'container';
var div1 = document.createElement('div')
div1.id = 'calculator';
var div2 = document.createElement('div');
div2.id = 'result';
var div3 = document.createElement('div');
div3.id = 'history';

var div4 = document.createElement('div');
div4.id = 'history-value';
div4.style.backgroundColor = "white";

var div5 = document.createElement('div');
div5.id = 'output';

var div6 = document.createElement('div');
div6.id = 'output-value';
div6.style.backgroundColor = "white";

div3.append(div4);
div5.append(div6);
div2.append(div3,div5);
div1.append(div2);


var keyboard = document.createElement('div');
keyboard.id = 'keyboard';
var btn1 = createbtn('button','number','7','7');
var btn2 = createbtn('button','number','8','8');
var btn3 = createbtn('button','number','9','9');
var btn4 = createbtn('button','number','+','+');
var btn5 = createbtn('button','number','4','4');
var btn6 = createbtn('button','number','5','5');
var btn7 = createbtn('button','number','6','6');
var btn8 = createbtn('button','number','-','-');
var btn9 = createbtn('button','number','1','1');
var btn10 = createbtn('button','number','2','2');
var btn11 = createbtn('button','number','3','3');
var btn12 = createbtn('button','number','*','&times;');
var btn13 = createbtn('button','number','clear','C');
var btn14 = createbtn('button','number','0','0');
var btn15 = createbtn('button','number','=','=');
var btn16 = createbtn('button','number','/','&#247;');


keyboard.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16);

div1.append(keyboard);
cont.append(div1);
function createbtn(ele, clsname, id, val=" ")
{
    var t = document.createElement(ele);
    t.id = id;
    t.className = clsname;
    t.innerHTML = val;
    return t;
}

document.body.append(cont);



const historyScreen = document.getElementById('history-value');
const outputscreen = document.getElementById('output-value');
const spans = document.getElementsByClassName('number');
const buttonArr = Array.from(spans);
console.log(typeof(buttonArr));



buttonArr.map(btn => btn.addEventListener('click',function()
{
    

    if(btn.innerText !== "=")
    {
        if(btn.id === "*")
        {
             historyScreen.innerText = historyScreen.innerText+"*";
        }
        else if(btn.id === "/")
        {
             historyScreen.innerText = historyScreen.innerText+"/";
        }
        else 
        {
            historyScreen.innerText = historyScreen.innerText+btn.innerText;
        }

    };
    if(btn.innerText === "=")
    {
      outputscreen.innerText = eval(historyScreen.innerText);
    };

    if(btn.innerText === "C")
    {
        historyScreen.innerText = "";
        outputscreen.innerText = ""
    };
}));
