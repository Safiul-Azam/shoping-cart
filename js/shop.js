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
    const tex = sub / 10
    const total = sub + tex

    document.getElementById('sub-total').innerText = sub
    document.getElementById('tax-amount').innerText = tex
    document.getElementById('total-price').innerText = total
}
    
const checkOut = ()=>{
    const phoneInput = document.getElementById('phone-number')
    const phoneNumber = parseInt(phoneInput.value) 
    const caseInput = document.getElementById('case-number')
    const caseNumber = parseInt(caseInput.value)
    const totalProduct = phoneNumber + caseNumber
    const modalBody = document.getElementById('modal-body')
     const sub = document.getElementById('sub-total').innerText
     const tex = document.getElementById('tax-amount').innerText
    const total = document.getElementById('total-price').innerText
    modalBody.innerHTML=`
         <h6>Phone's Count - ${phoneNumber}</h6>
         <h6>Case's Count - ${caseNumber}</h6>
         <h6>Total Product - ${totalProduct}</h6>
         <h6>Subtotal: - ${sub}</h6>
         <h6>Tex: - ${tex}</h6>
         <h6>Total: - ${total}</h6>
    
    `
    
}

    
 


