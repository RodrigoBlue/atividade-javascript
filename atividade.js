const usuario = {
    nome: prompt("Qual o seu nome?"),
    idade: parseInt(prompt("Qual a sua idade?")),
    hobbies: [
      prompt("Qual o seu primeiro hobby?"),
      prompt("Qual o seu segundo hobby?"),
      prompt("Qual o seu terceiro hobby?")
    ]
  };
  
  if (usuario.idade < 18) {
    console.log("Menor de idade");
  } else {
    console.log("Maior de idade");
  }
  
  console.log("Hobbies:");
  usuario.hobbies.forEach(hobby => {
    console.log(`- ${hobby}`);
  });
  
  function exibirMensagem(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
  }
  
  console.log(exibirMensagem(usuario.nome, usuario.idade));
