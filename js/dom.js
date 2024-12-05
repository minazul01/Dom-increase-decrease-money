document.getElementById('log-btn')
.addEventListener('click', function(event){
    event.preventDefault();
  const addMount =  inputIdField('amount-field');
  const addPin = inputIdField('pin-field');
  /* check aount and pin */
  if(addPin === 1234){
   const mainBalance = elementFieldId('main-balance');
  //  console.log(mainBalance)
  const added = mainBalance + addMount;
  document.getElementById('main-balance').innerText = added;
  document.getElementById('amount-field').value = '';
  document.getElementById('pin-field').value = '';
 

   
  }else{
    alert('your amount or pin incorrect')
  }
})