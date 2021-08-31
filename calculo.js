const RESPOSTA = document.getElementById('resposta')

const VI = parseInt(document.getElementById('vi').value
const VF = parseInt(document.getElementById('vf').value
const AI = parseInt(document.getElementById('ai').value
const SI = parseInt(document.getElementById('si').value
const SF = parseInt(document.getElementById('sf').value
const TF = parseInt(document.getElementById('tf').value


function torriceliVf(vi, ai, si, sf) {



    return Math.sqrt(vi * vi + 2 * ai * sf)
  }

}

function calcular(){

if (VF === 5){
  let resposta = torriceliVf(VI, AI, SI, SF)
}

    RESPOSTA.innerHTML = resposta
    event.preventDefault();

  );

}
