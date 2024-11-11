const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const pessoasAcessoEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const tempoEstudando = parseInt(dados.tempo_medio_)
    const pessoasEnsinoSuperior=

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();

