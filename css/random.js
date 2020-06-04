
    var p1=Math.floor(Math.random()*6+1)

    var name="css/dice"+p1+".png";
    var temp=document.querySelectorAll("img")[0];
    temp.setAttribute("src",name);
    var p2=Math.floor(Math.random()*6+1);

    name2="css/dice"+p2+".png";
    temp2=document.querySelectorAll("img")[1];
    temp2.setAttribute("src",name2);

    if(p1>p2)
    {
        document.querySelector("h1").innerHTML="player 1 wins";
    }
    else if(p2>p1)
    {
        document.querySelector("h1").innerHTML="player 2 wins";
    }
    else if(p1==p2)
    {
        document.querySelector("h1").innerHTML="DRAW";
    }