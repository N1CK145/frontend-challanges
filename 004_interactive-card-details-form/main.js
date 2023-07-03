const formCardholder = document.getElementById("card-holder")
const formCardnumber = document.getElementById("card-number")
const formCardExpMonth = document.getElementById("exp-date-month")
const formCardExpYear = document.getElementById("exp-date-year")
const formCardCvc = document.getElementById("cvc")


const visibleCardOwner = document.getElementById("vis-card-owner")
const visibleCardnumber = document.getElementById("vis-card-number")
const visibleCardExpMonth = document.getElementById("vis-card-exp-month")
const visibleCardExpYear = document.getElementById("vis-card-exp-year")
const visibleCardCvc = document.getElementById("vis-card-cvc")


const zeroPad = (num, places) => String(num).padStart(places, '0')


formCardholder.addEventListener("input", (e) => {
    const ownerName = e.target.value.slice();

    visibleCardOwner.innerHTML = ownerName
})

formCardnumber.addEventListener("input", (e) => {
    let cardNumber = e.target.value.slice().replaceAll(" ", "");

    if(!cardNumber){
        visibleCardnumber.innerHTML = "0000 0000 0000 0000"
        return;
    }
    
    if (cardNumber.length > 16){
        cardNumber = cardNumber.slice(0, -1)
        e.target.value = e.target.value.slice(0, -1)
    }

    
    const formated = cardNumber.match(/.{1,4}/g).join(' ')

    visibleCardnumber.innerHTML = formated
})

formCardExpMonth.addEventListener("input", e => {
    let month = e.target.value.slice()

    if(!month){
        visibleCardExpMonth.innerHTML = "00";
        return;
    }

    if (month.length > 2 || +month > 12 || +month < 0){
        month = month.slice(0, -1)
        e.target.value = e.target.value.slice(0, -1)
    }

    visibleCardExpMonth.innerHTML = zeroPad(month, 2)
})

formCardExpYear.addEventListener("input", e => {
    let month = e.target.value.slice()

    if(!month){
        visibleCardExpYear.innerHTML = "00";
        return;
    }

    if (month.length > 2 || +month > 99 || +month < 0){
        month = month.slice(0, -1)
        e.target.value = e.target.value.slice(0, -1)
    }

    visibleCardExpYear.innerHTML = zeroPad(month, 2)
})

formCardCvc.addEventListener("input", e => {
    let cvc = e.target.value.slice()

    if(!cvc){
        visibleCardCvc.innerHTML = "000";
        return;
    }

    if (cvc.length > 3 || +cvc > 999 || +cvc < 0){
        cvc = cvc.slice(0, -1)
        e.target.value = e.target.value.slice(0, -1)
    }

    visibleCardCvc.innerHTML = zeroPad(cvc, 3)
})
