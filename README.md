# 📱 React Native CRUD 

Um aplicativo de gerenciamento de usuários desenvolvido com **React Native** e **Expo**. Ele mostra a lista de usuários, permite criar novos usuários e editar ou excluir um usuário já existente. O projeto apresenta uma interface minimalista em modo escuro, focada em performance e usabilidade.

## 🚀 Tecnologias Utilizadas
* [React Native](https://reactnative.dev/) - Framework para apps nativos.
* [Expo](https://expo.dev/) - Plataforma para facilitar o desenvolvimento.
* [JSON Server](https://github.com/typicode/json-server) - Simulação de API REST.
* [LocalTunnel](https://theboroer.github.io/localtunnel-www/) - Túnel para acesso à API pelo dispositivo móvel.

---

## 🛠️ Passo a Passo para Execução

Para rodar o projeto, você precisará de três terminais abertos simultaneamente.

### 1. Preparação do Projeto
Clone o repositório e instale as dependências:
```bash
npm install
```
### 2. Banco de Dados (API Local)
Entre na pasta backend pelo Terminal:
```bash
cd backend
```
Instale globalmente o json-server na pasta backend:
```bash
npm install -g json-server
```
Inicie o servidor que gerencia o arquivo db.json:
```bash
npx json-server --watch db.json --port 3000
```
### 3. Exposição da API (Túnel)
Como o app roda no celular, é necessário expor a porta 3000 para a internet, por isso iremos usar o LocalTunnel para isso:
Crie outro terminal e entre na pasta backend novamente:
```bash
cd backend
```
Instale o LocalTunnel globalmente:
```bash
npm install -g localtunnel
```
Execute esse comando para disponibilizar o nosso backend (porta 3000)para a internet:
```bash
npx lt --port 3000 --host https://localtunnel.me
```
Nota: Copie a URL https gerada pelo LocalTunnel (ex: https://tidy-wings-search.loca.lt) e adicione a URL entre as aspas (" ") no arquivo configApi.js:
```bash
CrudApp/servers/configApi.js
```

### 4. Iniciar o Aplicativo
Agora, execute o Expo limpando o cache e forçando o modo túnel:

```bash
npx expo start -c --tunnel
```
Escaneie o QR Code usando o app Expo Go no seu celular.

### 5. Vídeo Demonstração
Se desejar apenas ver o vídeo demonstração, segue o link do Youtube:

```bash
https://youtube.com/shorts/lVVRdJ8Gch0
```