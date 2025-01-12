
  document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o comportamento padrão do formulário (recarregar a página)

    // Captura a mensagem do formulário
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica se a mensagem não está vazia
    if (message && name) {

       const encodedName = encodeURIComponent(name);

        // Codifica o texto da mensagem para ser utilizado na URL
      
        const encodedMessage = encodeURIComponent(message);

        // Número do WhatsApp (incluindo o código do país, sem espaços ou símbolos)
        const phoneNumber = '5596984009449';

        // Monta a URL para enviar a mensagem pelo WhatsApp
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, meu nome é ${encodedName}. ${encodedMessage}`;

       // Define o href do link invisível para a URL do WhatsApp
       const whatsappLink = document.getElementById('whatsapp-link');
       whatsappLink.href = whatsappURL;

       // Simula um clique no link invisível, abrindo o WhatsApp em uma nova aba
       whatsappLink.click();

       // Limpa o formulário automaticamente após o envio
        document.getElementById('whatsapp-form').reset();

    } else {
        alert("Por favor, digite uma mensagem!");
    }
});
  