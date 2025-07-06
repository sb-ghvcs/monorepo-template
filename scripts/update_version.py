import json
import re
from typing import Any


def read_version(file_path: str) -> str:
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read().strip()


def update_json_version(file_path: str, version: str) -> None:
    with open(file_path, "r+", encoding="utf-8") as file:
        data: dict[str, Any] = json.load(file)
        data["version"] = version
        file.seek(0)
        json.dump(data, file, indent=2)
        file.truncate()


def update_toml_version(file_path: str, version: str) -> None:
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    new_content = re.sub(r'^version = ".*"', f'version = "{version}"', content, flags=re.MULTILINE)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(new_content)


def main() -> None:
    version_file = "version"
    version = read_version(version_file)

    update_json_version("package.json", version)
    update_toml_version("pyproject.toml", version)
    update_json_version("services/ui/package.json", version)
    update_toml_version("services/server/pyproject.toml", version)


if __name__ == "__main__":
    main()
