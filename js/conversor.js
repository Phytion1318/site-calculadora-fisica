function km_ms(){
  event.preventDefault()

  let km = parseFloat(document.getElementById('km').value)
  let ms = parseFloat(document.getElementById('ms').value)

  if (isNaN(km)){
    document.getElementById('km').value = ms * 3.6

  };

  if (isNaN(ms)){
    document.getElementById('ms').value = km / 3.6
  };

  if (isNaN(ms) && isNaN(km)){

    document.getElementById('ms').classList.add('is-invalid')
    document.getElementById('km').classList.add('is-invalid')

  };

}


function limpar_km_sm(){
  document.getElementById("form_conversor").reset();

};
