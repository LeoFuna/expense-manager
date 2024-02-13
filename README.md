# Bem vindo ao Gestor de Gastos!

Olá seja bem vindo(a) ao meu projeto Gestor de Gastos, o projeto é um sistema web paga gestão básica de gastos mês a mês.
A idéia desse projeto veio a partir de uma dor minha, onde eu tenho diversas fontes de gastos (dinheiro, transferências, cartão de crédito), e era complicado gerenciar o meu gasto total no mês devido a quantidade de diferentes meios de saída.
No fim, o intuito é realmente saber exatamente quanto eu posso ainda gastar no mês em questão.

---

# Sumário

- [Versões Necessárias](#versões-necessárias)
- [Ferramentas](#ferramentas)
- [Aprendizados](#aprendizados)
- [Instruções para acessar o projeto localmente](#instruções-para-acessar-o-projeto-localmente)
- [Estrutura do projeto](#estrutura-do-projeto)
- [A aplicação](#a-aplicação)

# Versões Necessárias
- Node 18.12

# Ferramentas

- Next JS.
- Firebase
  - Firebase Client
  - Firebase Admin
  - Firestore
- Next Auth
- JWT
- Tailwind CSS
- React Hook Form
- Typescript
- Zod
- Jest
  
---

# Aprendizados
- Controller-Service-Repository Pattern.
- Github Actions.
- Controle de sinal utilizando fetch nativo.
- Propriedade CSS dvh.
- Página de fallback de loading.
- Dependabot para gestão de dependências.
- Cron Jobs.
- Testes unitário e e2e com Jest

## Instruções para acessar o projeto localmente:

1. Clone o repositório
```bash
git clone git@github.com:LeoFuna/expense-manager.git
```
2. Entre na pasta do repositório que você acabou de clonar:
```bash
cd expense-manager
```
3. Instale as dependências:
```bash
npm install
```
4. Crie um arquivo `.env.local` na raiz da aplicação e insira os dados baseando-se no modelo `.env.local.sample`
   
5. Inicie a aplicação:
```bash
npm run dev
```

---

## Estrutura do projeto

```bash
src/
  app/                # Rotas das páginas e api
    api/              # Rotas de api
    layout.tsx        # Layout raiz da aplicação
    page.tsx          # Página Home
  components/         # Componentes
    auth/             # Componentes de autenticação
    core/             # Componentes compartilhados
    home/             # Componentes da página principal
    profile/          # Componentes da perfil
    transactions/     # Componentes das transações
  contexts/           # Contextos da aplicação
  controllers/        # Classes de Controladores das rotas de api
  db/
    firebase.js       # Conexão com o Firebase e seus serviços
    firebase-admin.ts # Conexão com o firebase em modo admin
  factories/          # Fábricas para as entidades
  hooks/              # Hooks da aplicação
  interfaces/         # Interfaces gerais da aplicação
  repositories/       # Classes de repositórios
  services/           # Classes de Serviços usados pelas rotas de api
  utils/              # Funções úteis para a aplicação
    convertes/        # Conversores de operações executadas no firestorage
  middleware.js       # Middleware para bloqueio de rotas sem autenticação
```

# A aplicação

Ela pode ser vista em: [Acessar aplicação](https://expense-manager-pink.vercel.app/)

#### Tela de Login
![image](https://github.com/LeoFuna/expense-manager/assets/80538553/440984ca-6142-43a1-b2b5-dfa3903a845d)

#### Home
![image](https://github.com/LeoFuna/expense-manager/assets/80538553/fb984912-1b21-4efb-a33a-27aa5011d3e9)

#### Menu para Nova Transação
![image](https://github.com/LeoFuna/expense-manager/assets/80538553/c65419f7-c535-4366-9a8a-94038f013c6c)

#### Nova Transação
![image](https://github.com/LeoFuna/expense-manager/assets/80538553/99fa7af6-d7ce-44e9-9f06-fcac205b132a)
