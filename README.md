# angular-mfe-itau

Este é o código front-end do Desafio Técnico Itaú.
O projeto consiste em criar 3 projetos usando a arquitetura de **Microfrontends** (MFEs):

 - **Shell**: Responsável por orquestrar os MFEs.
 - **MFE** Cadastro: Tela para cadastro de informações.
 - **MFE** Sucesso: Tela para exibir os dados cadastrados.

Os 3 projetos encontram-se nesse único repositório por questões práticas de avaliação, porém são aplicações distintas que são executadas de maneira independente e poderiam estar em repositórios separados, assim como terem deploys independentes. Estas são a principais vantagens da arquitetura de Microfrontends.

Neste repositório também encontra-se o projeto de **Design System** (DS): um projeto separado onde se encontram componentes que todos os MFEs podem consumir.

Idealmente o Desing System poderia ser exportado e publicado como um pacote `npm` para que os MFEs consumissem seus componentes. Nesse repositório os componentes são apenas importados localmente, simulando um Design System (desta maneira os projetos precisam estar no mesmo diretório).

## Instalação
Para instalar os projetos e executá-los (siga esta ordem):

No diretório sucess-mod, execute:

`npm i`

`ng serve`

No diretório using-mod, execute:

`npm i`

`ng serve`

No diretório shell-mod, execute:

`npm i`

`npx json-server db.json`

Ainda no diretório shell-mod, execute em outra aba do terminal:

`ng serve`

A aplicação Shell (também conhecida como Host), será servida em `http://localhost:4200/`

O DS pode ser acessado no diretório design-system. Não possui aplicação principal, mas possui Storybook.
Para acessar os componentes:

`npm i`

`npm run storybook`

Acesse `http://localhost:6006/`

**Observação**: Mantenha as pastas no mesmo diretório para que possam importar o componentes do DS.
O DS não precisa ser executado para o projeto funcionar.


### Pastas

- `shell-mod/`

Host da aplicação. Contém as rotas e carrega dinamicamente os Remotes. 
Possui uma página home (`http://localhost:4200/`) com componentes internos (não é carregado um Remote).
Possui um `json-server` para o mock do backend.

- `using-mod/`

Remote responsável pela realização do Cadastro. 
Pode ser executado e acessado em `http://localhost:4201/`

- `sucess/`

Remote responsável por exibir os dados do Cadastro. 
Pode ser executado e acessado em `http://localhost:4202/`

- `design-system/`

Biblioteca de componentes que simula um pacote de DS.

---

## Estrutura

```plaintext
angular-mfe-itau/
│
├── shell-mod/
│   ├── src/
│   ├── package.json
│    .
│    .
│    .
│   └── README.md
│
├── using-mod/
│   ├── src/
│   ├── package.json
│    .
│    .
│    .
│   └── README.md
│
├── sucess-mod/
│   ├── src/
│   ├── package.json
│    .
│    .
│    .
│   └── README.md
│
└── design-system/
    ├── src/
    ├── package.json
     .
     .
     .
    └── README.md

```

### Sobre o projeto

O projeto foi desenvolvido em Angular 20, utilizando o CLI para *bootstrapar* a aplicação.

O Angular é um framework completo para desenvolvimento de aplicações Web, principalmente Single-Page Applications (SPAs).
Também é possível usar o CLI para gerar aplicações Angular com Server-Side Rendering (SSR), Static Site Generation (SSG) e também aplicações Híbridas, para tirar o melhor proveito em cada cenário.

Utilizando o **Module Federation** do Angular/Webpack nas 3 aplicações, o Shell pode consumir as aplicações e renderizar os módulos e componentes em sua tela. Ele é responsável por configurar as rotas e servir como a casca orquestrando os MFEs (que são conhecidos como Remotes).

O projeto possui um `json-server` para servir como um backend mockado.

### Diagrama de sequência por API

  
<img width="3840" height="3136" alt="MFE Itaú App _ Mermaid Chart-2025-08-10-020156" src="https://github.com/user-attachments/assets/2490e052-8fd4-4b7c-a311-45f198331af3" />


Graças ao Module Federation, também é possível que o Host consuma os Remotes em tempo real, e caso umas das aplicações falhar, é possível exibir um *Fallback*: o Shell e as demais funcionalidades continuam executando, melhorando a disponibilidade e a experiência do usuário.

  
### Observações técnicas

### Escolhendo a forma de comunicação entre MFEs

É possível escolher a forma como as MFEs se comunicam, para exemplificar que existem N formas das MFEs se comunicarem. Neste projeto são demonstradas a comunicação via **API** e **URL Params**. Como em qualquer desenvolvimento de software, cada uma possui vantagens e desvantagens e certos casos de uso específicos.

<img width="939" height="960" alt="Captura de tela de 2025-08-10 03-28-51" src="https://github.com/user-attachments/assets/1d040836-7896-4568-9980-0acae6fde205" />

### Storybook e Design System

A arquitetura de MFEs praticamente pede a implementação de um Design System. O DS permite que os componentes sejam compartilhados tornando a interface coesa e contribuindo para a experiência do usuário (e de desenvolvimento).

Este projeto possui uma pequena biblioteca de componentes que simula um DS e um sandbox no Storybook

[Gravação de tela de 2025-08-10 03-35-51.webm](https://github.com/user-attachments/assets/13281eb0-b35b-40c6-be34-70844a346b97)

### Acessibilidade e Usabilidade

É possível se Cadastrar utilizando a navegação por tab. Foram considerados aspectos de acessibilidade para funcionar melhor com leitores de tela.

Também foi desenvolvido para dispositivos móveis.

[Gravação de tela de 2025-08-10 03-44-45.webm](https://github.com/user-attachments/assets/be4bb7b3-8e95-487a-8050-662ea37874b3)


### Testes de Unidade
Para rodar os testes de unidade, utilize o seguinte comando:

`npm run test`

O Angular CLI já possui ferramentas para testes (Karma e Jasmine)

<img width="895" height="756" alt="Captura de tela de 2025-08-10 03-48-59" src="https://github.com/user-attachments/assets/7b71c418-2afe-472f-95f3-df2117d947d3" />


### Testes E2E
Para rodar os testes de *e2e*, digite o seguinte comando (disponível apenas no projeto `shell-mod`):
Foi utilizado o Cypress.

`npm run cypress:open`

<img width="1781" height="965" alt="Captura de tela de 2025-08-10 04-07-31" src="https://github.com/user-attachments/assets/772c904a-1537-49a8-9bf3-81fd573a6b06" />


### Uso do Copilot
O Copilot foi utilizado para criar a interface (CSS).
Exemplo de prompts: `Crie um componente X com base na interface e feel&like do Itaú, utilizando os tokens providos`

Também foi utilizado para gerar arquivos de testes de unidade (`.spec.ts`).

Exemplo de prompt: `Escreva testes de unidade para este componente` (dentro do VSCode o Copilot já recebe o arquivo para referência).
A maioria dos testes saem quebrados, então é necessário supervisão e correção um a um.

### Manuntenção e Monitoramento
o projeto principal Shell possui configurado as seguintes ferramentas:

- Husky, Commitlint e SemVer para padronização de commits e versionamento;
- Sentry SDK já configurado para monitoramento de aplicações Angular;
- Google Analytics configurado para análise de dados como conversão de Cadastro, funil, etc

  

### GitHub Actions
O projeto possui um exemplo de *Actions* onde as aplicações podem passar por um CI/CD independente, como Lint, Testes de Unidade e E2E, Deploy.
Como as aplicações estão no mesmo repositório, podemos triggerar o CI/CD com branches diferentes.
Neste projeto as aplicações são apenas buildadas.

<img width="1418" height="465" alt="Captura de tela de 2025-08-10 04-09-21" src="https://github.com/user-attachments/assets/c908ee0d-2e53-4bee-a5f1-8d2a8d50f874" />
<img width="1418" height="465" alt="Captura de tela de 2025-08-10 04-09-08" src="https://github.com/user-attachments/assets/ea091e04-a707-496e-b193-bec3cb70de37" />
<img width="1418" height="465" alt="Captura de tela de 2025-08-10 04-08-58" src="https://github.com/user-attachments/assets/45b66778-548f-4cd5-a405-a2bbf5f0f7d3" />



