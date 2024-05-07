document.getElementById('calculate').addEventListener('click', function(){
    const value = Number(document.getElementById('value').value);
    const fee =  Number(document.getElementById('fee').value/100);
    const time = Number(document.getElementById('time').value)

    const total = value * (1+fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.',','))
});