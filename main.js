function pobieranie() {
    let jakosc = document.getElementById('inp').value
    console.log(jakosc)
}

function jakosc() {
    const dobre = document.getElementById('inp').value
    //sprawdza czy dany element spełnia wymagania odnośnie długości
    if (dobre.length > 6 && dobre.search(/[0-9]/)!=-1) {
        //daje napis gdy po kliknięciu przycisku warunek spełnia/niespełnia odpowiednich wymagań
        document.getElementById('p1').innerHTML = 'odpowienie hasło'
    }
    if (dobre.length > 3 && dobre.length < 7 && dobre.search(/[0-9]/)!=-1){
        document.getElementById('p1').innerHTML = 'średnie hasło' 
    }
    if (dobre.length < 4){
        document.getElementById('p1').innerHTML = 'słabe hasło'
    }
        
}