// Função para definir o link do WhatsApp em todos os botões "Assine Já!" e "Assine Agora"
function setWhatsAppLinks() {
    // URL do WhatsApp
    const whatsappURL = "https://api.whatsapp.com/send?phone=5511977136623&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20planos.";

    // Seleciona todos os botões "Assine Já!" e "Assine Agora"
    const assineJaButtons = document.querySelectorAll('.assine-agora');
    const elementorButtons = document.querySelectorAll('.elementor-button');

    // Define o link do WhatsApp para todos os botões "Assine Já!"
    assineJaButtons.forEach(button => {
        button.href = whatsappURL;
    });

    // Define o link do WhatsApp para todos os botões "Assine Agora"
    elementorButtons.forEach(button => {
        button.href = whatsappURL;
    });
}

// Executa a função quando o documento estiver completamente carregado
document.addEventListener('DOMContentLoaded', setWhatsAppLinks);

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o link da Central do Assinante
    const centralAssinanteLink = document.querySelector('a[href="https://thinternet.sgp.net.br/accounts/central/login"]');

    // Adiciona um evento de clique ao link
    centralAssinanteLink.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.open('https://thinternet.sgp.net.br/accounts/central/login', '_blank'); // Abre o link em uma nova aba
    });
});