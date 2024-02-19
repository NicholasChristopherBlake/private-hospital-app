# Development stages

## Tech Stack:

- pnpm
- React 18
- React Router 6
- Webpack 5 (Statoscope for bundle analysis)
- State: Redux Toolkit
- Linters and styling: ESLint, Stylelint, Prettier
- UI Library: Storybook
- Testing: Jest, React Testing Library, Storybook + Chromatic
- Fetching: axios, RTK Query

### Stage 1. Configuration

- Add Webpack (done)
- Add Typescript (done)
- Add CSS modules (done)
- Add absolute imports (done)
- Fix CSS prod build (minimize css), fix modules filenames
- Add React (done)
- Add React Router DOM (need to edit Root, left as it it for now)
- Add clsx (done)
- Add Jest (done)
- Add React Testing Library (done)
- Add babel loader and babel (mostly, for jest) (done)
- Add renderTestComponent()
- Add Storybook and decorators (done for now)
- Add ESLint, Prettier, Stylelint (add commands for prettier to package.json). Add onSave option, configure rules, add Stylelint. Fix ESLint rules problems (done)
- Add i18next (done)
- Add Chromatic for screenshot testing (done)
- Create CI pipeline with Github Actions (done)
- Add Husky pre-commit (done)
- Add JSON Server and auth (done)
- Add RTK
- Add axios
- Hide Chromatic key from package.json somewhere
- Add SvgLoader and FileLoader (done, need to also fix errors in storybook and testing)

### Stage 2. Basic components, UI Kit

- Add ThemeSwitcher (need to memoize, works for now)
- Add LangSwitcher (done)
- Add all basic UI components
- Add stories to all components
- Add tests to widgets and features
- Add Form for login
