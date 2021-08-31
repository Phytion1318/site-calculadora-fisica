const RESPOSTA = document.getElementById('resposta')

function calculo(vi, vf, ai, si, sf, tf) {

  if ( vf = [ ]){

    RESPOSTA.innerHTML = Math.sqrt(vi * vi + 2 * ai * sf)
  }





  event.preventDefault();
}

function calcular(){


  let resposta = calculo(
    parseInt(document.getElementById('vi').value),
    parseInt(document.getElementById('vf').value),
    parseInt(document.getElementById('ai').value),

    parseInt(document.getElementById('si').value),
    parseInt(document.getElementById('sf').value),

    parseInt(document.getElementById('tf').value)

  );

}
