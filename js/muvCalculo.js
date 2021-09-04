const RESPOSTA = document.getElementById('resposta')

const VI_INPUT = document.getElementById('vi')
const VF_INPUT = document.getElementById('vf')
const AI_INPUT = document.getElementById('ai')
const SI_INPUT = document.getElementById('si')
const SF_INPUT = document.getElementById('sf')
const TF_INPUT = document.getElementById('tf')

const VI_LABEL = document.getElementById('vi_label')
const VF_LABEL = document.getElementById('vf_label')
const AI_LABEL = document.getElementById('ai_label')
const SI_LABEL = document.getElementById('si_label')
const SF_LABEL = document.getElementById('sf_label')
const TF_LABEL = document.getElementById('tf_label')



function calcular(){
  event.preventDefault();

  if (isNaN(parseFloat(SI_INPUT.value))){
    SI_INPUT.value = 0
  }

  let lVI = parseFloat(document.getElementById('vi').value);
  let lVF = parseFloat(document.getElementById('vf').value);
  let lAI = parseFloat(document.getElementById('ai').value);
  let lSI = parseFloat(document.getElementById('si').value);
  let lSF = parseFloat(document.getElementById('sf').value);
  let lTF = parseFloat(document.getElementById('tf').value);

  let sorvetaoValidacao = true


  if (isNaN(lVF) && isNaN(lTF)){

    if (isNaN(parseFloat(VI_INPUT.value))){
      VI_INPUT.value = 0
      lVI = parseFloat(document.getElementById('vi').value);
    }

   torriceliVf(lVI, lAI, lSI, lSF);

      sorvetaoValidacao = false
      event.preventDefault();
  };

  if (isNaN(lTF) && isNaN(lSF)) {

    if (isNaN(parseFloat(VI_INPUT.value))){
      VI_INPUT.value = 0
      lVI = parseFloat(document.getElementById('vi').value);
    }

     torriceliSF(lVI, lVF, lAI, lSI);

      sorvetaoValidacao = false
      event.preventDefault();
  };

  if (isNaN(lTF) && isNaN(lAI)){

    if (isNaN(parseFloat(VI_INPUT.value))){
      VI_INPUT.value = 0
      lVI = parseFloat(document.getElementById('vi').value);
    }

     toriceliAI(lVI, lVF, lSI, lSF)

    sorvetaoValidacao = false
    event.preventDefault();
  };


  if (sorvetaoValidacao === true){
    sorvetao(lVI, lVF, lAI, lSI, lSF, lTF);


  }

};
