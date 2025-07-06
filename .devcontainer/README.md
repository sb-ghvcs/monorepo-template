# CouchCinema Development Container

This repository includes a complete development container setup for the CouchCinema monorepo, which includes:

- **UI Service**: Next.js frontend application
- **Server Service**: FastAPI backend application

## Features

### Development Environment

- **Ubuntu 22.04** base image
- **Node.js 20.17.0** (matching `.nvmrc`)
- **Python 3.11+** with Poetry for dependency management
- **Zsh** with Oh My Zsh for enhanced terminal experience
- **Git** and **GitHub CLI** for version control

### VS Code Integration

- Pre-configured extensions for Python, TypeScript, React, and more
- Integrated linting and formatting (ESLint, Prettier, Black, Pylint, MyPy)
- Debugging configurations for both services
- Task definitions for common development commands

### Port Forwarding

- **Port 3000**: Next.js UI development server
- **Port 8000**: FastAPI backend server

## Getting Started

### Prerequisites

- Docker Desktop or Docker Engine
- Visual Studio Code with Dev Containers extension

### Opening the Development Container

1. Open the repository in VS Code
2. When prompted, click "Reopen in Container" or use the Command Palette:
   - `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Dev Containers: Reopen in Container"
3. Wait for the container to build and start

### Initial Setup

The container will automatically run:

```bash
npm install && poetry install
```

This installs all dependencies for both services.

## Development Workflow

### Running Services

#### Option 1: VS Code Tasks (Recommended)

- Open Command Palette (`Ctrl+Shift+P`)
- Type "Tasks: Run Task"
- Choose from:
  - "Start UI Dev Server" - Starts Next.js on port 3000
  - "Start Backend Dev Server" - Starts FastAPI on port 8000
  - "Start Both Services" - Starts both services in parallel

#### Option 2: Terminal Commands

```bash
# Start UI (Next.js)
npm run dev:ui

# Start Backend (FastAPI)
npm run dev:server

# Format code
npm run format

# Clean project
npm run clean
```

### Debugging

Use the VS Code debugger with pre-configured launch configurations:

- **Debug FastAPI Server**: Debug the Python backend
- **Debug Next.js UI**: Debug the frontend
- **Debug Both Services**: Debug both services simultaneously

### Project Structure

```
.
├── .devcontainer/           # Development container configuration
│   ├── devcontainer.json    # VS Code devcontainer settings
│   ├── docker-compose.yml   # Docker Compose configuration
│   ├── Dockerfile          # Container image definition
│   └── zshrc               # Zsh configuration
├── .vscode/                # VS Code workspace settings
│   ├── tasks.json          # Task definitions
│   └── launch.json         # Debug configurations
├── services/               # Service implementations
│   ├── ui/                 # Next.js frontend
│   └── server/             # FastAPI backend
├── scripts/                # Utility scripts
├── package.json            # Root package.json (monorepo)
└── pyproject.toml          # Poetry configuration
```

## Container Details

### Installed Tools

- **System**: curl, wget, git, build-essential, vim, nano, htop, jq
- **Node.js**: npm, pnpm, yarn (global packages)
- **Python**: Poetry, pip, venv
- **Shell**: Zsh with Oh My Zsh

### Volume Mounts

- Source code: `/workspace` (cached)
- SSH keys: `/home/dev/.ssh` (read-only)
- Git config: `/home/dev/.gitconfig` (read-only)

### Environment Variables

- `NODE_ENV=development`
- `PYTHONPATH=/workspace`
- `SHELL=/bin/zsh`

## Troubleshooting

### Container Won't Start

- Ensure Docker is running
- Check Docker Desktop settings for sufficient resources
- Try rebuilding the container: "Dev Containers: Rebuild Container"

### Dependencies Not Installing

- Check if `package.json` and `pyproject.toml` exist
- Manually run: `npm install && poetry install`
- Check for network connectivity issues

### Port Conflicts

- Ensure ports 3000 and 8000 are not in use on your host machine
- Modify port mappings in `docker-compose.yml` if needed

### Performance Issues

- Increase Docker Desktop memory allocation
- Use volume caching (already configured)
- Consider using WSL2 backend on Windows

## Customization

### Adding VS Code Extensions

Edit `.devcontainer/devcontainer.json` and add extension IDs to the `extensions` array.

### Modifying Container

Edit `.devcontainer/Dockerfile` to install additional tools or modify the environment.

### Changing Ports

Update port mappings in both `docker-compose.yml` and `devcontainer.json`.

## Support

For issues specific to the development container setup, check:

1. Docker Desktop logs
2. VS Code Dev Containers output panel
3. Container build logs in the terminal

For project-specific issues, refer to the main project documentation.
