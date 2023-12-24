<h1 align="center"> ⚽🧤 Trybe Futebol Clube ⚽🧤 </h1>

<br>

<h3 align="center">
O Trybe Futebol Clube é uma aplicação full stack que possibilita o usuário logar para visualizar, filtrar e editar informações sobre partidas e classificações de futebol.<br/>
</h3>
<p> <strong>OBS:</strong> Desenvolvi o <strong>backend</strong> pois a própria Trybe já forneceu o <strong>frontend</strong>, sendo minha tarefa conectar o backend com o frontend.</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- Docker
- Node
- TypeScript
- POO (Programação Orientada à Objetos)
- SOLID
- MySQL
- Sequelize
- JWT (Json Web Token)
- Bcryptjs
- Arquitetura de Software (MSC)
- Chai & Sinon

<br>

## 📑 Estrutura de pastas
<p>O projeto segue a seguinte estrutura de pastas:</p>
<ul>
  <li><strong>app:</strong> Ponto inicial do projeto, sendo a pasta que contém dentro tanto o frontend quanto o backend.</li>
  <li><strong>app/backend/src:</strong> Código fonte do backend da aplicação.</li>
  <li><strong>app/frontend/src:</strong> Código fonte do frontend da aplicação.</li>
  <li><strong>app/backend/database:</strong> Database do Sequelize referente à criação e população do banco de dados.</li>
  <li><strong>app/backend/Interfaces:</strong> Interfaces e tipagens referentes à cada entidade da aplicação.</li>
  <li><strong>app/backend/routes:</strong> Todas as rotas da aplicação seguindo a arquitetura model, service e controller (MSC).</li>
  <li><strong>app/backend/tests:</strong> Testes automatizados do backend.</li>
</ul>

<br>

## ✨ Funcionalidades

As seguintes funcionalidades estão disponíveis:

- **Login para Admin/User:** Caso o login seja feito pelo Admin, o mesmo terá funcionalidades extras como adicionar/editar partida, já em caso de login de User, o mesmo poderá apenas filtrar classificações/partidas.

- **Filtrar Classificação Geral:** Permite o usuário filtrar a classificação geral, tanto de times mandantes quanto de times visitantes.

- **Filtrar Classificação do Time Mandante:** Permite o usuário filtrar a classificação de <strong>apenas</strong> times mandantes.

- **Filtrar Classificação do Time Visitante:** Permite o usuário filtrar a classificação de <strong>apenas</strong> times visitantes.

- **Filtrar Todas as Partidas:** Permite o usuário filtrar todas as partidas, sejam elas já finalizadas ou em andamento.

- **Filtrar Partidas em Andamento:** Permite o usuário filtrar <strong>apenas</strong> partidas que estão em andamento.

- **Filtrar Partidas Finalizadas:** Permite o usuário filtrar <strong>apenas</strong> partidas que já foram finalizadas.

- **Adicionar Nova Partida:** Caso esteja logado como Admin, poderá adicionar uma nova partida.

- **Editar Partida:** Caso esteja logado como Admin, poderá editar tanto o placar quanto o status uma partida.

<br>

## ⚙️ Como Usar

### Instalação

1. Clone o repositório:

```
 git@github.com:davidcunhadev/TrybeFC.git
```

2. Vá para a pasta do projeto:

```
cd TrybeFC
```

3. Instale as dependências do projeto:
```
npm run install:apps
```

4. Suba os containers do projeto com o comando:
```
npm run compose:up
```

5. Basta apenas abrir o <a href="http://localhost:3000/" target="_blank"> localhost:3000 </a> e a aplicação já estará no ar.

<br>

## 🔀 Rotas da Aplicação

<ul>
  <li>
    Após inicializar o projeto, você começará na rota /leaderboard:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Leaderboard</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![LeaderboardScreen](/public/LeaderboardScreen.png)
  
  </details>

<br>

  <li>
    Para ver todas as partidas, basta clicar no botão <strong>Partidas</strong> no canto superior direito, e será redirecionado para a rota /matches:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Matches</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![MatchesScreen](/public/MatchesScreen.png)
  
  </details>

<br>

  <li>
  Para ter permissões extras, como adicionar/editar partidas, precisa estar logado como Admin, então para isso basta clicar em <strong>Login</strong> no canto superior direito, e será redirecionado para a rota /login:
  </li>

<br>

  <p>Utilize o seguinte login para prover das permissões extras:</p>

  <details>
    <summary>🤫</summary>
    
  Login:
  
    Admin@admin.com
    
  Senha:
    
    secret_admin
    
  </details>
  
<br>

  <details>
  <summary><strong>Tela de Login</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![LoginScreen](/public/LoginScreen.png)
  
  </details>

<br>

  <li>
    Após logado, você voltará para a rota /matches, mas agora com permissões extras como adicionar nova partida no canto superior direito, e após clicar será redirecionado para a rota /matches/settings:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Adicionar Partida</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![AddMatchScreen](/public/AddMatchScreen.png)
  
  </details>

<br>

  <li>
    Para editar uma partida, volte para a rota /matches, e, ao lado de cada partida que esteja <strong>em andamento</strong>, você pode clicar no ícone do lápis para editar a partida, sendo redirecionado para a rota /matches/settings:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Editar Partida</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![UpdatingMatchScreen](/public/UpdatingMatchScreen.png)
  
  </details>

<br>

</ul>

## 📫 Contato

Sinta-se livre para dar feedbacks, entrar em contato comigo e se conectar para novas ideias quando quiser!  

<a href="mailto:contatodavidcunha@hotmail.com">
<img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"></a>
</a>

<a target='_blank' href="https://www.linkedin.com/in/davidlcunha/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
