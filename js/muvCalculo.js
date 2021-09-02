const RESPOSTA = document.getElementById('resposta')

const VI_INPUT = document.getElementById('vi')
const VF_INPUT = document.getElementById('vf')
const AI_INPUT = document.getElementById('ai')
const SI_INPUT = document.getElementById('si')
const SF_INPUT = document.getElementById('sf')
const TF_INPUT = document.getElementById('tf')




function torriceliVf(vi, ai, si, sf) {
  return Math.sqrt((vi * vi) + (2 * ai * (sf - si)));
  };


function torriceliSF(vi, vf, ai, si){
  return (((vf * vf) - (vi * vi)) / (2 * ai)) + si;
};

function toriceleAI(vi, vf, si, sf){
  return ((vf * vf) - (vi * vi)) / ((sf - si) * 2)
}


function calcular(){
  event.preventDefault();


  let lVI = parseFloat(document.getElementById('vi').value);
  let lVF = parseFloat(document.getElementById('vf').value);
  let lAI = parseFloat(document.getElementById('ai').value);
  let lSI = parseFloat(document.getElementById('si').value);
  let lSF = parseFloat(document.getElementById('sf').value);
  let lTF = parseFloat(document.getElementById('tf').value);


  if (isNaN(lVF) && isNaN(lTF)){
    let resposta = torriceliVf(lVI, lAI, lSI, lSF);

      RESPOSTA.innerHTML = resposta
      VF_INPUT.value = resposta

      document.getElementById('vf_label').classList.add('text-danger')


      event.preventDefault();
  };

  if (isNaN(lTF) && isNaN(lSF)) {
    let resposta = torriceliSF(lVI, lVF, lAI, lSI);

      RESPOSTA.innerHTML = resposta;
      SF_INPUT.value = resposta

      document.getElementById('sf_label').classList.add('text-danger')


      event.preventDefault();
  };

  if (isNaN(lTF) && isNaN(lAI)){
    let resposta = toriceleAI(lVI, lVF, lSI, lSF)

    RESPOSTA.innerHTML = resposta;
    AI_INPUT.value = resposta;

    document.getElementById('ai_label').classList.add('text-danger')


    event.preventDefault();
  };

  
};
