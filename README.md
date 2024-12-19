# Memorando :memo:

Este projeto é uma aplicação simples de lista de tarefas, baseada no curso "Angular: torne sua aplicação interativa e personalizada com animações" da Alura. O foco da aplicação é a implementação de animações personalizadas para melhorar a experiência do usuário.

## Funcionalidades :gear:

- **Cadastrar tarefa**: Adicione uma nova tarefa à lista.
- **Marcar como concluída**: Alterne entre os estados "concluída" e "pendente" para uma tarefa.
- **Editar tarefa**: Atualize o nome de uma tarefa existente.
- **Excluir tarefa**: Remova uma tarefa da lista.
- **Animações**: Transições suaves e personalizadas em diversas interações.

## Tecnologias Utilizadas

- **Frontend**: Angular
- **Backend**: JsonServer (mock de API REST)

## Estrutura do Projeto

- `src/`: Contém todo o código do frontend em Angular.
- `backend/`: Contém o JsonServer que emula um backend para a aplicação.

## Configuração do Ambiente

### Requisitos

- Node.js
- Angular CLI

### Instalação

1. Clone este repositório:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta-do-projeto>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Navegue até a pasta `backend` e inicie o JsonServer:

   ```bash
   cd backend
   npx json-server --watch db.json
   ```

4. Volte para a raiz do projeto e inicie o servidor de desenvolvimento do Angular:

   ```bash
   cd ..
   ng serve
   ```

5. Acesse a aplicação em seu navegador:

   ```
   http://localhost:4200
   ```

## Funcionalidades de Animações Implementadas


## Referências

- [Documentação Angular Animations](https://angular.io/guide/animations)
- Curso "Angular: torne sua aplicação interativa e personalizada com animações" da Alura

---

Divirta-se explorando as animações e personalizando esta aplicação! Se encontrar qualquer problema ou tiver dúvidas, fique à vontade para abrir uma *issue*. 🚀
