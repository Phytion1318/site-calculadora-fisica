const KM = document.getElementById('km')
const MS = document.getElementById('ms')

function km_ms(){
  event.preventDefault()

  let km = parseFloat(document.getElementById('km').value)
  let ms = parseFloat(document.getElementById('ms').value)

  if (isNaN(km)){
    document.getElementById('km').value = ms * 3.6

    MS.classList.remove('form-invalid')
    KM.classList.remove('form-invalid')
  };

  if (isNaN(ms)){
    document.getElementById('ms').value = km / 3.6

    MS.classList.remove('form-invalid')
    KM.classList.remove('form-invalid')
  };

  if (isNaN(ms) && isNaN(km)){

    MS.classList.add('form-invalid')
    KM.classList.add('form-invalid')

    KM.value = 0
    MS.value = 0

  };

}


function limpar_km_sm(){
  document.getElementById("form_conversor").reset();

};
