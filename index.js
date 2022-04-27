    let pacotes =  [
        {"code":  "288355555123888"},
         
        {"code":  "335333555584333"},
         
        {"code":  "223343555124001"},
         
        {"code":  "002111555874555"},        
         
        {"code":  "111188555654777"},        
         
        {"code":  "111333555123333"},
         
        {"code":  "432055555123888"},        
         
        {"code":  "079333555584333"},
                
        {"code":  "155333555124001"},
                
        {"code":  "333188555584333"},
                                
        {"code":  "555288555123001"},
                                
        {"code":  "111388555123555"},
        
        {"code":  "288000555367333"},
        
        {"code":  "066311555874001"},
        
        {"code":  "110333555123555"},
        
        {"code":  "333488555584333"},
                
        {"code":  "455448555123001"},
                
        {"code":  "022388555123555"},
        
        { "code":  "432044555845333"},
                
        { "code":  "034311555874001"}                                                   
        ]


let  pacotesTrincas = []

//ARRAY 2 ESTÁ EM TRINCAS
let pacotesTrincasSeparados = []

//ARRAY 3 ESTÁ EM TRINCAS COM ESPECIFICAÇÕES
let pacotesProntos = []

let array_cod_invalidos = [];

let sudeste = [];
let sul = [];
let centro_oeste = [];
let nordeste = [];
let norte = [];
    
function splitCode() {
  pacotes.map(item => ( pacotesTrincas.push(item.code.replace(/(\d{3})+(\d{3})+(\d{3})+(\d{3})+(\d{3})/, "$1 $2 $3 $4 $5"))))
  for(let i = 0; i < pacotesTrincas.length; i++) {
    pacotesTrincas[i] = pacotesTrincas[i].split(' ')
    pacotesTrincasSeparados.push(pacotesTrincas[i])           
  }
  
  for(let i = 0; i < pacotesTrincasSeparados.length; i++){
    let codes = pacotesTrincasSeparados[i];

    let regiao_origem = buscaRegiaoByCod(codes[0]);
    let regiao_destino = buscaRegiaoByCod(codes[1]);
    let tipo_produto = typeProductByCod(codes[4]);
    let cod_vendedor = codes[3]

    if(tipo_produto == false) {
      array_cod_invalidos.push({cod: pacotesTrincas[i], status: 'inválido'});
      continue;
    }
    
    if(regiao_origem == false || regiao_destino == false) {
      array_cod_invalidos.push({cod: pacotesTrincas[i], status: 'inválido'});
      continue;
    }

    if(cod_vendedor == 367) {
      return false;
    }
  
    if(tipo_produto == 1 && regiao_origem >= 201 && regiao_origem <= 299) {
      return false;
    }

  
    let obj = {
      cod_origem: codes[0],
      regiao_origem: regiao_origem,
      cod_destino: codes[1],
      regiao_destino: regiao_destino,
      cod_loggi: codes[2],
      cod_vendedor: codes[3],
      cod_tipo_produto: codes[4],
      tipo_produto: tipo_produto,
      status: 'válido'
    };
    
    pacotesProntos.push(obj);
  }

  let array = pacotesProntos;
  for(let i = 0; i < array.length; i++){
    if(array[i].cod_destino >= 1 && array[i].cod_destino <= 99){
      sudeste.push(array[i]);
      continue;
    } 
    if (array[i].cod_destino >= 100 && array[i].cod_destino <= 199){
      sul.push(array[i]);
      continue;
    } 
    if (array[i].cod_destino >= 201 && array[i].cod_destino <= 299) {
      centro_oeste.push(array[i]);
      continue;
    } 
    if (array[i].cod_destino >= 300 && array[i].cod_destino <= 399) {
      nordeste.push(array[i]);
      continue;
    } 
    if (array[i].cod_destino >= 400 && array[i].cod_destino <= 499) {
      norte.push(array[i]);
      continue;
    } 
  }

  //return pacotesProntos
}  



function typeProductByCod(cod) {
  cod = parseInt(cod);

  if(cod == 1) {
  return "Jóias";
}
if(cod == 111){
return "Livros";
}
if(cod == 333){
return "Eletrônicos";
}
if(cod == 555){
return "Bebidas";
}
if(cod == 888){
return "Brinquedos" ;
}
return false;
}

function buscaRegiaoByCod(cod){
  cod = parseInt(cod);

  if(cod >= 1 && cod <= 99){
    return `Cidade ${cod}, Região Sudeste`;
  } 
  if (cod >= 100 && cod <= 199){
    return `Cidade ${cod}, Região Sul`;
  } 
  if (cod >= 201 && cod <= 299) {
    return `Cidade ${cod}, Região Centro-oeste`;
  } 
  if (cod >= 300 && cod <= 399) {
    return `Cidade ${cod}, Região Nordeste`;
  } 
  if (cod >= 400 && cod <= 499) {
    return `Cidade ${cod}, Região Norte`;
  } 
  return false;
}

function somaPorRegiaoDestino(){
  let retorno = {
    sudeste: sudeste.length,
    sul: sul.length,
    centro_oeste: centro_oeste.length,
    nordeste: nordeste.length,
    norte: norte.length
  }
  exibeResultado(retorno);
  return retorno
}

function localizarPorTipos(array){
  
  let joias = [];
  let livros = [];
  let brinquedos = [];
  let eletronicos = [];
  let bebidas = [];

  for(let i = 0; i < array.length; i++){
    let cod = parseInt(array[i].cod_tipo_produto);
    if(cod == 1){
      joias.push(array[i]);
      continue;
    } 
    if (cod == 111){
      livros.push(array[i]);
      continue;
    } 
    if (cod == 888) {
      brinquedos.push(array[i]);
      continue;
    } 
    if (cod == 333) {
      eletronicos.push(array[i]);
      continue;
    } 
    if (cod == 555) {
      bebidas.push(array[i]);
      continue;
    } 
  }
  let retorno = {
    joias: joias,
    livros:livros,
    brinquedos: brinquedos,
    eletronicos:eletronicos ,
    bebidas: bebidas
  }

  return retorno
}

function buscaPacotesSulBrinquedos(){
  let array_sul = sul;
  let array_separado = localizarPorTipos(array_sul);
  let array_brinquedos = array_separado.brinquedos;
  
  let retorno;
  if(array_brinquedos.length < 1) {
    retorno = {msg: 'Nenhum pacote encontrado'};
  } else {
    retorno = array_brinquedos;
  }
  exibeResultado(retorno);
}

function listaPorDestinoTipo(){
  let retorno = {
    sudeste,
    sul,
    centro_oeste,
    nordeste,
    norte
  }

  retorno.sudeste = localizarPorTipos(sudeste);
  retorno.sul = localizarPorTipos(sul);
  retorno.centro_oeste = localizarPorTipos(centro_oeste);
  retorno.nordeste = localizarPorTipos(nordeste);
  retorno.norte = localizarPorTipos(norte);

  exibeResultado(retorno);
}

function listaPorRegiaoDestino(){
  let retorno = {
    sudeste: sudeste,
    sul: sul,
    centro_oeste: centro_oeste,
    nordeste: nordeste,
    norte: norte
  }
  
  exibeResultado(retorno);
}

function separaPorVendedor(){
  let array = pacotesProntos;
  let arraySet = new Set();
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    arraySet.add(element.cod_vendedor);
  }

  let retorno = {}
  for (let pacote of arraySet){
    retorno[pacote] = 0
  }

  for(let i = 0; i < array.length; i++){
    let pacote = array[i];
    let cod = pacote.cod_vendedor;
    retorno[cod] = retorno[cod] + 1
  }

  exibeResultado(retorno);
}

function pacotesDestinoCentroOesteNorte(){
  let array_centro_oeste = centro_oeste;
  let array_norte = norte;
  let retorno = array_centro_oeste.concat(array_norte);

  exibeResultado(retorno);
}

function pacotesDestinoCentroOesteNordesteNorte(){
  let array_centro_oeste = centro_oeste;
  let array_norte = norte;
  let array_nordeste = nordeste;

  array_centro_oeste.sort(function compareFn(a, b) { 
    if (a.cod_tipo_produto < b.cod_tipo_produto) {
      return -1;
    }
    if (a.cod_tipo_produto > b.cod_tipo_produto) {
      return 1;
    }

    return 0;
  });

  array_norte.sort(function compareFn(a, b) { 
    if (a.cod_tipo_produto < b.cod_tipo_produto) {
      return -1;
    }
    if (a.cod_tipo_produto > b.cod_tipo_produto) {
      return 1;
    }

    return 0;
  });

  array_nordeste.sort(function compareFn(a, b) { 
    if (a.cod_tipo_produto < b.cod_tipo_produto) {
      return -1;
    }
    if (a.cod_tipo_produto > b.cod_tipo_produto) {
      return 1;
    }

    return 0;
  });

  let pacotesTrajeto = array_centro_oeste.concat(array_nordeste);
  pacotesTrajeto = pacotesTrajeto.concat(array_norte);
  exibeResultado(pacotesTrajeto);
}

function listarInvalidos(){
  exibeResultado(array_cod_invalidos);
}

function listaPacotesVálidosInválidos(){
  let array_concat = pacotesProntos.concat(array_cod_invalidos);
  exibeResultado(array_concat);
}

function exibeResultado(dados){
  console.log(dados);
  document.querySelector('.json_resultado').innerHTML = JSON.stringify(dados);
}

splitCode()