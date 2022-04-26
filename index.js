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
    
     function splitCode() {
       console.log(packages)
       packages.map(item => ( newArray.push(item.code.replace(/(\d{3})+(\d{3})+(\d{3})+(\d{3})+(\d{3})/, "$1 $2 $3 $4 $5"))))
       for(let i = 0; i < newArray.length; i++) {
          newArray[i] = newArray[i].split(' ')
          newArray2.push(newArray[i])           
       }
       
       newArray2.forEach(codes => {
	
        let regiao_origem = buscaRegiaoByCod(codes[0]);
        let regiao_destino = buscaRegiaoByCod(codes[1]);
        
        if(!regiao_origem || !regiao_destino) return;
      
        let obj = {
          cod_origem: codes[0],
          regiao_origem: regiao_origem,
          cod_destino: codes[1],
          regiao_destino: regiao_destino,
          cod_loggi: codes[2],
          cod_vendedor: codes[3],
          tipo_produto: codes[4]
        };
        
        newArray3.push(obj)

      })
      
      
      console.log(newArray3)

    }  

    function buscaRegiaoByCod(cod){
      cod = parseInt(cod);
      
           if(cod.regiao_origem >= 1 && cod.regiao_origem <= 99){
              return `Cidade ${cod.regiao_origem}, Região Sudeste`;
           } 
           if (cod.regiao_origem >= 100 && cod.regiao_origem <= 199){
             return `Cidade ${cod.regiao_origem}, Região Sul`;
           } 
           if (cod.regiao_origem >= 201 && cod.regiao_origem <= 299) {
             return `Cidade ${cod.regiao_origem}, Região Centro-oeste`;
           } 
           if (cod.regiao_origem >= 300 && cod.regiao_origem <= 399) {
             return `Cidade ${cod.regiao_origem}, Região Nordeste`;
           } 
           if (cod.regiao_origem >= 400 && cod.regiao_origem <= 499) {
             return `Cidade ${cod.regiao_origem}, Região Norte`;
           } 
           return false;
           
        }
        
        splitCode()