import os
import subprocess
import sys
from typing import List, Optional

is_windows = os.name == "nt"


def lint_ui(files: Optional[List[str]] = None) -> None:
    print("Linting UI")
    os.chdir("services/ui")
    if files:
        # Only include files in services/ui and make them relative
        rel_files = [f[len("services/ui/") :] for f in files if f.startswith("services/ui/")]
        if rel_files:
            subprocess.run(["npm", "run", "lint", "--", *rel_files], check=True, shell=is_windows)
        else:
            print("No valid UI files to lint.")
    else:
        subprocess.run(["npm", "run", "lint"], check=True, shell=is_windows)
    os.chdir("../../")


def lint_server(files: Optional[List[str]] = None) -> None:
    print("Linting server")
    if files:
        subprocess.run(
            ["poetry", "run", "flake8", "--config=./.flake8", *files],
            check=True,
            shell=is_windows,
        )
        subprocess.run(
            ["poetry", "run", "pylint", "--rcfile=./.pylintrc", *files],
            check=True,
            shell=is_windows,
        )
        subprocess.run(
            ["poetry", "run", "mypy", "--config=./mypy.ini", *files],
            check=True,
            shell=is_windows,
        )
    else:
        subprocess.run(
            ["poetry", "run", "flake8", "--config=./.flake8", "."],
            check=True,
            shell=is_windows,
        )
        subprocess.run(
            ["poetry", "run", "pylint", "--rcfile=./.pylintrc", "."],
            check=True,
            shell=is_windows,
        )
        subprocess.run(
            ["poetry", "run", "mypy", "--config=./mypy.ini", "."],
            check=True,
            shell=is_windows,
        )
    os.chdir("../../")


def is_ui_file(path: str) -> bool:
    return path.startswith("services/ui/") or path.endswith((".js", ".jsx", ".ts", ".tsx"))


def is_server_file(path: str) -> bool:
    return path.startswith("services/server/") or path.endswith(".py")


def main(args: List[str]) -> None:
    if len(args) >= 3 and args[1] in ("ui", "server"):
        # e.g. lint.py ui file1 file2 ...
        target = args[1]
        files = args[2:]
        if target == "ui":
            lint_ui(files if files else None)
        elif target == "server":
            lint_server(files if files else None)
        return

    if len(args) == 1:
        lint_ui()
        lint_server()
        return

    # If only file paths are given, auto-detect
    files = args[1:]
    ui_files = [f for f in files if is_ui_file(f)]
    server_files = [f for f in files if is_server_file(f)]
    if ui_files:
        lint_ui(ui_files)
    if server_files:
        lint_server(server_files)
    if not ui_files and not server_files:
        print("No valid files detected for linting.")
        sys.exit(1)


if __name__ == "__main__":
    main(sys.argv)
