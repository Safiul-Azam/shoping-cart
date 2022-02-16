// PHONE 
document.getElementById('plus-phone').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number')
    let phoneNumber = parseInt(phoneInput.value)
    phoneNumber = phoneNumber + 1
    phoneInput.value = phoneNumber

    const phoneTotal =  document.getElementById('phone-total')
    const phonePrice = parseInt(phoneTotal.innerText)
    phoneTotal.innerText = phoneNumber * 1219
    totalcalculat()

})
document.getElementById('minus-phone').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number')
    let phoneNumber = parseInt(phoneInput.value)
    if(phoneNumber > 0){
        phoneNumber = phoneNumber - 1
    }
    phoneInput.value = phoneNumber

    const phoneTotal =  document.getElementById('phone-total')
    const phonePrice = parseInt(phoneTotal.innerText)
    phoneTotal.innerText = phoneNumber * 1219
    totalcalculat()
})
//  CASE 
document.getElementById('plus-case').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number')
    let caseNumber = parseInt(caseInput.value)
    caseNumber = caseNumber + 1
    caseInput.value = caseNumber

    const caseTotal =  document.getElementById('case-total')
    const casePrice = parseInt(caseTotal.innerText)
    caseTotal.innerText = caseNumber * 59
    totalcalculat()
})
document.getElementById('minus-case').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number')
    let caseNumber = parseInt(caseInput.value)
    if(caseNumber > 0 ){
        caseNumber = caseNumber - 1
    }
    caseInput.value = caseNumber

    const caseTotal =  document.getElementById('case-total')
    const casePrice = parseInt(caseTotal.innerText)
    caseTotal.innerText = caseNumber * 59
    totalcalculat()
})

function totalcalculat(){
    const phoneInput = document.getElementById('phone-number')
    const phoneNumber = parseInt(phoneInput.value)
    const phoneTotal = phoneNumber * 1219;

    const caseInput = document.getElementById('case-number')
    const caseNumber = parseInt(caseInput.value)
    const caseTotal = caseNumber * 59;

    const sub = phoneTotal + caseTotal
    console.log(sub)
    const tex = sub / 10
    const total = sub + tex

    const subTotal = document.getElementById('sub-total').innerText = sub
    const texAmount = document.getElementById('tax-amount').innerText = tex
    const totalPrice = document.getElementById('total-price').innerText = total
}
    

    
 


