# Design System Assignment

This is a simple design system for apps. It has Typography, Text Input, and Toast components. Built with React, TypeScript, TailwindCSS, and Storybook.

## 📖 What’s Inside

- **Typography**: For headings (H1–H6), paragraphs, labels, captions, and helper text.
- **Text Input**: A form input with states like default, hover, focus, error, and disabled.
- **Toast**: A popup message (info, error, success, warning).

All components work on different screen sizes, support light/dark mode, and are accessible.

## 📂 Folder Structure

├── DESIGN-System/
│   ├── .storybook/
│   │   └── main.ts           # Storybook configuration
│   ├── node_modules/         # Dependencies
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/           # Images, icons, etc.
│   │   ├── components/
│   │   │   ├── TextInput/    # Data Entry component
│   │   │   │   ├── index.ts
│   │   │   │   ├── TextInput.stories.tsx
│   │   │   │   ├── TextInput.tsx
│   │   │   │   └── TextInput.types.ts
│   │   │   └── Toast/        # Feedback component
│   │   │       ├── index.ts
│   │   │       ├── Toast.stories.tsx
│   │   │       ├── Toast.tsx
│   │   │       └── Toast.types.ts
│   │   ├── Typography/       # Foundational element
│   │   │   ├── index.ts
│   │   │   ├── Typography.stories.tsx
│   │   │   ├── Typography.tsx
│   │   │   └── Typography.types.ts
│   │   ├── styles/
│   │   │   ├── tailwind.css  # TailwindCSS setup
│   │   │   └── theme.ts      # Theming tokens (light/dark mode, brand tokens)
│   │   ├── utils/
│   │   │   ├── App.css       # Global styles
│   │   │   ├── App.tsx       # App entry point
│   │   │   ├── main.tsx      # Main React entry
│   │   │   └── vite-env.d.ts # Vite TypeScript env
│   ├── .gitignore            # Git ignore rules
│   ├── eslint.config.js      # ESLint configuration
│   ├── index.html            # HTML entry point
│   ├── package.json          # Dependencies and scripts
│   ├── package-lock.json     # Dependency lock file
│   ├── README.md             # Project documentation
│   ├── tsconfig.app.json     # TypeScript app config
│   ├── tsconfig.json        # TypeScript config
│   ├── tsconfig.node.json    # TypeScript node config
│   ├── vite.config.ts        # Vite configuration

## 🛠️ How to Run

1. **Get the Code**:
   ```bash
   git clone https://github.com/technical-jitendra-kumar/Design_system.git
   cd DESIGN-System
   ```

2. **Install Stuff**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run dev
   ```

4. **See Components in Storybook**:
   ```bash
   npm run storybook
   ```
   Open `http://localhost:6006` in your browser.

## 🌟 Features

- **Typography**: Different text styles, light/dark mode, accessible.
- **Text Input**: Works with keyboard, has error states, and icons.
- **Toast**: Shows messages, supports different types, and is accessible.

## 📜 Storybook Docs

Storybook has details for each component:
- Name and description
- Props (settings)
- Examples
- States (like hover, error)
- Accessibility info
- Theming and responsive notes

## 📦 Sharing

- **GitHub**: https://github.com/technical-jitendra-kumar/Design_system
- **Storybook Link**: [Add after deploying on Chromatic/Vercel]
- **Screenshots**:

![Design Demo page](./src/assets/demopage.png)

![StoryBook](./src/assets/storybook.png)