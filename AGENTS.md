# Repository guidance

- This repository is the canonical source for the `icloud` tool plugin.
- Keep the Codex and Claude manifests synchronized.
- The plugin owns procedures, never the user's archived files. Private records live
  in iCloud Drive and must not be copied into Git.
- Treat `Records/Identity` as highly sensitive. Read the minimum exact path and
  never publish or send its contents without the user's explicit current-task
  authorization.
- Copy before deleting a source, verify byte parity, and treat source removal as
  a separate authorized operation.
- Local placement in iCloud Drive is not proof that Apple's remote sync has
  completed.
- Bump the plugin version for released behavior changes and run `npm test`
  before publishing.
