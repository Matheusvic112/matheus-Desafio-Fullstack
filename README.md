<h2 align="center" style='font-family: sans-serif'>
	WebAgenda API | API REST (Back-end)
</h2>


<h3>Iniciando o projeto</h3>


<p align = "center">
Para instalar as dependências, utilize o seguinte comando no prompt de comando:
</p>

```json
$ yarn

```

<p align = "center">
Passo 2 - Rodar uma migração :gear:
</p>
Após instalar as dependências, você pode rodar uma migração utilizando o seguinte comando no prompt de comando:

```json
$ yarn migration:run
```

<p align = "center">
Passo 3 - Iniciar o servidor de desenvolvimento :rocket:
</p>

```json
$ yarn dev

```


<h3>Agora você tem uma aplicação em pleno funcionamento e esperando para ser rodada. 🚀<h3>

🔥 Server running 🔥

</br>

<p align = "center">
Este é o backend da aplicação WebAgenda API para gerenciamento de clientes e contatos.
</p>


<li>A API  disponível em https://fullstack-api-ncj2.onrender.com</li>


<h2 align ='center'>Clientes (Endpoints)</h2>

## **Rotas Sem Autenticação**

<li style='font-size: 20px'>Criação de um Cliente:</li>

<br/>

Observação: O campo "telefone" precisa ter 11 digitos

`POST /client - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
    "nome_completo": "Msqs Silva",
    "email": "testes@mail.com",
    "telefone": "11 9832915597",
}
```

Caso dê tudo certo, a resposta será assim:

`POST /client - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "711a43eb-d36a-4f70-81d4-9245d688fab7",
	"nome_completo": "Msqs Silva",
	"email": "testes@mail.com",
	"telefone": "11 9832915597",
	"createdAt": "2023-03-24T01:51:28.923Z",
	"contatos": []
},

```

<br/>

<li style='font-size: 20px'>Login do Cliente</li>

<br/>

`POST /client/login - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
    "email": "testes@mail.com",
    "password": "1234567"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /client/login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMWE0M2ViLWQzNmEtNGY3MC04MWQ0LTkyNDVkNjg4ZmFiNyIsImlhdCI6MTY4MDEyOTAwNSwiZXhwIjoxNjgwMjE1NDA1LCJzdWIiOiI3MTFhNDNlYi1kMzZhLTRmNzAtODFkNC05MjQ1ZDY4OGZhYjcifQ.pu5TsJwCRwaFLqsrcsVdbBw0529OQBcd6aKr2-qBgdM"
}
```

Caso dê um erro irá retornar o seguinte erro:

```json
{
    "message": "wrong email"

}

{
    "message": "wrong password"
}
```

## **Rotas Com Autenticação**

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}


> Caso você tente acessar os endpoints sem um token válido receberá o seguinte erro

<br/>

`(Exemplo) POST /contact/ - 401 Sem Autorização`

```json
{
    "message": "Invalid token"
}
```

<br/>

> Caso seja informado um id inválido ou diferente do id do usuário logado irá retornar:

```json
{
    "message": "Token required"
}
```

## <br/>

<li style='font-size: 20px'>Podemos acessar um cliente específico utilizando o endpoint:</li>

<br/>

`GET /client/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
	{
	"id": "711a43eb-d36a-4f70-81d4-9245d688fab7",
	"nome_completo": "Msqs Silva",
	"email": "testes@mail.com",
	"telefone": "11 9832915597",
	"createdAt": "2023-03-24T01:51:28.923Z",
	"contatos": []
	},
```

<li style='font-size: 20px'>Atualização de um cliente</li>

<br/>

`PATCH /client/:id - FORMATO DA REQUISIÇÃO`

```json
{
    "email": "teste13@gmail.com"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /client/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"nome_completo": "Msqs Silva",
	"email": "testes13@mail.com",
	"telefone": "11 9832915597",
	
}
```

<li style='font-size: 20px'>Podemos deletar um cliente específico utilizando o endpoint:</li>

<br/>

`DELETE /client/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```

<br/>

<li style='font-size: 20px'>Outra Possível Mensagem de Erro:</li>

<br/>

```json
{
    "message": "Client Not Found"
}
```

<h2 align ='center'>Contatos (Endpoints)</h2>

<li style='font-size: 20px'>Criando um contato a partir do cliente logado:</li>

<br/>

`POST /contact - FORMATO DA REQUISIÇÃO`

```json
{
    "nome_completo": "teste Silva",
    "email": "testandoSilva@mail.com",
    "telefone": "11 983191199"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /contact - FORMATO DA RESPOSTA - STATUS 201`

```json

{
	"id": "e4e3b1a3-5e77-464c-8879-bb666b9164c6",
	"nome_completo": "teste Silva",
	"email": "testandoSilva@mail.com",
	"telefone": "11 9831915197",
	"createdAt": "2023-03-29T22:35:01.883Z",
	"updatedAt": "2023-03-29T22:35:01.883Z",
	"cliente": {
		"id": "711a43eb-d36a-4f70-81d4-9245d688fab7",
		"nome_completo": "Msqs Silva",
		"email": "testes@mail.com",
		"telefone": "11 9832915597",
		"createdAt": "2023-03-24T01:51:28.923Z",
		"updatedAt": "2023-03-29T22:34:09.952Z"
	}
},


```

<li style='font-size: 20px'>Acessando um contato</li>

<br/>

`GET /contact/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  {
	"id": "e4e3b1a3-5e77-464c-8879-bb666b9164c6",
	"nome_completo": "teste Silva",
	"email": "testandoSilva@mail.com",
	"telefone": "11 9831915197",
	"createdAt": "2023-03-29T22:35:01.883Z",
	"updatedAt": "2023-03-29T22:35:01.883Z"

    }
}
```

<li style='font-size: 20px'>Atualização de um cliente</li>

<br/>

`PATCH /contact/:id - FORMATO DA REQUISIÇÃO`

```json
{
	"nome_completo":"testes Silva",
	"email":"teste33@mail.com",
	"telefone":"11 9831915197"
	
}
```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`PATCH /contacts/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "a4637f1e-20c8-4b7d-bb5f-53f6a61d14ed",
	"nome_completo": "testes Silva",
	"email": "teste33@mail.com",
	"telefone": "11 9831915197",
	"createdAt": "2023-03-28T03:54:13.856Z",
	"updatedAt": "2023-03-28T03:54:13.856Z",
	"cliente": {
		"id": "711a43eb-d36a-4f70-81d4-9245d688fab7",
		"nome_completo": "Msqs Silva",
		"email": "testes@mail.com",
		"telefone": "11 9832915597",
		"createdAt": "2023-03-24T01:51:28.923Z",
		"updatedAt": "2023-03-29T22:34:09.952Z"
	}
}
```

<li style='font-size: 20px'>Podemos deletar um contato específico utilizando o endpoint:</li>

<br/>

`DELETE /contact/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```

<br/>

<li style='font-size: 20px'>Outra Possível Mensagem de Erro:</li>

<br/>

```json
{
    "message": "Contact Not Found"
}
```
