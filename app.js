var mins=0;
var secs=0;
var msec=0;
var minutes=document.getElementById('minu');
var seconds=document.getElementById('sec');
var milisec=document.getElementById('msec');
var butt=document.getElementById('butt');
var interval;
function timer()
{
    msec++;
    milisec.innerHTML=msec;
if(msec>=100)
{
    secs++;
    seconds.innerHTML=secs;
    msec=0;
}
else if(secs>=60)
{
    mins++;
    minutes.innerHTML=mins;
    secs=0;
}

}
function start()
{
interval=setInterval(timer,10);
butt.disabled=true;
}
function stop()
{
    clearInterval(interval);
    butt.disabled=false;
}
function restart()
{
    mins=0;
    secs=0;
    msec=0;
    minutes.innerHTML=0;
    seconds.innerHTML=0;
    milisec.innerHTML=0;
    stop();
    butt.disabled=false;
}