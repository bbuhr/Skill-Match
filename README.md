# Skill-Match JS

## Sobre o projeto

O Skill-Match JS é um simulador simples de compatibilidade entre um candidato e vagas de front-end júnior.

O projeto compara as habilidades do candidato com os requisitos das vagas e mostra:

- percentual de compatibilidade;
- habilidades encontradas;
- habilidades faltantes;
- vaga mais compatível;
- recomendação de estudo.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- lógica de programação;
- JavaScript;
- tipos de dados;
- condicionais;
- operadores;
- escopo;
- laços de repetição;
- funções;
- arrow functions;
- arrays;
- métodos de array;
- objetos;
- classes;
- herança;
- this;
- callbacks;
- closures;
- Promises;
- async/await;
- GitHub;
- Kanban.

## Como executar

Este projeto não precisa de Node.js.

Você pode executar de uma destas formas:

1. Abrir o navegador Google Chrome.
2. Pressionar F12 ou Ctrl + Shift + J.
3. Abrir a aba Console.
4. Copiar o código do arquivo skillmatch.js.
5. Colar no console.
6. Pressionar Enter.

## Estrutura do projeto

```txt
skillmatch-js/
│
├── skillmatch.js
└── README.md
```

## Extensões Recomendadas

Para abrir, editar e **executar** este projeto direto no editor, recomendamos o uso do **VS Code** com as seguintes ferramentas:

* **Prettier - Code formatter:** Garante a padronização visual automática do código JavaScript.
* **JavaScript (ES6) code snippets:** Agiliza a escrita de blocos de código através de atalhos.
* **Live Server (Opcional):** Caso você decida criar um arquivo `index.html` no futuro para carregar o seu script, esta extensão abre um servidor local que atualiza o navegador automaticamente a cada salvamento.

## Como a Internet Funciona?

A internet é uma gigantesca rede global de computadores interconectados por cabos e sinais. Quando você acessa um site, seu dispositivo divide a solicitação em "pacotes" de dados. Esses pacotes viajam pela infraestrutura física da rede (como cabos de fibra óptica) até encontrarem os servidores, retornando a página direto para o seu navegador.

Para entender o processo passo a passo:

### Infraestrutura e Tráfego
* **Backbones e Cabos:** A espinha dorsal da internet é composta por cabos de fibra óptica subterrâneos e submarinos que conectam continentes na velocidade da luz.
* **Pacotes de Dados:** Seus arquivos não vão inteiros. São divididos em pacotes, que viajam por rotas variadas e são remontados ao chegar ao destino final.

### O Endereçamento
* **Endereço IP:** Cada computador, celular ou servidor possui um endereço numérico único chamado IP, que funciona como o "CEP" na rede.
* **DNS:** Como números são difíceis de memorizar, o sistema DNS (*Domain Name System*) traduz palavras (ex: `google.com`) para o endereço IP correspondente.

### A Conexão e o Acesso
* **Provedores (ISPs):** Empresas provedoras conectam sua casa ou celular à grande teia global.
* **Modem e Roteador:** O modem traduz o sinal da rede externa para o seu computador. O roteador distribui essa conexão via Wi-Fi ou cabos para seus dispositivos.
* **Navegador:** Aplicativos como o Chrome ou Edge funcionam como "tradutores". Eles solicitam os dados e montam o código para você visualizar em forma de texto e imagem.

## Arquitetura Cliente-Servidor

A web opera em um modelo de comunicação dividido em duas partes principais: o **cliente** e o **servidor**.

* **Cliente:** É o dispositivo final que solicita os recursos (seu computador, celular ou navegador). Ele inicia a comunicação enviando uma requisição HTTP.
* **Servidor:** É um computador potente que armazena os dados, arquivos e códigos do site. Ele processa a requisição do cliente e envia uma resposta de volta.
* **A Requisição (Request):** O pedido feito pelo cliente (ex: clicar em um link ou digitar uma URL).
* **A Resposta (Response):** O retorno enviado pelo servidor (ex: a página HTML, imagens ou dados JSON).
