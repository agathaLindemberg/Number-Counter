
# Number Counter - Documentação do Projeto


Este projeto é uma aplicação web full-stack desenvolvida como parte da disciplina "Linguagem Script". 
Seu objetivo é permitir o envio de números pelo frontend e contabilizar quantas vezes cada número foi enviado ao backend.

Estrutura do Projeto
---------------------

O projeto está dividido em duas partes principais:
1. **Backend (Java + Spring Boot)** - Localizado na pasta `back/`
2. **Frontend (AngularJS)** - Localizado na pasta `front/`

---
## 1. Funcionalidades do Backend
---

- **Contador de Números**: 
  - O backend recebe números enviados por requisições HTTP.
  - Utiliza uma estrutura de dados para contar quantas vezes cada número foi recebido desde o início da execução.
  - Implementado com Spring Boot.

- **Endpoints principais**:
  - `POST /counter/{value}`: Incrementa o contador do valor enviado.
  - `GET /counts`: Retorna todos os valores com suas contagens.

- **Principais arquivos**:
  - `CounterController.java`: Controlador REST que expõe os endpoints.
  - `CounterService.java`: Serviço responsável por manter a lógica de contagem.
  - `ScriptApplication.java`: Classe principal de inicialização Spring Boot.

---
## 2. Funcionalidades do Frontend
---

- Desenvolvido com AngularJS.
- Permite que o usuário digite um número e envie para o backend.
- Exibe a contagem de quantas vezes cada número foi submetido.
- Consome os endpoints REST do backend via HTTP.

- **Principais arquivos**:
  - `contador.component.ts`: Componente principal da aplicação.
  - `app.module.ts`: Módulo principal da aplicação.

---
## 3. Como Executar
---

Pré-requisitos:
- Java 24 e Maven para o backend
- Node.js e Angular CLI para o frontend

Backend:
```bash
cd back
./mvnw spring-boot:run
```

Frontend:
```bash
cd front
npm install
ng serve
```

Acesse a aplicação via: `http://localhost:4200`

---
## 4. Observações Finais
---

- Projeto desenvolvido para fins acadêmicos.
- Ideal para aprender sobre comunicação cliente-servidor com Java e Angular.
- Sistema simples, mas com arquitetura modular e separação de responsabilidades.
