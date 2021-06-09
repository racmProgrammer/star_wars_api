# ⚔️ Desafio - API STAR WARS 
![](assets/capa_ignite.png)
<br>

## :pushpin: Sobre
Este desafio tem como objetivo o desenvolvimento de uma aplicação gerenciadora de Planetas contidos na saga Star Wars. 
As funcionalidades presentes são:
- Adicionar um novo planeta
- Listar todos os planetas
- Buscar planeta por nome
- Buscar planeta por ID
- Remover planeta

## 📋 Requisitos de Execução do Porjeto
**1.**Instalação do cantainer do banco de dados MongoDB
**1.**Instale a aplicação Docker
**2.**Execute o código abaixo para criar um container com o banco MongoDB
```
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=b2w -e MONGO_INITDB_ROOT_PASSWORD=b2w mongo
```

## 💻 Instalação, Dependências e Executando o Projeto
**1.** Clone este repositório 
```
git clone git@github.com:Ygohr/todo-challenge-ignite-nodejs.git
``` 
**2.** Vá até o diretório raiz do projeto
```
cd todo-challenge-ignite-nodejs
``` 
**3.** Instale as dependências necessárias
```
yarn 
ou
npm install
```
**4.** Execute a aplicação
```
yarn start
```

## :floppy_disk: Usando a Aplicação
Para realização de **requisições** na aplicação, deve ser utilizado o **Insomnia** ou **Postman**, importando o [arquivo](insomnia_requests) de requisições já existente neste diretório.
Atentar-se aos parâmetros necessários no **Header**.

## :syringe: Evidência de Testes
Nesta aplicação, são contemplados **Testes Unitários**, visando garantir o correto funcionamento das funcionalidades e manter a aplicação de acordo com os requisitos. <br/>
![](assets/test_evidence.png)


 **Desenvolvido** **por** [**Rafael**](https://www.linkedin.com/in/ygohr-medeiros-28451b14a/) 🤖
