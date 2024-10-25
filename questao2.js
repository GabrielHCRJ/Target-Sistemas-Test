function verificarLetraA(str) {
    
    const letra = 'a';
    const strLower = str.toLowerCase();
        
    const quantidade = strLower.split(letra).length - 1;
  
    if (quantidade > 0) {
      return `A letra 'a' aparece ${quantidade} vez(es) na string.`;
    } else {
      return "A letra 'a' não está presente na string.";
    }
  }
  
  const texto = "Target Sistemas: Uma empresa de tecnologia e serviços que vai além de criar softwares de gestão ";
  console.log(verificarLetraA(texto));
  