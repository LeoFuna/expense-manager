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
  
---

# Aprendizados
- Controller-Service-Repository Pattern.
- Github Actions.
- Controle de sinal utilizando fetch nativo.
- Propriedade CSS dvh.
- Página de fallback de loading.
- Dependabot para gestão de dependências.
- Cron Jobs.

## Instruções para acessar o projeto localmente:

1. Clone o repositório
  * `git clone git@github.com:LeoFuna/expense-manager.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd expense-manager`

2. Instale as dependências:
  * `npm install`

3. Crie um arquivo `.env.local` na raiz da aplicação e insira os dados baseando-se no modelo `.env.local.sample`

4. Inicie a aplicação:
  * `npm run dev`

---

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
