document.addEventListener('DOMContentLoaded', function() {

    function inicializarValidacaoFormulario() {
        const form = document.getElementById("form-cadastro");
        if (!form) return;

        const mensagemSucesso = document.getElementById("mensagem-sucesso");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            if (form.checkValidity()) {
                mensagemSucesso.innerHTML = "<h3>Cadastro enviado com sucesso!</h3><p>Obrigado por se juntar à nossa causa. Entraremos em contato em breve.</p>";
                mensagemSucesso.style.display = "block";
                form.reset();
            } else {
                form.reportValidity();
            }
        });
    }

    function inicializarTemplatesProjetos() {
        
        const dadosProjetos = [
            {
                id: "saude",
                titulo: "Projeto Saúde Para Todos",
                imagem: "img/projeto-saude.jpg",
                alt: "Um veterinário examina um gato laranja",
                descricao: "Este projeto oferece consulta veterinária para animais de rua. Nosso objetivo é garantir qualidade de vida a animais abandonados.",
                badge: { texto: "Urgente", classe: "badge--perigo" }
            },
            {
                id: "carinho",
                titulo: "Carinho Comunitário",
                imagem: "img/projeto-carinho.jpg",
                alt: "Voluntários fazendo carinho em cão abandonado",
                descricao: "Semanalmente, nossos voluntários visitam a ONG para brincar e fazer carinho em pets que foram resgatados das ruas.",
                badge: null 
            },
            {
                id: "feira-adocao",
                titulo: "Feira de Adoção Mensal",
                imagem: "img/projeto-adocao.jpg", 
                alt: "Pessoas brincando com cães em uma feira de adoção",
                descricao: "Todo primeiro sábado do mês, realizamos uma grande feira de adoção para encontrar um novo lar para nossos animais.",
                badge: { texto: "Novo", classe: "badge--primario" }
            },
            {
                id: "capacitacao",
                titulo: "Capacitação de Voluntários",
                imagem: "img/projeto-capacitacao.jpg", 
                alt: "Voluntários assistindo a uma palestra",
                descricao: "Preparamos e capacitamos novos voluntários para lidar com os animais resgatados com segurança e carinho.",
                badge: null
            }
        ];

        const containerProjetos = document.getElementById("container-projetos");
        if (!containerProjetos) return;

        containerProjetos.innerHTML = "";

        dadosProjetos.forEach(function(projeto) {
            
            let badgeHTML = "";
            if (projeto.badge) {
                badgeHTML = `<span class="badge ${projeto.badge.classe}">${projeto.badge.texto}</span>`;
            }

            const cardHTML = `
                <article class="col-6 card">
                    <div class="card__imagem-container">
                        <img src="${projeto.imagem}" alt="${projeto.alt}">
                    </div>
                    <div class="card__conteudo">
                        <h3 id="${projeto.id}">${projeto.titulo}</h3>
                        ${badgeHTML}
                        <p style="margin-top: var(--espaco-sm);">${projeto.descricao}</p>
                    </div>
                </article>
            `;
            containerProjetos.innerHTML += cardHTML;
        });
    }

    function inicializarRoteamentoSPA() {
        
        const mainContainer = document.getElementById('page-content');
        if (!mainContainer) return;

        document.querySelectorAll('.menu-principal a, .submenu a, h1 a').forEach(link => {
            
            link.addEventListener('click', function(event) {
                event.preventDefault(); 
                const href = link.href;

                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle) {
                    menuToggle.checked = false;
                }
                
                carregarPagina(href);
            });
        });

        function carregarPagina(url) {
            fetch(url)
                .then(response => response.text())
                .then(htmlString => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlString, 'text/html');
                    const novoConteudo = doc.getElementById('page-content').innerHTML;
                    
                    mainContainer.innerHTML = novoConteudo;
                    history.pushState({}, '', url);

                    inicializarValidacaoFormulario();
                    inicializarTemplatesProjetos();
                })
                .catch(err => {
                    console.error('Falha ao carregar página: ', err);
                    window.location.href = url;
                });
        }
    }

    inicializarValidacaoFormulario();
    inicializarTemplatesProjetos();
    inicializarRoteamentoSPA();

});