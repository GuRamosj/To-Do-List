# Todo React Avancado

Uma aplicação de lista de tarefas (Todo List) desenvolvida com React, focando em conceitos avançados como Hooks, Context API e otimização de performance.

##  Tecnologias Utilizadas

- **React** (Vite)
- **Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback`, Custom Hooks (`useLocalStorage`)
- **State Management**: Context API (`TodoContext`)
- **Styling**: Tailwind CSS (Mobile First, Glassmorphism)
- **Performance**: `React.memo` para otimização de renderização

##  Como Rodar Localmente

1. Clone o repositório ou baixe os arquivos (se estiver em um zip/pasta).
2. Na pasta do projeto, instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no endereço exibido (geralmente `http://localhost:5173`).

##  Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Remover tarefas
- ✅ Filtrar por status (Todas, Pendentes, Concluídas)
- ✅ Persistência de dados com LocalStorage
- ✅ Design responsivo e moderno (Glassmorphism)
