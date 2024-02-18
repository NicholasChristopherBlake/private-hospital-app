# Development stages

## Tech Stack:

- pnpm (testing)
- React 18
- React Router 6
- Webpack 5 (Statoscope for bundle analysis)
- Linters and styling: ESLint, Stylelint, Prettier

### Stage 1. Configuration

- Add Webpack (done)
- Add Typescript (done)
- Add CSS modules (done)
- Add absolute imports (done)
- Fix CSS prod build (minimize css), fix modules filenames
- Add React (done)
- Add React Router DOM (need to edit Root and Error files)
- Add clsx (done)
- Add Jest (done)
- Add React Testing Library (done)
- Add babel loader and babel (mostly, for jest) (done)
- Add renderTestComponent()
- Add Storybook and decorators
- Add ESLint, Prettier, Stylelint (add commands for prettier to package.json). Add onSave option, configure rules, add Stylelint. Fix ESLint rules problems
- Add i18next

### Stage 2. Basic components, UI Kit

- Add ThemeSwitcher (need to memoize, works for now)
- Add LangSwitcher
- Add all basic UI components
- Add stories to all components
- Add tests to widgets and features
