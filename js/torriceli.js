
function torriceliVf(vi, ai, si, sf) {

  let resposta = Math.sqrt((vi * vi) + (2 * ai * Math.abs((sf - si))));

  RESPOSTA.innerHTML = resposta
  VF_INPUT.value = resposta

  VF_LABEL.classList.add('text-danger')
  SF_LABEL.classList.remove('text-danger')
  AI_LABEL.classList.remove('text-danger')
  };


function torriceliSF(vi, vf, ai, si){


  let resposta = (((vf * vf) - (vi * vi)) / (2 * ai)) + si;

  RESPOSTA.innerHTML = resposta;
  SF_INPUT.value = resposta

  SF_LABEL.classList.add('text-danger')
  VF_LABEL.classList.remove('text-danger')
  AI_LABEL.classList.remove('text-danger')
};

function toriceliAI(vi, vf, si, sf){

  let resposta = ((vf * vf) - (vi * vi)) / ((sf - si) * 2)

  RESPOSTA.innerHTML = resposta;
  AI_INPUT.value = resposta;

  AI_LABEL.classList.add('text-danger')
  SF_LABEL.classList.remove('text-danger')
  VF_LABEL.classList.remove('text-danger')
}
