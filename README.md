# 🪙 Mundo Digital Wallet (Digital-World-Wallet)

**Mundo Digital Wallet** é a carteira cripto nativa do ecossistema **Mundo Digital**, desenvolvida com foco em segurança, usabilidade e integração com tecnologias descentralizadas (DeFi, NFTs e tokenização de ativos). Inspirada nas melhores carteiras do mercado, nossa solução se destaca pela sua arquitetura moderna e escalável.

---

## ✨ Tecnologias Utilizadas

Este projeto foi construído utilizando o que há de mais moderno no ecossistema de desenvolvimento mobile com React Native:

*   **React Native:** Framework para criação de aplicativos nativos com JavaScript e React.
*   **Expo:** Plataforma e conjunto de ferramentas que simplificam o desenvolvimento, o build e a publicação de aplicações React Native.
*   **Expo Router:** Sistema de roteamento baseado em arquivos que torna a navegação entre telas mais simples e organizada.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e a manutenibilidade do código.

---

## 🚀 Arquitetura do Projeto

A estrutura do projeto foi refatorada para seguir o padrão **Feature-Based Architecture**, que promove escalabilidade, organização e manutenibilidade. A organização dos diretórios ficou assim:

```
/digital-world-wallet
├── src/
│   ├── app/           # Configuração de rotas e layouts do Expo Router
│   ├── assets/        # Imagens, fontes e outros arquivos estáticos
│   ├── components/    # Componentes de UI reutilizáveis (botões, inputs, etc.)
│   ├── constants/     # Constantes globais (cores, temas)
│   ├── features/      # O coração da aplicação, organizado por funcionalidades
│   │   ├── home/      # Funcionalidade da tela inicial
│   │   ├── explore/   # Funcionalidade da tela de exploração
│   │   └── ...        # Outras funcionalidades (ex: wallet, auth)
│   └── hooks/         # Hooks customizados e compartilhados
├── babel.config.js    # Configuração do Babel
├── package.json       # Dependências e scripts do projeto
└── tsconfig.json      # Configuração do TypeScript
```

Este modelo nos permite trabalhar em diferentes funcionalidades de forma isolada, facilitando a colaboração e o crescimento do aplicativo.

---

## 🏁 Como Começar

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/digital-world-wallet.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o projeto:**
    ```bash
    npm start
    ```
    Isso iniciará o Metro Bundler do Expo. Você poderá então abrir o aplicativo em um emulador iOS/Android ou escanear o QR code com o aplicativo Expo Go no seu celular.

---

## 🔮 Próximos Passos e Melhorias

Para garantir que a **Mundo Digital Wallet** se torne uma aplicação robusta e confiável, os próximos passos planejados são:

*   **Gerenciamento de Estado:** À medida que a aplicação crescer, será necessário um gerenciamento de estado mais sofisticado. Planejamos adotar uma biblioteca como **Zustand** (para uma solução leve) ou **Redux Toolkit** (para um controle mais robusto).

*   **Sistema de Design (Design System):** Criar um sistema de design coeso, com uma paleta de cores definida, uma escala de tipografia e componentes de UI reutilizáveis para garantir consistência visual em todo o aplicativo.

*   **Aumentar a Cobertura de Testes:** Utilizando o **Jest**, que já está configurado, vamos criar uma suíte de testes abrangente para garantir a confiabilidade de todas as funcionalidades, especialmente as operações críticas da carteira.

*   **Experiência do Usuário (UX):** Focar em fornecer feedbacks claros para todas as ações do usuário (carregamentos, sucesso, erro) e garantir que o aplicativo seja acessível a todos, seguindo as melhores práticas de acessibilidade (A11y).
