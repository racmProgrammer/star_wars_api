# ⚔️ Desafio - API STAR WARS 🚀

## :pushpin: Sobre
Este desafio tem como objetivo o desenvolvimento de uma aplicação gerenciadora de Planetas contidos na saga Star Wars. 
As funcionalidades presentes são:
- Adicionar um novo planeta
- Listar todos os planetas
- Buscar planeta por nome
- Buscar planeta por ID
- Remover planeta

## 📋 Instalação do container do banco de dados MongoDB

**1.** Instale a aplicação Docker através do link abaixo
```
https://www.docker.com/get-started
```
**2.** Execute o código abaixo para criar um container com o banco MongoDB
```
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=b2w -e MONGO_INITDB_ROOT_PASSWORD=b2w mongo
```

## 💻 Instalação, Dependências e Executando o Projeto
**1.** Clone este repositório 
```
git clone https://github.com/racmProgrammer/star_wars_api.git
``` 
**2.** Vá até o diretório raiz do projeto
```
cd star_wars_api
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
Para realização de **requisições** na aplicação, deve ser utilizado o **Insomnia** ou **Postman**, importando o [arquivo](requests.json) de requisições já existente neste diretório.
Atentar-se aos parâmetros necessários no **Header**.

 **Desenvolvido** **por** [**Rafael**](https://www.linkedin.com/in/racmprogrammer/) 🤖
