# Gestor de Gastos

## Casos de Uso

### Autenticação
- Fazer login através do gmail
- Não pode ter acesso à aplicação sem que esteja autenticado
### Conta
- Criar nova conta utilizando o email
  - Se conta email já cadastrado, nao deve criar nova conta
  - Após a primeira vez do usuário no sistema, ele nao cria novas contas e sim novos Saldos Mensais.
- Apresentar os dados do saldo da conta quando dado um mês e ano especifico
  - Caso esse mês não tenha dados, deve apresentar um `default` vazio. 
- Criar Saldo Mensal quando dado um mes e ano especifico
  - Esse saldo vai ser com base nos Saldo dos Orçamentos planejados.
### Transações
- Criar transação informando dia/mes/ano
- Ver todas as transações de um determinado mes/ano
- Ver o saldo de entradas e saídas de um determinado mês/ano

### Orçamentos
- Criar um orçamento debaixo de um email
  - Deve confirmar se quer atualizar o saldo do mes atual ou somente para os seguintes
- Listar orçamentos do email
- Editar um orçamento do email
  - Deve confirmar se quer atualizar o saldo do mes atual ou somente para os seguintes
- Apagar um orçamento do email
  - Deve confirmar se quer atualizar o saldo do mes atual ou somente para os seguintes

## Endpoints

### Conta
- Apresentar os dados do saldo da conta dado mes/ano [x]
  - `GET /accounts/{email}/monthBudget?fullYear=2023&month=0`
  - Query: `{ fullYear, month }`
  - Response: `{ balance }`
- Criar saldo mensal dado mes/ano
  - `POST /accounts/{email}/monthBudget`
  - Body: `{ fullYear, month }`
  - Response: `{ balance }`

### Transações
- Criar transação informando dia/mes/ano [x]
  - `POST /transactions/{email}`
  - Body: `{ amountInCents, description?, categoryId, attachment?, createdAt }`
  - Response: `{ id }`
- Ver todas as transações de um determinado mes/ano [x]
  - `GET /transactions/{email}?fullYear=2023&month=0`
  - Query: `{ fullYear, month }`
  - Response: `Transaction[]`
- Ver o saldo de entradas e saídas de um determinado mês/ano [x]
  - `GET /transactions/{email}/balance?fullYear=2023&month=0`
  - Query: `{ fullYear, month }`
  - Response: `{ incomeBalance, outcomeBalance }`

### Orçamentos
- Criar um orçamento debaixo de um email
  - `POST /budgets/{email}`
  - Body: `{ categoryId, amountInCents }`
- Listar orçamentos do email
  - `GET /budgets/{email}`
  - Response: `Budget[]`
- Editar um orçamento do email
  - `POST /budgets/{email}`
  - Body: `{ categoryId, amountInCents }`
- Apagar um orçamento do email
  - `DELETE /budgets/{email}?id=myFakeId`
  - Query: `{ id }`
  - Response: `{ id }`


## Próximos Passos
- Cron job OK
- Permitir conta conjunta
  - Middleware para gestao de contas conjuntas OK
- Proteçao de rotas de apis OK
- Validaçoes (Zod/Yup) OK
- fix: falha segurança, dados do email sendo vazados no cron job OK
- Logout (Prioritario)
- Transaçoes do tipo recorrentes (planejar)