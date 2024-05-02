
 //(1-10 arası random sayı)
var correctNumber = Math.floor((Math.random()*10)+1);
var timeLeft = 30;
var guessLeft = 5;
var level=1;
var game=true;
var guessNumber="";

    var columnTime = document.getElementById('kalan-sure');
    var columnInfo = document.getElementById('bilgi-mesaj');
    var columnLevel = document.getElementById('level');
    var columnHak = document.getElementById('tahmin-hak');
    columnHak.innerHTML=`Kalan Tahmin Hakkı: ${guessLeft}`
    columnLevel.innerHTML=`Seviye: ${level}`;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        alert("TIMEOUT");
        document.getElementById("guess-Button").style="display: none;"
        document.getElementById("guess-Number").style="display: none;"
      } else {
        columnTime.innerHTML ='Kalan Süre: '+ timeLeft + 'sn';
        timeLeft--;
      }
    }

    console.log(correctNumber);

    function NumberControl(){
        guessNumber=document.getElementById("guess-Number").value

    if(guessNumber==correctNumber){
        
        
        columnInfo.innerHTML='Tebrikler Doğru Tahmin!'
        timeLeft=30;
        level++;
        guessLeft=5;
        columnHak.innerHTML=`Kalan Tahmin Hakkı: ${guessLeft}`
        columnLevel.innerHTML=`Seviye: ${level}`
        guessNumber="";
        correctNumber= Math.floor((Math.random()*(10*level))+1);
        console.log(correctNumber);
        
    }
    else if(guessNumber<correctNumber){
        guessLeft--;
        if(guessLeft<=0){
        document.getElementById("guess-Button").style="display: none;"
        document.getElementById("guess-Number").style="display: none;"
        clearTimeout(timerId);
        }
        columnHak.innerHTML=`Kalan Tahmin Hakkı: ${guessLeft}`
        columnInfo.innerHTML='lütfen daha büyük bir değer girin'
    }
    else if(guessNumber>correctNumber){
        guessLeft--;
        if(guessLeft<=0){
        document.getElementById("guess-Button").style="display: none;"
        document.getElementById("guess-Number").style="display: none;"
        clearTimeout(timerId);
        }
        columnHak.innerHTML=`Kalan Tahmin Hakkı: ${guessLeft}`
        columnInfo.innerHTML='lütfen daha küçük bir değer girin'
    }
        
    }
    




