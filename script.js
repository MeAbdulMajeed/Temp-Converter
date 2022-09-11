document.getElementById('submitButton').onclick = function(){

    let temp;

    if(document.getElementById('cButton').checked){

        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById('tempLabel').innerHTML = "<b>"+temp + "°C</b>";
    }
    else if(document.getElementById('fButton').checked){

        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toFahrenhite(temp);
        document.getElementById('tempLabel').innerHTML = "<b>"+temp + "°F</b>";
    }
    else{
        document.getElementById('tempLabel').innerHTML = "<b>Please Select a Unit</b>";
    }
}
function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenhite(temp){
    return temp * 9 / 5 + 32;
}