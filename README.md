# Front_compJr

## 🚀 Visão Geral
Este projeto é um sistema web para gestão de funcionários, orçamentos e operações internas da empresa Comp Júnior. O sistema é desenvolvido em ReactJS, utiliza Vite para build e Material-UI para alguns componentes visuais.

---

## 📂 Estrutura de Pastas

- **src/**
  - **App.jsx**: Definição das rotas e páginas principais.
  - **main.jsx**: Ponto de entrada da aplicação.
  - **index.css**: Estilos globais.
  - **assets/**: Imagens, ícones e logos.
  - **components/**: Componentes reutilizáveis (inputs, tabelas, cards, navegação, etc).
  - **Pages/**: Cada subpasta representa uma tela/página do sistema:
    - **Tela_login/**: Tela de login do usuário.
    - **Tela_autenticacao/**: Autenticação por código enviado ao e-mail.
    - **Tela_esqueceu/**: Recuperação de senha.
    - **Tela_verificacao/**: Verificação de código (ex: redefinição de senha).
    - **Tela_redefinicao/**: Cadastro de nova senha.
    - **Tela_dashboard/**: Painel principal com cards de resumo, gráficos e tabelas.
    - **Tela_funcionarios/**: Listagem, filtro e busca de funcionários.
    - **Tela_novoFunc/**: Cadastro de novo funcionário.
    - **Tela_orcamento/**: Visualização de orçamentos, cards de resumo e histórico.
    - **Tela_novo_orcamento/**: Criação e envio de novo orçamento.
    - **Tela_erro/**: Tela de erro para rotas não implementadas.

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
- Node.js (recomendado v18 ou superior)
- npm (gerenciador de pacotes)

### Instalação
1. Clone o repositório ou baixe o projeto.
2. No terminal, acesse a pasta do projeto:
   ```powershell
   cd Front_compJr
   ```
3. Para instalar as dependências digite no terminal:
    ```powershell
    npm install
    ```
4. Em seguida, instale as bibliotecas do Material-UI:
    ```powershell
    npm install @mui/material @emotion/react @emotion/styled
    ```
5. Rode o projeto em modo desenvolvimento:
    ```powershell
    npm run dev
    ```
    > Certifique-se de estar na pasta `cd ./Front_compJr/src` ao executar este comando

6. Acesse o sistema em [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal).

---

## 📋 Descrição das telas

- **Tela_login**: Permite ao usuário acessar o sistema informando e-mail e senha.
- **Tela_autenticacao**: Solicita o código enviado por e-mail para autenticação em dois fatores.
- **Tela_esqueceu**: Permite solicitar redefinição de senha via e-mail.
- **Tela_verificacao**: Tela para digitar o código de verificação recebido .
- **Tela_redefinicao**: Cadastro de uma nova senha após verificação.
- **Tela_dashboard**: Exibe cards de resumo (funcionários, candidaturas, projetos, departamentos), gráficos e tabelas de comunicados e pagamentos.
- **Tela_funcionarios**: Lista todos os funcionários, permite busca, filtro e paginação.
- **Tela_novoFunc**: Formulário para cadastrar um novo funcionário, com campos de dados pessoais, setor, cargo e habilidades.
- **Tela_orcamento**: Mostra cards de resumo de orçamento, botão para criar novo orçamento e histórico de orçamentos em tabela.
- **Tela_novo_orcamento**: Formulário para criar e enviar um novo orçamento, com campos de número, descrição, valor, custos, cliente e responsável.
- **Tela_erro**: Exibe mensagem de erro para rotas não encontradas ou páginas em construção.

---

## 📝 Observações
- O projeto já está preparado para responsividade.
- Alguns dados são simulados para fins de protótipo.
- O projeto usa alguns componentes da Biblioteca Material-UI.


---

## 📞 Contato
Dúvidas ou sugestões? Entre em contato lanamiranda112@gmail.com
