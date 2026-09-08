# iCloud

A tool for safely working with the user's iCloud Drive through its local
macOS filesystem.

The plugin contains procedures and a guarded command-line tool. It does not
contain the private files themselves. Choose an archive directory from the current request; no personal directory
layout is assumed. The command examples below use an illustrative archive.

## Skill

| Skill | Purpose |
| --- | --- |
| `icloud-drive` | Browse exact folders, verify files, and copy individual files without overwriting existing data. |

## Command-line tool

```bash
./scripts/icloud-drive root
./scripts/icloud-drive list Records/Identity
./scripts/icloud-drive status Records/Identity/documents.yml
./scripts/icloud-drive checksum Records/Identity/documents.yml
./scripts/icloud-drive copy-file ./source.pdf Records/Identity/documents/source.pdf
```

`copy-file` never removes the source. It rejects paths outside iCloud Drive,
refuses to overwrite a different file, and verifies byte parity before making
the destination visible.

## Install

```bash
claude plugin install icloud@package-manager
```

```bash
codex plugin add icloud@package-manager
```
