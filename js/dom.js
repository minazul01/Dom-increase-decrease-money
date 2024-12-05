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
  /* clear input field */
  document.getElementById('amount-field').value = '';
  document.getElementById('pin-field').value = '';
 
  /* tranction function */
  const p = document.createElement('p');
  p.classList.add('text-2xl')
  p.classList.add('my-8')
  p.classList.add('text-gray-400')
  p.innerText = `Add money : ${addMount} TK. tottal balance ${added}`


  /* appen to html element */
   document.getElementById('added-transaction').appendChild(p);
   /* alert transaction successful and unsuccessful */
   const transaction = true;
   if(transaction){
    alert('your transaction successful');
    return;
   }else{
     alert('your transaction not successful');
     return;
   }
   
  }else{
    alert('your amount or pin incorrect')
    return;
  }
})