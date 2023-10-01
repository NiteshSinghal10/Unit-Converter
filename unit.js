
let button=document.querySelectorAll(".btn")
function work(ele)
{
    let id=document.querySelector(`#${ele}`)
    button.forEach(element => {
        //for changing background color
        if(element.innerHTML!=id.innerHTML)
        {
            element.style.backgroundColor="rgb(5, 92, 5)";
            element.style.border="2px solid black"
        }
        else
        {
            id.style.backgroundColor="rgb(238, 113, 113)";
            id.style.border="0px"
        }

        //for changing hidden property
        let units=["length","temperature","weight","time"]
        let inunit=["l1drop","t1drop","w1drop","ti1drop"]
        let outunit=["l2drop","t2drop","w2drop","ti2drop"]
        for(let i=0;i<units.length;i++)
        {
            if(ele==units[i])
            {
                document.getElementById(inunit[i]).hidden=false;
                document.getElementById(outunit[i]).hidden=false;
            }
            else{
                document.getElementById(inunit[i]).hidden=true;
                document.getElementById(outunit[i]).hidden=true;
            }
        }
    });
}


function result(){
    let a=document.querySelector("#invalue").value;
    //for length
    if(document.getElementById("length").style.backgroundColor=="rgb(238, 113, 113)")
    {
        let first=document.getElementById("l1drop").value;
        let second=document.getElementById("l2drop").value;
        if(first>=second)
           document.getElementById("outvalue").value=a*(10**(first-second));
        else
           document.getElementById("outvalue").value=a*(1/(10**(second-first)));
    }

    //for temperature
    else if(document.getElementById("temperature").style.backgroundColor=="rgb(238, 113, 113)")
    {
        let first=parseInt(document.getElementById("t1drop").value);
        let second=parseInt(document.getElementById("t2drop").value);
        if(first!=10 && second!=10)
        {
            let chart=[[0,-273.15],[273.15,0]];  //c*9/5+32
            document.getElementById("outvalue").value=parseInt(a) + chart[first-1][second-1];
        }
        else if(first==10 && second==10)//(f-32)*5/9=c
            document.getElementById("outvalue").value=a;
        else
        {
            if(first==10)
            {
                a=(parseInt(a)-32)*5/9;
                if(second==2)
                    document.getElementById("outvalue").value=a;
                else
                    document.getElementById("outvalue").value=a+273.15;
            }
            else{
                if(first==1)
                    a=parseInt(a)-273.15;
                document.getElementById("outvalue").value=a*9/5+32;
            }
        }
        
    }

    //for weight
    else if(document.getElementById("weight").style.backgroundColor=="rgb(238, 113, 113)")
    {
        let first=document.getElementById("w1drop").value;
        let second=document.getElementById("w2drop").value;
        if(first>=second)
            document.getElementById("outvalue").value=a*(10**(first-second));
        else
            document.getElementById("outvalue").value=a*(1/(10**(second-first)));
    }

    //for time
    else{
        let first=document.getElementById("ti1drop").value;
        let second=document.getElementById("ti2drop").value;
        if(first>=second)
            document.getElementById("outvalue").value=a*(60**(first-second));
        else
            document.getElementById("outvalue").value=a*(1/(60**(second-first)));

    }
}




