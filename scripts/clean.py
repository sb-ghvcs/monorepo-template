import shutil
from pathlib import Path


def clean_directory(path: Path) -> None:
    if path.exists() and path.is_dir():
        shutil.rmtree(path)
        print(f"Cleaned {path}")


def main() -> None:
    # Clean root dist
    print("Cleaning root...")
    clean_directory(Path("dist"))
    clean_directory(Path("build"))

    # Clean UI Build and Dist
    print("Cleaning UI...")
    ui_path = Path("services/ui")
    clean_directory(ui_path / ".next")

    # Clean Server Build and Dist
    print("Cleaning Server...")
    server_path = Path("services/server")
    clean_directory(server_path / "build")
    clean_directory(server_path / "dist")


if __name__ == "__main__":
    main()
