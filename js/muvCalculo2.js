function sorvetao(vi, vf, ai, si, sf, tf){

  if (isNaN(sf)){
    let resposta = si + (vi * tf) + (ai * ((tf * tf) / 2))

    SF_INPUT.value = resposta
    RESPOSTA.innerHTML = resposta


    SF_LABEL.classList.add('text-danger');
    VF_LABEL.classList.remove('text-danger');
    AI_LABEL.classList.remove('text-danger');

  };

  if (isNaN(ai)) {
    let resposta = (Math.abs(sf - si) + (vi * tf))/((tf * tf) / 2)

    AI_INPUT.value = resposta
    RESPOSTA.innerHTML = resposta

    SF_LABEL.classList.remove('text-danger');
    VF_LABEL.classList.remove('text-danger');
    AI_LABEL.classList.add('text-danger');


  }

  if (isNaN(vi)) {
    let resposta = (sf - si - (ai * (tf * tf) / 2))

    VI_INPUT.value = resposta
    RESPOSTA.innerHTML = resposta


  }
};
