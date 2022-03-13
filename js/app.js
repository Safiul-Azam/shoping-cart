// declered function file 
function getUpdate(product ,price, isIncreasing){
    const inputField = document.getElementById(product +'-number')
    let inputNumber = inputField.value
    if(isIncreasing == true){
    inputNumber = parseInt(inputNumber) + 1
    }else if(inputNumber > 0){
    inputNumber = parseInt(inputNumber) - 1
    }
    inputField.value = inputNumber
    // total cost event 
    const totalCost = document.getElementById(product +'-total')
    totalCost.innerText = inputNumber * price 
    calculate() 
}
function calculate(){
   const phoneInput = document.getElementById('phone-number')
   const phoneNumber = phoneInput.value
   const phoneTotal = parseInt(phoneNumber) * 1219
   const caseInput = document.getElementById('case-number')
   const caseNumber = caseInput.value
   const caseTotal = parseInt(caseNumber) * 59
   const total = phoneTotal + caseTotal
   const tex = total / 10;
   const all = total + tex
    document.getElementById('sub-total').innerText = total

    document.getElementById('tax-amount').innerText = tex

    document.getElementById('total-price').innerText = all  

}

// handle phone increment and decrement event 
document.getElementById('plus-phone').addEventListener('click', function(){
    getUpdate('phone',1219,true,)
})
document.getElementById('minus-phone').addEventListener('click', function(){
    getUpdate('phone',1219,false)
})
// handle case increment and decrement event 
document.getElementById('plus-case').addEventListener('click', function(){
    getUpdate('case',59, true)
})
document.getElementById('minus-case').addEventListener('click', function(){
    getUpdate('case',59, false)
})
    
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