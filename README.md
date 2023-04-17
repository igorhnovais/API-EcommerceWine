# API-EcommerceWine - WineDrop

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Usando](#usando)
- [Rotas](#rotas)


</details>

<a name="sobre-o-projeto"></a>

## 📋 Sobre o projeto
### tecnologias e ferramentas

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Idealização do projeto
- Esse projeto foi pensado para ser um ecommerce de vinho e seus derivados, onde possui cadastro e login, sistema de produtos, filtros de produtos, carrinho e tela de administrador, que usada com um email especial, o administrador poderá deletar e cadastrar um novo produto.

### link do Front-end desse projeto
- https://github.com/igorhnovais/FRONT-ecommerceWine
<a name="usando"></a>

## 🏁 Usando

Clone o repositorio

```bash
$ git clone https://github.com/igorhnovais/FRONT-ecommerceWine

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm run dev
```

<a name="contribuindo"></a>

## 🏁 Rotas
### => usersRouters

1. Rota para cadastrar um novo usuario:
    
    Route get: ```"/sign-up"``` 

    Desrição: nela você consegue se cadastrar para poder usar o app. 
    
    Entrada:
    ```bash
        {
            "name": "igor",
            "email": "igor@driven.com.br",
            "password": "driven",
            "confirmPassword": "driven" 
        }
    ```

2. Rota para fazer login no app:
    
    Route get: ```"/sign-in"``` 

    Desrição: nela você consegue por seu email e senha já cadastrados anteriormente e assim terá acesso ao app.
    E também ele devolve para o front o token do usuario.
    
    Entrada:
    ```bash
        {
            "email": "igor@driven.com.br",
            "password": "driven"  
        }
    ```
     Saída:
    ```bash
        874ed5cc-5726-4ad2-a1fe-62007c10bf76
    ```

    
3. Deletar sessão do usuario:

    Route delete: ```"/session"```
    
    Desrição: essa rota existe para deletar a sessão do usuario que está logado.
    
 

4. Ver se o usuario logado tem permissão de administrador :
    
    Route get: ```"/adm"``` 

    Desrição: nela você consegue pegar o usuario e ver se ela tem o compo "adm": true. Caso tenha, libera a aba de adm 

5. Se for adm, poderá deletar produtos do site: 

    Route delete: ```"/adm/:id"``` 
    
    Desrição: nessa rota você deleta os produtos que você quiser. 

6. Adicionar novo produto:

    Route post: ```"/adm"```
    
    Desrição: Inserir um novo produto no site.

    Entrada: 
    ```bash
    {
        "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png",
        "name":"Davideira",
        "description": "O nome Davideira faz alusão ao fruto que sai da videira, a uva. Em Portugal, as uvas crescem há mais de 4 mil anos. É um cultivo que faz parte da história do país. Esse vinho é uma homenagem à uva, elaborado com castas típicas do país.",
        "type": "Portugal Tinto Meio Seco 750 ml",
        "alcohol": "13.00% ABV",
        "value": 6490,
        "type_product": "wine"
    }
    ```
    Saida: status 201.

### => productsRouters

1. Rota para pegar os produtos do banco:
    
    Route get: ```"/products"``` 

    Desrição: nessa rota, você pega todos os produtos cadastrados no banco
    
    Saida:
    ```bash
        [
            {
                "id": 44,
                "name": "Tábua redonda",
                "image": "https://a-static.mlcdn.com.br/280x210/tabua-de-queijos-vinho-e-taca-petisqueira-redonda-madeira-full-vendas/olistplus/opmx3qaovmm0owc1/4f0ce37d7ebcd7275d4d815161d9585b.jpeg",
                "description": "Essa tábua de queijos é otima para servir variados petiscos e seu formato redondo é muito acolhedora e romantica, possue até suporte para colocar taça",
                "type": "Brazil",
                "alcohol": "",
                "value": 7970,
                "type_product": "taboo"
            }, 
            {...}
        ]
    ```

2. Rota para pegar um produto especifico no banco:
    
    Route get: ```"/products/:id"``` 

    Desrição: essa rota, ao clicar em um produto especifico, você consegue ver todas as informações desse determinado produto.
    
    Saída:
    ```bash
            {
                "id": 44,
                "name": "Tábua redonda",
                "image": "https://a-static.mlcdn.com.br/280x210/tabua-de-queijos-vinho-e-taca-petisqueira-redonda-madeira-full-vendas/olistplus/opmx3qaovmm0owc1/4f0ce37d7ebcd7275d4d815161d9585b.jpeg",
                "description": "Essa tábua de queijos é otima para servir variados petiscos e seu formato redondo é muito acolhedora e romantica, possue até suporte para colocar taça",
                "type": "Brazil",
                "alcohol": "",
                "value": 7970,
                "type_product": "taboo"
            },
    ```

    
3. Nessa rota pega apenas os vinhos:

    Route get: ```"/products/wine"```
    
    Desrição: essa rota ao clicar no menu, em cima de vinhos, apenas aparecerá os vinhos na tela.
    
 

4. Nessa rota pega apenas as taças:
    
    Route get: ```"/products/cup"``` 

    Desrição: essa rota ao clicar no menu, em cima de taças, apenas aparecerá as taças na tela. 


5. Nessa rota pega apenas as tabuas: 

    Route get: ```"/products/taboo"``` 
    
    Desrição: essa rota ao clicar no menu, em cima de tabuas, apenas aparecerá as tabuas na tela. 


6. Nessa rota, atraves de um input de pesquisa, você cnsegue procurar um produto especifico no banco:

    Route post: ```"/products/searched"```
    
    Desrição: nessa rota, você consegue procurar qualquer produto que estiver no banco, atraves do input de pesquisa.

    Entrada: 
    ```bash
    {
        "search": "david"
    }
    ```
    Saida: status 200.


### => cartsRouters

1. Rota de verificação se o usuario está logado:
    
    Route all: ```"/authVerification"``` 

    Desrição: nessa rota, verifica se o usuario está logado, caso não esteja ele barra o usuario a entrar no carrinho.
    

2. Rota para inserir um produto no carrinho:
    
    Route get: ```"/postOneProduct"``` 

    Desrição: essa rota, ao clicar em um produto especifico, o produto será inserido no carrinho do usuario.
    
    
3. Nessa rota pega todos os produtos inseridos no carrinho:

    Route get: ```"/cart"```
    
    Desrição: essa rota ao clicar no carrinho, você poderá ver todos os seus produtos que foram inseridos no carrinho.
    
 

4. Nessa rota exclui os produtos:
    
    Route delete: ```"/cart/:id"``` 

    Desrição: essa rota ao clicar na lixeira, você ira excluir o produto. 


5. Nessa rota pega o saldo do carrinho: 

    Route get: ```"/cart-balance"``` 
    
    Desrição: essa rota irá somar o valor de todos os produtos que estão no carrinho . 

    Entrada: 
    ```bash
    {
        "id": "2"
    }
    ```

    saida: 
    ```bash
    {
        "balance": "29989"
    }
    ```


6. Nessa rota, ativa a api externa da stripe e manda o valor do carrinho para pagamento:

    Route post: ```"/create-checkout-session"```
    

    Saida: status 200.

