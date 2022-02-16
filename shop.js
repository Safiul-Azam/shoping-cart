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

    

    
 


