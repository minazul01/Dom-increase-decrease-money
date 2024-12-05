document.getElementById('log-btn')
.addEventListener('click', function(event){
    event.preventDefault();
  const addMount =  inputIdField('amount-field');
  const addPin = inputIdField('pin-field');


  /* check aount and pin */
  if(addPin === 1234){
   const mainBalance = elementFieldId('main-balance');


   /* check main balance to cash out balance */
   if(addMount > mainBalance){
    alert('invalid amout')
    /* clear a input text */
    document.getElementById('amount-field').value = '';
  document.getElementById('pin-field').value = '';
    return;
   }


  //  console.log(mainBalance)
  const added = mainBalance - addMount;
  document.getElementById('main-balance').innerText = added;
  /* clear input field */
  document.getElementById('amount-field').value = '';
  document.getElementById('pin-field').value = '';


  /* tranction function */
  const p = document.createElement('p');
  p.classList.add('text-2xl')
  p.classList.add('my-8')
  p.classList.add('text-gray-400')
  p.innerText = `Cash Out : ${addMount} TK. tottal balance ${added}`
  /* appen to html element */
   document.getElementById('added-transaction').appendChild(p);



  }else{
    alert('your amount or pin incorrect')
     /* clear input field */
  document.getElementById('amount-field').value = '';
  document.getElementById('pin-field').value = '';
  return;
  }
})

/* transaction function */
