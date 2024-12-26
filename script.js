
// Função para enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Pegando os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    // Exibindo mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  
    // Limpar o formulário após envio
    document.getElementById('form-contato').reset();
  });
  