import os
import shutil
import subprocess

IS_WINDOWS = os.name == "nt"

# Install Poetry Dependencies
subprocess.run(["poetry", "lock"], check=True, shell=IS_WINDOWS)
subprocess.run(["poetry", "install"], check=True, shell=IS_WINDOWS)

# Change directory to services/ui and install npm packages
subprocess.run(["npm", "install"], cwd="services/ui", check=True, shell=IS_WINDOWS)

# Change directory to services/server and install poetry dependencies
subprocess.run(["poetry", "install"], cwd="services/server", check=True, shell=IS_WINDOWS)

# Copy the entire assets folder to services/ui/src/app/assets
assets_src = os.path.join("assets")
assets_dst = os.path.join("services", "ui", "src", "app", "assets")
if os.path.exists(assets_dst):
    shutil.rmtree(assets_dst)
shutil.copytree(assets_src, assets_dst)

# Explicitly copy favicon.ico to services/ui/src/app/favicon.ico
favicon_src = os.path.join(assets_src, "favicon.ico")
favicon_dst = os.path.join("services", "ui", "src", "app", "favicon.ico")
shutil.copyfile(favicon_src, favicon_dst)
