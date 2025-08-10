# angular-mfe-itau

Este é o código front-end do Desafio Técnico Itaú.
O projeto consiste em criar 3 projetos usando a arquitetura de **Microfrontends** (MFEs):

 - **Shell**: Responsável por orquestrar os MFEs.
 - **MFE** Cadastro: Tela para cadastro de informações.
 - **MFE** Sucesso: Tela para exibir os dados cadastrados.

Os 3 projetos encontram-se nesse único repositório por questões práticas de avaliação, porém são aplicações distintas que são executadas de maneira independente e poderiam estar em repositórios separados, assim como terem deploys independentes. Estas são a principais vantagens da arquitetura de Microfrontends.

Neste repositório também encontra-se o projeto de **Design System** (DS): um projeto separado onde se encontram componentes que todos os MFEs podem consumir.

Idealmente o Desing System poderia ser exportado e publicado como um pacote `npm` para que os MFEs consumissem seus componentes. Nesse repositório os componentes são apenas importados localmente, simulando um Design System (desta maneira os projetos precisam estar no mesmo diretório.).

## Instalação
Para instalar os projetos e executá-los (siga esta ordem):

No diretório sucess-mod, execute:

`npm i`

`ng serve`

No diretório using-mod, execute:

`npm i`

`ng serve`

No diretório shell-mod, execute:

`npx json-server db.json`

Ainda no diretório shell-mod, execute em outra aba do terminal:

`npm i`

`ng serve`

A aplicação Shell (também conhecida como Host), será servida em `http://localhost:4200/`

## Sobre o projeto

Utilizando o **Module Federation** nas 3 aplicações, o Shell pode consumir as aplicações e renderizar os módulos e componentes em sua tela. Ele é responsável por configurar as rotas e servir como a casca orquestrando os MFEs, (que são conhecidos como Remotes).

## Diagrama de sequência por API
<img width="3840" height="3136" alt="MFE Itaú App _ Mermaid Chart-2025-08-10-020156" src="https://github.com/user-attachments/assets/2490e052-8fd4-4b7c-a311-45f198331af3" />
Graças ao **Module Federation**, também é possível que o Host consuma os Remotes em tempo real, e caso umas das aplicações falhar, é possível exibir um *Fallback*: o Shell e as demais funcionalidades continuam executando, melhorando a disponibilidade e a experiência do usuário.



## Observações técnicas

### Escolhendo a forma de comunicação entre MFEs

É possível escolher a forma como as MFEs se comunicam, para exemplificar que existem N formas das MFEs se comunicarem. Neste projeto são demonstradas a comunicação via **API** e **URL Params**. Como em qualquer desenvolvimento de software, cada uma possui vantagens e desvantagens e certos casos de uso específicos.

<img width="939" height="960" alt="Captura de tela de 2025-08-10 03-28-51" src="https://github.com/user-attachments/assets/1d040836-7896-4568-9980-0acae6fde205" />

### Storybook e Design System

A arquitetura de MFEs praticamente pede a implementação de um Design System. O DS permite que os componentes sejam compartilhados tornando a interface coesa e contribuindo para a experiência do usuário.

Este projeto possui uma pequena biblioteca de componentes que simula um DS e um sandbox no Storybook

[Gravação de tela de 2025-08-10 03-35-51.webm](https://github.com/user-attachments/assets/13281eb0-b35b-40c6-be34-70844a346b97)

### Acessibilidade e Usabilidade

É possível se Cadastrar utilizando a navegação por tab. Foram considerados aspectos de acessibilidade para funcionar melhor com leitores de tela.

[Gravação de tela de 2025-08-10 03-44-45.webm](https://github.com/user-attachments/assets/be4bb7b3-8e95-487a-8050-662ea37874b3)


## Testes de Unidade
Para rodar os testes de unidade, utilize o seguinte comando:

`npm run test`

<img width="895" height="756" alt="Captura de tela de 2025-08-10 03-48-59" src="https://github.com/user-attachments/assets/7b71c418-2afe-472f-95f3-df2117d947d3" />


## Testes E2E
Para rodar os testes de unidade, digite o seguinte comando (disponível apenas no projeto `shell-mod`):

`npm run cypress:open`

![Captura de tela de 2024-02-27 21-39-18](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/448a430b-ec89-4cd8-8c16-3eceb0c3798b)


## GitHub Actions
O projeto possui um exemplo de *Actions* onde as aplicações podem passar por um CI/CD independente.




