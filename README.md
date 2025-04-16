Design System
A scalable, reusable design system built with React, TypeScript, TailwindCSS, and Storybook.
Setup

Clone the repository:git clone <repository-url>


Install dependencies:npm install


Run the development server:npm start


Run Storybook:npm run storybook



Components

Typography: Headings, paragraphs, labels, captions, and helper text with theming and responsive support.
TextInput: Customizable text input with states (default, error, disabled) and icon support.
Toast: Temporary notification with variants (info, success, error, warning) and auto-dismiss.

Storybook
Deployed Storybook: Link to Chromatic/Vercel
Folder Structure
src/
├── components/
│   ├── Typography/
│   ├── TextInput/
│   ├── Toast/
├── styles/
├── utils/

Accessibility

Components include ARIA roles and keyboard navigation.
Typography ensures contrast ratios.
Toast uses ARIA-live for screen reader support.

Deployment

Storybook is deployed via Chromatic.
Code is hosted on GitHub: Repository Link

