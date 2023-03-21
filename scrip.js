async function buscaEndereco(cep){
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/{cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro)
    }
    
}

/* CÓDIGO PRO CASO DE SER NECESSÁRIO FAZER VÁRIAS REQUISIÇÕES AO MESMO TEMPO.
let ceps = ['01001000','01001002'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(cep));

Promise.all(conjuntoCeps).then(respostas => console.log(respostas));
 */

