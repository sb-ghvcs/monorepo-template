# Monorepo Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready monorepo template with comprehensive tooling for full-stack development. This template provides a robust foundation for building scalable applications with Python backend and Next.js frontend.

## 🏗️ Architecture

This monorepo follows a services-based architecture:

```
monorepo-template/
├── services/
│   ├── server/          # Python FastAPI backend
│   └── ui/             # Next.js frontend
├── scripts/            # Build and utility scripts
├── .husky/            # Git hooks
├── .github/           # GitHub workflows
└── .devcontainer/     # Development container config
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 20.17.0 (specified in `.nvmrc`)
- **Python**: Version 3.11+ (required for server)
- **Poetry**: For Python dependency management
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd monorepo-template
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Install Python dependencies**
   ```bash
   cd services/server
   poetry install
   cd ../..
   ```

4. **Setup Git hooks**
   ```bash
   npm run prepare
   ```

### Development

Start both services in development mode:

```bash
# Start the backend server
npm run dev:server

# Start the frontend (in a new terminal)
npm run dev:ui
```

## 🛠️ Development Tools & Configuration

### Code Quality & Linting

#### TypeScript/JavaScript (Frontend)
- **ESLint**: Vercel style guide with strict TypeScript rules
- **Prettier**: Code formatting with import sorting
- **TypeScript**: Strict type checking

**Configuration Files:**
- `.eslintrc.js` - ESLint configuration
- `prettier.config.mjs` - Prettier configuration
- `tsconfig.json` - TypeScript configuration

#### Python (Backend)
- **Black**: Code formatting (120 character line length)
- **Flake8**: Linting with custom rules
- **Pylint**: Advanced linting with relaxed rules for development
- **MyPy**: Strict type checking

**Configuration Files:**
- `.flake8` - Flake8 configuration
- `.pylintrc` - Pylint configuration
- `mypy.ini` - MyPy configuration
- `pyproject.toml` - Poetry and Black configuration

### Git Hooks & Commit Standards

#### Husky Hooks
- **Pre-commit**: Runs lint-staged and version updates
- **Commit-msg**: Validates commit message format

#### Commit Message Convention
Follows [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Revert commits

**Example:**
```bash
git commit -m "feat(ui): add user authentication component"
```

### Lint-Staged Configuration

Automatically formats and lints staged files:

- **JavaScript/TypeScript**: Prettier + ESLint
- **Python**: Black + Pylint

### Version Management

- **Node.js**: `.nvmrc` specifies version 20.17.0
- **NPM**: `.npmrc` enforces engine-strict mode
- **Auto-versioning**: Scripts automatically update version numbers

## 📁 Project Structure

### Root Configuration

```
├── package.json              # Root npm configuration
├── pyproject.toml           # Root Python configuration
├── .eslintrc.js            # ESLint configuration
├── prettier.config.mjs     # Prettier configuration
├── .flake8                 # Flake8 configuration
├── .pylintrc              # Pylint configuration
├── mypy.ini               # MyPy configuration
├── .commitlintrc.js       # Commit message validation
├── .lintstagedrc.js       # Pre-commit hooks
├── .husky/                # Git hooks
├── scripts/               # Build and utility scripts
└── services/              # Application services
```

### Services

#### Frontend (`services/ui/`)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Development**: Turbopack for fast builds

#### Backend (`services/server/`)
- **Framework**: FastAPI (Python)
- **Package Manager**: Poetry
- **Language**: Python 3.11+
- **Type Checking**: MyPy with strict settings

## 🔧 Available Scripts

### Root Level Scripts

```bash
# Development
npm run dev:server     # Start backend server
npm run dev:ui         # Start frontend development server

# Code Quality
npm run lint           # Lint all code (Python + TypeScript)
npm run format         # Format all code (Black + Prettier)

# Utilities
npm run clean          # Clean build artifacts
npm run postinstall    # Post-installation setup
```

### Frontend Scripts (`services/ui/`)

```bash
npm run dev            # Start development server with Turbopack
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Lint TypeScript/JavaScript code
```

### Backend Scripts (`services/server/`)

```bash
poetry run server      # Start the server
poetry run black .     # Format Python code
poetry run mypy .      # Type check Python code
poetry run flake8 .    # Lint Python code
poetry run pylint .    # Advanced Python linting
```

## 🎯 Code Quality Standards

### TypeScript/JavaScript
- **Functional Components**: Only functional components with hooks
- **Type Annotations**: Required for all functions and variables
- **Import Sorting**: Automatic import organization
- **Strict ESLint**: Vercel style guide with custom rules
- **Prettier**: Consistent code formatting

### Python
- **Type Hints**: Required for all functions and variables
- **MyPy**: Strict type checking enabled
- **Black**: 120 character line length
- **Flake8**: Custom rules for development
- **Pylint**: Advanced linting with relaxed rules

### General Standards
- **Tests**: Required for all new code
- **Documentation**: Inline comments and docstrings
- **Git Hooks**: Automatic formatting and linting
- **Commit Messages**: Conventional commits format

## 🚀 Deployment

### Frontend Deployment
The Next.js application can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

### Backend Deployment
The Python FastAPI application can be deployed to:
- **Railway**
- **Render**
- **Heroku**
- **AWS Lambda**
- **Self-hosted**

## 🔄 CI/CD

The repository includes GitHub Actions workflows for:
- **Linting**: Automated code quality checks
- **Testing**: Automated test execution
- **Build**: Automated build verification
- **Deployment**: Automated deployment to staging/production

## 🛡️ Security

- **Dependency Scanning**: Automated vulnerability scanning
- **Code Scanning**: GitHub CodeQL analysis
- **Secret Scanning**: Automated secret detection
- **License Compliance**: Automated license checking

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Development Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Black](https://black.readthedocs.io/)
- [MyPy](https://mypy.readthedocs.io/)
- [Poetry](https://python-poetry.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the coding standards
4. Commit your changes: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive license that allows for:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ✅ Patent use

The only requirement is that the license and copyright notice must be included in all copies or substantial portions of the software.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/monorepo-template/issues) page
2. Create a new issue with detailed information
3. Follow the issue template for better assistance

---

**Happy Coding! 🚀**
