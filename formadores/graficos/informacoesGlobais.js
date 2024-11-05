const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
   
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `De <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas no planeta, existem aproximadamente <span>${dados.total_pessoas_com_acesso_a_educacao}</span>  bilhões de pessoas com acesso à educação, onde o tempo médio de estudo é de <span>${dados.tempo_medio_dia_estudando}</span>  horas por dia. Como Maria sempre pensou em estudar, porém, assim como 1,88 bilhão de pessoas sem acesso à educação, enfrentava muitas dificuldades. Para isso, ela começou a se dedicar estudando diariamente  e se tornou parte da parcela de  <span>${dados.total_pessoas_com_educacao_superior}</span> bilhão de pessoas que conseguem concluir o ensino superior.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
