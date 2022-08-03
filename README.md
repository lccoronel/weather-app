# Weather-app

![Screen Recording 2022-08-03 at 14 47 10](https://user-images.githubusercontent.com/54275445/182675936-22d75d52-9704-4633-b870-c5cdf8d72148.gif)

Desenvolvi um aplicativo que consome a localização atual do usuário e exibe na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.

Como a API desse projeto já estava pronta, precisei desenvolver apenas o frontend e utilizei [ReactJS](https://reactjs.org/) com [typescript](https://www.typescriptlang.org/) e mais algumas libs: 

#### Axios

* Para requisiçoēs HTTP

#### Styled components

* Para auxiliar na estilização e em algumas regras nos estilos

<img src="https://user-images.githubusercontent.com/54275445/182678988-83b9561b-668e-4bd7-a38e-9df3c6c5edf2.png" width="400" height="200" />


#### Lottie

* Para renderizar animaçoēs

#### Eslint e Prettier 

* Para ajudar na padronização e legibilidade do código

### Storybook

* Para documentação de componentes globais na aplicação
<img width="600" height="400" alt="Screen Shot 2022-08-03 at 11 21 44" src="https://user-images.githubusercontent.com/54275445/182680266-da2de255-9cbc-4534-b469-604d766e9094.png">

Descrição:
No site não é necessário navegação, a tela "Home" faz todos processos de buscar a localização, 
buscar o clima para a localização atual e aterar a unidade de temperatura desejada.
No aplicativo a tela principal mostra a localização, inforçoēs do clima atual e dos próximos 6 dias e na parte de cima, 
mostra o link da APi utilizada e um botão de refresh para pegar as infomaçoēs atualizadas.
O design repeita os climas e horários e sofre alteraçōes quando é a noite ou é de dia, 
basicamente os icones trocam e a cor de fundo tambem.
Falando um pouco sobre o código, tentei aplicar a arquitetura Atomic Design no projeto e o maximo de clean code que consegui, 
em funçoēs globais(helpers) utilizei o JSDocs para ajudar na documentação e utilização das mesmas.
Um ponto crucial que faltou foi a aplicação de testes nos componentes e nos helpers e hooks, devido entrega rapida 
que queria fazer acabei cedendo nessa parte, a aplicação por completa pode ser melhorada tentei fazer o minimu de cada 
ponto para mostra e testar meus conhecimentos. Tudo foi salvo nesse repositório usando um gitflow simples, usando gitmoji nos 
commits e usando apenas a branch main mesmo.

Duração do projeto: 4 dias
