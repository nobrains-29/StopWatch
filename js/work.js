window.onload = function(){
    var minutes = 00;
    var seconds = 00;
    var mili = 00;
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendMili = document.getElementById("mili");
    var buttonStart = document.getElementById("button_start");
    var buttonStop = document.getElementById("button_stop");
    var buttonReset = document.getElementById("button_reset");
    var interval;   

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        mili = "00";
        seconds = "00";
        minutes = "00";
        appendMili.innerHTML=mili;
        appendSeconds.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;
    }

    function startTimer() {
        mili++;
        if(mili < 9){
            appendMili.innerHTML = "0" + mili;
        }

        if(mili > 9){
            appendMili.innerHTML = mili;
        }

        if(mili > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;    
            mili = 0;
            appendMili.innerHTML = mili;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0; 
            mili = 0;
            appendSeconds.innerHTML = minutes;
            appendMili.innerHTML = mili;
        }

        if(minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
    }
}