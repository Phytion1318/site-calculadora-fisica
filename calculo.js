const RESPOSTA = document.getElementById('resposta')


function torriceliVf(vi, ai, si, sf) {



    return Math.sqrt((vi * vi) + (2 * ai * sf))
  }


function calcular(){
  event.preventDefault();

  let lVI = parseFloat(document.getElementById('vi').value)
  let lVF = parseFloat(document.getElementById('vf').value)
  let lAI = parseFloat(document.getElementById('ai').value)
  let lSI = parseFloat(document.getElementById('si').value)
  let lSF = parseFloat(document.getElementById('sf').value)
  let lTF = parseFloat(document.getElementById('tf').value)



if (isNaN(lVF) && isNaN(lTF)){
  let resposta = torriceliVf(lVI, lAI, lSI, lSF)


    RESPOSTA.innerHTML = resposta
    event.preventDefault();
} }
