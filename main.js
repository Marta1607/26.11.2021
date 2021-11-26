function pobieranie() {
    let jakosc = document.getElementById('inp').value
    console.log(jakosc)
}

function jakosc() {
    const dobre = document.getElementById('inp').value
    if (dobre.length > 6) {
        document.getElementById('p1').innerHTML = 'odpowienie hasło'
    }
    if (dobre.length > 4 && dobre.length < 7){
        document.getElementById('p1').innerHTML = 'średnie hasło'
    }
    if (dobre.length < 4){
        document.getElementById('p1').innerHTML = 'słabe hasło'
    }
        console.log(dobre)
}