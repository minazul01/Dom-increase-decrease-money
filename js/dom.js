document.getElementById('log-btn')
.addEventListener('click', function(event){
    event.preventDefault();
  const addMount =  inputIdField('amount-field');
  const addPin = inputIdField('pin-field');
  /* check aount and pin */
  if(addMount === '1234'){
    //  const mainBalance = elementIdfieldId('elementIdfieldId');
    //  const addBalance = mainBalance + addMount;
   console.log( 'hey hey okay now')
  }else{
    alert('your amount or pin incorrect')
  }
})