# exercise-with-solid-principles

Este projeto foi criado com o objetivo de consolidar conhecimentos sobre os princípios SOLID e praticar a utilização do Docker. Aqui estão algumas informações para ajudá-lo a entender e executar o projeto.

## Objetivos

- Aplicar os princípios SOLID no design da aplicação.
- Exercitar a utilização do Docker para facilitar o desenvolvimento e implantação.

## Como Rodar o Projeto

### Requisitos

- Docker instalado
- Node.js (opcional, apenas se você deseja executar localmente sem o Docker)

### Passos

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/kemps-medeiros/exercise-with-solid-principles/
   cd exercise-with-solid-principles
   ```

2.  **Buildar a imagem do docker:**
   ```bash
   docker build -t exercise-with-solid-principles .
   ```

3.  **Rodar o containner:**
   ```bash
   docker run -d -v $(pwd)/src:/usr/src/app/src -p 3000:3000 exercise-with-solid-principles
   ```

### Princípios SOLID aplicados no projeto

1. **Single Responsibility Principle (Princípio da Responsabilidade Única):**
  - GoalkeeperRepository é responsável apenas por operações relacionadas a Goalkeeper.
  - CreateGoalkeeperUseCase é responsável pela criação e atualização de Goalkeepers.
2. **Open-Closed Principle (Princípio Aberto-Fechado):**
  - As classes de Goalkeeper e Forward extendem da classe Player, assim podemos adicionar novos comportamentos sem alterar os existentes.
3. **Liskov Substitution Principle (Princípio da Substituição de Liskov):**
  - Player pode ser substituído por suas subclasses (Goalkeeper e Forward) sem afetar o comportamento do programa.
4. **Interface Segregation Principle (Princípio da Segregação de Interfaces):**
  - Interfaces devem ser específicas e não ter métodos desnecessários.
5. **Dependency Inversion Principle (Princípio da Inversão de Dependência):**
  - Dependências são injetadas via construtor, permitindo maior flexibilidade e testabilidade.
  - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstração.(HttpServer)
