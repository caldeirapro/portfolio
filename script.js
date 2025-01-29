
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

// Adiciona o evento de rolagem suave para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de rolagem do navegador
    
    const targetId = this.getAttribute('href').substring(1); // Pega o id da âncora
    const targetElement = document.getElementById(targetId);

    // Rola até o elemento de forma suave
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Função para verificar se o elemento está visível na tela
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Função para adicionar a classe 'visible' quando o elemento estiver visível
function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    // Se a seção estiver visível na tela, adicione a classe 'visible'
    if (isElementInView(section)) {
      section.classList.add('visible');  // Ativa a animação
      section.classList.add('fade-in');  // Pode usar 'slide-in' também se preferir
    }
  });
}

// Chama a função na rolagem
window.addEventListener('scroll', revealOnScroll);

// Também executa a função na carga inicial da página (caso já esteja visível)
document.addEventListener('DOMContentLoaded', revealOnScroll);

  