// Passo 1: Captura de Dados
const usuario = {
    nome: prompt("Qual o seu nome?"),
    idade: parseInt(prompt("Qual a sua idade?")),
    hobbies: [
      prompt("Qual o seu primeiro hobby?"),
      prompt("Qual o seu segundo hobby?"),
      prompt("Qual o seu terceiro hobby?")
    ]
  };
  
  // Passo 2: Estrutura Condicional
  if (usuario.idade < 18) {
    console.log("Menor de idade");
  } else {
    console.log("Maior de idade");
  }
  
  // Passo 3: Laço de Repetição
  console.log("Hobbies:");
  usuario.hobbies.forEach(hobby => {
    console.log(`- ${hobby}`);
  });
  
  // Passo 4: Função Personalizada
  function exibirMensagem(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
  }
  
  console.log(exibirMensagem(usuario.nome, usuario.idade));