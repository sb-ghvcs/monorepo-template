FROM ubuntu:22.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies and add deadsnakes PPA for Python 3.12
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    build-essential \
    software-properties-common \
    ca-certificates \
    gnupg \
    lsb-release \
    zsh \
    vim \
    nano \
    htop \
    unzip \
    zip \
    jq \
    iproute2 \
    procps \
    sudo \
    && add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update \
    && apt-get install -y \
    python3.12 \
    python3.12-dev \
    && rm -rf /var/lib/apt/lists/*

# Bootstrap pip manually (since ensurepip is not present in deadsnakes)
RUN wget -O /tmp/get-pip.py https://bootstrap.pypa.io/get-pip.py \
    && python3.12 /tmp/get-pip.py \
    && rm /tmp/get-pip.py

# Update alternatives to make python3.12 the default python
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1 \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1

# Install Node.js (v20.x)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install latest npm globally
RUN npm install -g npm@latest

# Install Poetry globally (will be available for all users)
RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/usr/local/poetry python3 - \
    && ln -s /usr/local/poetry/bin/poetry /usr/local/bin/poetry

# Create user
ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME -s /bin/zsh \
    && echo "$USERNAME ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME

# Create directories and set up user home permissions
RUN sudo mkdir -p /home/$USERNAME/.npm /home/$USERNAME/.config/pypoetry \
    && sudo chown -R $USERNAME:$USERNAME /home/$USERNAME \
    && npm config set cache /home/$USERNAME/.npm \
    && npm config set prefix /home/$USERNAME/.npm-global

# Configure Poetry (using the globally installed version)
RUN poetry config virtualenvs.create true

# Set working directory
WORKDIR /workspace

# Configure git
RUN git config --global init.defaultBranch main

# Install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Set the default shell to zsh
ENV SHELL=/bin/zsh

# Expose ports for development
EXPOSE 3000 8000

# Keep container running
CMD ["tail", "-f", "/dev/null"]
