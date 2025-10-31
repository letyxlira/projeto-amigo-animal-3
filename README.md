# 🎯 Projeto ONG - Amigo Animal (Entrega III)

<p align="center">
  <img src="https://img.shields.io/badge/status-concluído-green" alt="Status do Projeto: Concluído">
  <img src="https://img.shields.io/badge/licença-MIT-blue" alt="Licença MIT">
</p>

> Este projeto foi uma atividade desenvolvida com foco total no aprendizado e na aplicação prática dos conceitos de **Programação para Interfaces Web**. O objetivo principal foi transformar o site estático (construído com HTML/CSS) em uma **aplicação web dinâmica**, praticando a **manipulação do DOM**, **eventos** e a criação de uma **SPA (Single Page Application) básica**.

<br>

---

## ✨ Funcionalidades Principais

* **Sistema de SPA Básico:** Navegação que carrega o conteúdo das páginas (Início, Projetos, Participe) via `fetch` sem nunca recarregar o site.
* **Templates Dinâmicos (JS):** Os cards da página "Projetos" são gerados 100% via JavaScript a partir de um *array* de dados.
* **Validação de Formulário (JS):** Verificação de consistência de dados que impede o envio de formulários inválidos e utiliza o `reportValidity()` para avisar o usuário.
* **Código Modular (JS):** O script é organizado em funções (`inicializarValidacaoFormulario`, `inicializarTemplatesProjetos`, `inicializarRoteamentoSPA`) e inicializado via `DOMContentLoaded`.

---

## 🛠️ Tecnologias Utilizadas

* **Front-End:** HTML5, CSS3, JavaScript (ES6+)
* **Outras Ferramentas:** Git, VS Code

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para conseguir rodar o projeto localmente.

### Pré-requisitos

* Um navegador web moderno (Chrome, Firefox, Opera).
* **Um servidor local (Obrigatório).**

### Instalação e Execução

Este projeto **não funciona** apenas abrindo o `index.html` (protocolo `file://`). Como ele usa a `fetch()` API para o roteamento SPA, ele precisa ser servido por um servidor web (protocolo `http://`) devido à política de segurança (CORS) dos navegadores.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/letyxlira/projeto-amigo-3.git
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd projeto-amigo-3
    ```

3.  Inicie um servidor local. A forma mais fácil é:
    * **Opção 1 (VS Code):** Instale a extensão "Live Server" e clique em "Go Live" no canto inferior direito.
    * **Opção 2 (Python):** Se você tem Python instalado, rode `python -m http.server` na pasta e acesse `http://localhost:8000` no seu navegador.

---

## 👨‍💻 Autor

Desenvolvido por **Letycia L. Barbosa**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/letycia-lira-barbosa)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/letyxlira)
