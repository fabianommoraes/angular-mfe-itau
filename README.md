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

## Diagrama de sequência
<img width="3840" height="3136" alt="MFE Itaú App _ Mermaid Chart-2025-08-10-020156" src="https://github.com/user-attachments/assets/2490e052-8fd4-4b7c-a311-45f198331af3" />

Graças ao **Module Federation**, também é possível que o Host consuma os Remotes em tempo real, e caso umas das aplicações falhar, é possível exibir um *Fallback*: o Shell e as demais funcionalidades continuam executando, melhorando a disponibilidade e a experiência do usuário.

## Observações técnicas

### Cidade de origem do produto

Existe uma discrepância entre os desenhos e a especificação técnica das APIs.
No desenho dos resultados da busca, é possível ver o local de origem do produto (por exemplo: Capital Federal).
Porém o documento da API não contempla o campo "state".

Inicialmente ao exibir uma busca, a seguinte tela será renderizada:

![Captura de tela de 2024-02-27 20-53-49](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/8bd0a6e5-34b3-4b39-bb96-07c40da988aa)

Para exibir a cidade do local da compra, pode-ser adicionar o parâmetro `&extraInfo=true` apenas como um exemplo.
**Isto aumenta drasticamente o tempo de carregamento da página**, pois são necessários 4 chamadas a mais na API de produtos.

![Captura de tela de 2024-02-27 20-56-21](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/426ea8d1-441e-4430-bc23-f41fe3fa98a0)

### Números decimais do preço

A API de produtos retorna valores do tipo `number` no formato `1999.08`. Ao realizar a conversão para `number` conforme a especificação, pode-se perder informações. Exemplo: ao converter `08` para `number` o resultado é `8`.
Sendo assim foi necessário deixar os decimais como `string`.

### Categorias da PDP (página do produto) ou Detalhes do Produto

Também existe uma discrepância entre o desenho e a especificação técnica da API.
As APIs disponibilizadas e as especificações do retorno da API não contemplam as categorias.
Foi adicionado a chamada a API de categorias do Mercado Libre. Isto aumenta um pouco o tempo de carregamento da página pois há uma chamada a mais.

![Captura de tela de 2024-02-27 21-07-55](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/a13a31c0-1069-400c-9986-6f4d7ddec675)

## Performance
### ISR do Next.js

Para visualizar o ISR em ação, utilize o build em produção.

Os seguintes IDs são gerados em tempo de build do projeto: MLA1362438311, MLA1437406762, MLA903665569, MLA1130295049.

Fazendo uma busca com a palavra `playstation`, os IDs acima serão exibidos.

![Captura de tela de 2024-02-27 21-14-07](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/1beb8217-cb35-49ca-a628-3afd5d138186)

### Resultados do Lighthouse (build de produção)

#### Página de busca (Server Side Rendering)
![Captura de tela de 2024-02-28 03-08-55](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/fa69435b-cd71-4aa2-bd1f-fb7d986f3a4c)

#### Detalhes do Produto (Server Side Rendering)
![Captura de tela de 2024-02-28 03-09-49](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/67560eb5-e9df-4436-af05-8b661c780070)

#### Detalhes do Produto (Incremental Static Regeneration) - Disponível para 4 IDs
![Captura de tela de 2024-02-28 03-09-21](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/d8553dc3-2a30-4e13-9cd1-d309df4bd44d)


## Testes de Unidade
Para rodar os testes de unidade, utilize o seguinte comando:

`npm run test`

![Captura de tela de 2024-02-27 21-25-53](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/fb0c1dd5-10a9-4602-bf56-6e2982c2b441)


## Testes E2E
Para rodar os testes de unidade, digite o seguinte comando:

`npx cypress open`

![Captura de tela de 2024-02-27 21-39-18](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/448a430b-ec89-4cd8-8c16-3eceb0c3798b)

## Acessibilidade e Usabilidade
É possível "realizar uma compra" utilizando a navegação por tab. Foram considerados alguns aspectos de acessibilidade para funcionar melhor com leitores de tela.

![Captura de tela de 2024-02-27 21-44-06](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/5a95b26e-0f55-4f94-b034-7dd45735d719)


## SEO
O Next.js possui Server Side Rendering e outras features que facilitam o SEO.
Todas as páginas são renderizadas pelo lado de servidor e algumas `meta` tags foram populadas com informações do produto.

## Storybook
O projeto possui um Storybook para poder visualizar a sua biblioteca de componentes.
![Captura de tela de 2024-02-27 21-48-55](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/be160e5c-c185-43b2-ab4d-c316151f15d5)


## GitHub Actions
O projeto possui um pequeno CI onde são verificados o Lint, Testes de Unidade e Testes e2e.

![Captura de tela de 2024-02-27 22-13-15](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/f71591df-b864-4cc8-88b8-88146600ca57)


