    let packages =  [
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


let newArray = []

//ARRAY 2 ESTÁ EM TRINCAS
let newArray2 = []

//ARRAY 3 ESTÁ EM TRINCAS COM ESPECIFICAÇÕES
let newArray3 = []

let array_cod_invalidos = [];
    
function splitCode() {
  console.log(packages)
  packages.map(item => ( newArray.push(item.code.replace(/(\d{3})+(\d{3})+(\d{3})+(\d{3})+(\d{3})/, "$1 $2 $3 $4 $5"))))
  for(let i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].split(' ')
    newArray2.push(newArray[i])           
  }
  
  for(let i = 0; i < newArray2.length; i++){
    let codes = newArray2[i];

    let regiao_origem = buscaRegiaoByCod(codes[0]);
    let regiao_destino = buscaRegiaoByCod(codes[1]);
    
    if(regiao_origem == false || regiao_destino == false) {
      array_cod_invalidos.push(codes);
      continue;
    }
  
    let obj = {
      cod_origem: codes[0],
      regiao_origem: regiao_origem,
      cod_destino: codes[1],
      regiao_destino: regiao_destino,
      cod_loggi: codes[2],
      cod_vendedor: codes[3],
      tipo_produto: codes[4]
    };
    
    newArray3.push(obj);
    console.log(newArray3)
  }

  console.log(newArray3)

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
        
splitCode()