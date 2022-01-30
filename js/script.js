function loadingAlert(){
    alert("Loading weather report...")
}

function convertUnits(val){
    var temps = document.querySelectorAll(".temps h4 span");

    console.log(temps);

    if(val === "C"){
        for(var i = 0; i < temps.length; i++){
            temps[i].innerHTML = Math.round((temps[i].innerHTML - 32)/1.8);
        }
    }else{
        for(var i = 0; i < temps.length; i++){
            temps[i].innerHTML = Math.round(temps[i].innerHTML*1.8 + 32);
        }
    }
}

function cookiesConfirmed(){
    document.getElementById("cookies").style.display = "none";
}