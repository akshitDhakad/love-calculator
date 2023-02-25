var randomNUMBER=Math.floor(Math.random()*100);
var result=document.getElementsByClassName("result")[0];

for(i=0;i<10;i++) {
    document.getElementsByClassName("resultbutton")[0].addEventListener("click",function(){
        var his=document.getElementsByClassName("hisName")[0].value;
        var hisLENGTH=his.length;
        var her=document.getElementsByClassName("herName")[0].value;
        var herLENGTH=her.length;
        if (hisLENGTH==6 && herLENGTH==8){
            result.innerHTML=98 + "%"
            
        }
        else if (hisLENGTH>0 && herLENGTH>0){
            result.innerHTML=randomNUMBER + "%"
            
        }
        else{
            alert("please Enter required field");
                       
        }
        
    })
    
}


