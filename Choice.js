/*  Global Variables  */

var delta = deltacounter;
var omicron = omnicroncounter;

var deltacounter = 0;
var omnicroncounter = 0;
var days;
var WholeNCP = 0;
var Checkers = 3;

allVar();

localStorage.setItem("Maxpop",maxp);
localStorage.setItem("Vaccpop",vp);

function allVar(){
    maxp = parseInt(document.getElementById("MaxP").value);
    vp = parseInt(document.getElementById("VacPT").value);
}

function erasefast()
{
    document.getElementById("erasesoon").style.display = "none";
    document.getElementById("showup").style.display = "block";
}

function erasefast2()
{
    location.href = "index.html";
}

function ChoiceStart(){
    allVar();
    console.log(maxp);
    if(maxp <= 1000){
        if(vp <= 99){
                document.getElementById("showup").style.display = "none";
                document.getElementById("GameStart").removeAttribute("display");
                document.getElementById("GameStart").style.display = "block";
                days = 0;
                days++;
                document.getElementById("GameCounter").innerHTML = "Day:" + days;
                GameSet();
        }
    }
    else{
        location.href = "Choicer.html";
    }
}

function Delta(){
    if(deltacounter === 0)
    {
        document.getElementById("onoff1").style.color = "red";
        deltacounter++;
    }
    else
    {
        document.getElementById("onoff1").style.color = "white";
        deltacounter--;
    }
}





/*Actual Game Coding*/



var endarray = [];
var maxxp = [];
var nmaxxp = [];



function GameSet(){
    allVar();
    maxxp = [0];
    for(var i = 0; i < maxp;i++)
    {
        maxxp.push("0");
    }
    return maxxp;
}

function ForcedCalc(){
    document.getElementById("buttonswitch").style.display= "none";
    Delta();
    allVar();
    let num1 = 0;
    console.log(deltacounter)
    for(var i = 0; i < maxxp.length; i++)
    {
        if(deltacounter === 1)
        {
            num1 = Math.random() * 100 + 2;
            if(num1 < vp)
            {
                let choose = Math.round(Math.random() * 2 + 1);
                console.log(choose);
                if(choose >= 2)
                {
                    maxxp[i] = 2;
                }
                else
                {
                    maxxp[i] = 1;
                }
            }
            else
            {
                maxxp[i] = 0;
            }
        }
        else{
            num1 = Math.random() * 100 + 1;
            if(num1 < vp)
            {
                maxxp[i] = 1;
            }
            else
            {
                maxxp[i] = 0;
            }
        }
    }
    console.log(maxxp);
    var counter = 0;
    for(var s = 0;s < maxxp.length - 1; s++)
    {
        if(maxxp[s] === 1 || maxxp[s] === 2)
        {
            counter++;
        }
    }

    WholeNCP = maxp - counter;
    console.log(WholeNCP);
    document.getElementById("WholeNCP").innerHTML = "Non-Covid Population: " + WholeNCP;

    var CoronaP = (maxp - WholeNCP) / maxp;
    CoronaP = CoronaP  * 100;
    console.log(CoronaP)
    document.getElementById("CoronaP").innerHTML = "Corona Percentage Out Of The Population: " + Math.round(CoronaP);

    let countDeltaP = 0;
    for(var z = 0; z < maxxp.length;z++)
    {
        if(maxxp[z] === 2)
        {
            countDeltaP++;
        }
    }
    document.getElementById("DeltaP").innerHTML = "Delta Virus Patients: " + countDeltaP;



    /*
   var temparray = [];
   var countdoc = 0;
   for(var h = 0; h < 10; h++)
   {
       var randomput = Math.random() * (maxxp.length) + 1;
       temparray.push(maxxp[randomput]);
   }
   for(var m = 0; m < 10; m++)
   {
       if(temparray[m] >= 1)
       {
           countdoc++;
       }
   }
   if(counterdoc > 5)
   {
       document.getElementById("railcard").style.backgroundColor = "red";
   }
    */

   endarray.push(WholeNCP);
   return WholeNCP;
}

function NewArrayParameters()
{
   nmaxxp = [0];
   for(var i = 0; i < WholeNCP;i++)
   {
       nmaxxp.push("0");
   }
   console.log(nmaxxp);
   NewForcedCalc();
}

function NewForcedCalc()
{
   allVar();
   console.log(deltacounter);
   let num2 = 0;
   for(var q = 0; q < nmaxxp.length; q++)
   {
       if(deltacounter === 1)
       {
           num2 = Math.random() * 100 + 2;
           if(num2 < vp)
           {
               let choose = Math.round(Math.random() * 2 + 1);
               console.log(choose);
               if(choose >= 2)
               {
                   nmaxxp[q] = 2;
               }
               else
               {
                   nmaxxp[q] = 1;
               }
           }
           else
           {
               nmaxxp[q] = 0;
           }
       }
       else{
           num2 = Math.random() * 100 + 1;
           if(num2 < vp)
           {
               nmaxxp[q] = 1;
           }
           else
           {
               nmaxxp[q] = 0;
           }
       }
   }
   console.log(nmaxxp);

   var counter1 = 0;
   for(var p = 0;p < nmaxxp.length - 1; p++)
   {
       if(nmaxxp[p] === 1 || nmaxxp[p] === 2)
       {
           counter1++;
       }
   }

   WholeNCP = WholeNCP - counter1;
   console.log(WholeNCP);
   document.getElementById("WholeNCP").style.display = "block";
   document.getElementById("WholeNCP").innerHTML = "Non-Covid Population: " + WholeNCP;

   var NewCoronaP = (maxp - WholeNCP) / maxp;
   NewCoronaP = NewCoronaP  * 100;
   document.getElementById("CoronaP").style.display = "block";
   document.getElementById("CoronaP").innerHTML = "Corona Percentage Out Of The Population: " + Math.round(NewCoronaP);

   let NewcountDeltaP = 0;
   for(var z = 0; z < nmaxxp.length;z++)
   {
       if(nmaxxp[z] === 2)
       {
           NewcountDeltaP++;
       }
   }
   document.getElementById("DeltaP").style.display = "block";
   document.getElementById("DeltaP").innerHTML = "Delta Virus Patients: " + NewcountDeltaP;

       /*
   var temparray1 = [];
   var countdoc1 = 0;
   for(var h = 0; h < 10; h++)
   {
       var randomput1 = Math.random() * (nmaxxp.length) + 1;
       temparray1.push(nmaxxp[randomput1]);
   }
   for(var m = 0; m < 10; m++)
   {
       if(temparray1[m] >= 1)
       {
           countdoc1++;
       }
   }
   console.log(countdoc1);
   if(countdoc1 > 5)
   {
       document.getElementById("railcard").style.backgroundColor = "red";
   }

   */
    endarray.push(WholeNCP);
    return WholeNCP;
}


function EndDay()
{
    document.getElementById("GameStart").style.display = "none";
    Endingz(days,WholeNCP);
    document.getElementById("turnon1").style.display = "block";
    document.getElementById("Welcomeback").style.display = "block";
}

function NextDay()
{
    console.log(WholeNCP)
    if(WholeNCP > 1)
    {
        days++;
        document.getElementById("GameCounter").innerHTML = "Day:" + days;
        document.getElementById("WholeNCP").style.display = "none";
        document.getElementById("CoronaP").style.display = "none";
        document.getElementById("DeltaP").style.display = "none";
        NewArrayParameters();
    }
    else
    {
        document.getElementById("GameStart").style.display = "none";
        Endingz(days,WholeNCP);
        document.getElementById("turnon1").style.display = "block";
        document.getElementById("Welcomeback").style.display = "block";
    }
}

function Endingz(dayz,WholeNCP)
{
    if(dayz > 1)
    {
        if(WholeNCP > (WholeNCP/2))
        {
            document.getElementById("EndScreen").innerHTML = "This Is Your Log. <br> You Have Kept The Facility Open For " + dayz + " Day(s)" + " <br><br> " + WholeNCP + " Amount Of People Are Not Contaminated. Good Job!";
        }
        else
        {
            document.getElementById("EndScreen").innerHTML = "This Is Your Log. <br> You Have Kept The Facility Open For " + dayz + " Day(s)" + " <br><br> " + WholeNCP + " Amount Of People Are Not Contaminated.";
        }
    }
    else
    {
        if(WholeNCP > (WholeNCP/2))
        {
            document.getElementById("EndScreen").innerHTML = "This Is Your Log. <br> You Have Kept The Facility Open For " + dayz + " Day" + " <br><br> " + WholeNCP + " Amount Of People Are Not Contaminated. Good Job!";
        }
        else
        {
            document.getElementById("EndScreen").innerHTML = "This Is Your Log. <br> You Have Kept The Facility Open For " + dayz + " Day" + " <br><br> " + WholeNCP + " Amount Of People Are Not Contaminated.";
        }
    }
}

function Welcoming()
{
    location.href = "index.html";
}

