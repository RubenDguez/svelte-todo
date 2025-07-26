# Todo Svelte

A modern todo application built with Svelte 5, TypeScript, and Vite. This application demonstrates the latest Svelte features including the new runes API for state management.

## Features

- ✅ **Add todos** - Create new todo items with validation
- 🔄 **Toggle completion** - Mark todos as done or pending
- 🔍 **Filter todos** - View all, completed, or pending todos
- 📊 **Statistics** - Track your progress with todo stats
- 💾 **Local storage** - Persistent data across browser sessions
- 🎨 **Modern UI** - Clean and responsive design
- ⚡ **Fast** - Built with Vite for optimal performance

## Tech Stack

- **[Svelte 5](https://svelte.dev/)** - Progressive web framework with new runes API
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Bun](https://bun.sh/)** - JavaScript runtime and package manager

## Project Structure

```
src/
├── App.svelte              # Main application component
├── main.ts                 # Application entry point
├── vite-env.d.ts          # Type definitions
├── lib/
│   ├── Todo.svelte.ts     # Todo state management (singleton)
│   └── Components/
│       ├── Add.svelte     # Add new todo component
│       ├── Filter.svelte  # Filter todos component
│       ├── List.svelte    # Todo list display component
│       └── Stats.svelte   # Statistics component
└── assets/                # Static assets
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) 18+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo
```

2. Install dependencies:
```bash
bun install
# or with npm
npm install
```

### Development

Start the development server:

```bash
bun run dev
# or with npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:

```bash
bun run build
# or with npm
npm run build
```

### Preview

Preview the production build locally:

```bash
bun run preview
# or with npm
npm run preview
```

### Type Checking

Run TypeScript and Svelte type checking:

```bash
bun run check
# or with npm
npm run check
```

## Architecture

### State Management

The application uses a singleton pattern with Svelte 5's new runes API for state management:

- **`Todo.svelte.ts`** - Central state manager using `$state` runes
- **Local Storage Integration** - Automatic persistence of todos
- **Reactive Filtering** - Real-time filtering based on completion status

### Component Structure

- **Modular Design** - Each feature is encapsulated in its own component
- **TypeScript Interfaces** - Strong typing with `ITodo` interface and `TFilter` type
- **Event Handling** - Proper form submission and user interaction handling

## Data Types

```typescript
interface ITodo {
    id: string;      // Unique identifier (UUID)
    title: string;   // Todo description
    done: boolean;   // Completion status
}

type TFilter = 'All' | 'Completed' | 'Pending';
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Svelte 5](https://svelte.dev/) and the new runes API
- Powered by [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with modern CSS practices
