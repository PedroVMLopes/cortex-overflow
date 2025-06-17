# Cortex Overflow - Transformando tarefas em recompensas
## 📝 Descrição

O Cortex Overflow é uma aplicação de gerenciamento de tarefas com um sistema robusto de recompensa ao usuário. As recompensas consistem em 2 grupos, **Atributos** e **Moedas**

Os *atributos* são divididos em 6 categorias, eles servem para categorizar os tipos de tarefas realizadas:
  - **FORÇA**: Tarefas físicas (Ex: exercícios e academia);
  - **CONSTITUIÇÃO**: Construção de hábitos e cuidados (Ex: limpeza de pele, acordar mais cedo que o necessário);
  - **Destreza**: Produzir algo manual (Ex: pintar uma miniatura, desenhar)
  - **Inteligência**: Estudos relacionados ao trabalho (Ex: aprender novas funções no Excel, estudar um novo framework)
  - **Carisma**: Consumo de arte (Ex: assistir um filme clássico, ler 15 páginas de um livro)
  - **Sabedoria**: Estudos não relacionados ao trabalho (Ex: assistir uma áula de política internacional, fazer um pequeno resumo do capítulo do livro que você está lendo)

As *moedas* são divididas em 3 (prata, ouro e gemas). Cada tarefa pode dar uma quantidade de prata e ouro definida pelo usuário de acordo com sua complexidade. 
Elas podem ser trocadas em gemas, que são utilizadas para aumentar a quantidade de experiência dada ao completar uma tarefa, criando um ciclo onde realizar tarefas te impulsiona a completar mais tarefas.

## 🔹 Tecnologias utilizadas

React — para a construção da interface

TypeScript — como a principal linguagem de programação

Supabase — para armazenamento de dados e autenticação dos usuários

Next.js — para a criação de rotas e melhoria de performance

TailwindCSS — para estilização

## ⚙ Instalação

  - Caso queira utilizar a aplicação final, seu link é: cortexoverflow.vercel.app

Siga os seguintes caminhos para instalar e usar o Cortex Overflow:

  Clone o repositório:

    git clone https://github.com/PedroVMLopes/cortex-overflow

  Vá até o diretório:

    cd cortex-overflow

  Instale as dependências:

    npm install

  Inicie o aplicativo:

    npm start

Isso deve preparar o aplicativo para execução no seu computador.

## 🔹 Uso

  Depois que o aplicativo for iniciado:

  - Faça login com sua conta google para criar seu usuário no banco de dados
  - Crie tarefas e atribua seus atributos e recompensas na página inicial
  - Vá para a página da *loja* para trocar suas moedas de prata e ouro, e comprar o aumento de recompensa de XP para suas tarefas
  - Vá para a página do *seu perfil* para acompanhar quanto de XP você tem conquistado realizando tarefas

## Implementações Futuras
  - Página de tarefas diárias, onde você pode criar tarefas uma só vez e elas podem ser completadas novamente no próximo dia. Isso será útil para tarefas do cotidiano.
  - Página de **Missões Legado**. Será uma espécie de pomodoro, onde você cria uma tarefa e acompanha o tempo que você está utilizando para realizar ela, sendo recompensado, é claro.

Futuramente eu quero adicionar muito mais funcionalidades para a loja, criando diferentes itens que poderão ser fabricados completando tarefas, gerandfo ainda mais XP.

Uma das ideias é criar um reator que precisa de um circuito (recebido ao completar uma tarefa que possui um chip de aumento de XP) e um núcleo (recebido ao completar uma missão legado). Esses 2 itens permitem ao usuário iniciar o reator para gerar uma grande quantidade de XP para um atributo.
