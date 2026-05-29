# Copilot / Agent Instructions — speakeasy-clone

## Repo Identity

- **Slug**: speakeasy-clone
- **Lane**: client-work
- **Status**: consolidation-candidate
- **Purpose**: Static mirror of speakeasybarberlounge.com; design-language and asset harvest target.
- **Source of truth**: QNAP Gitea first (`ssh://git@nas94f2ae.tail4d96b3.ts.net:2222/rig/speakeasy-clone.git`), GitHub mirror second.

## V10 Product Promise

This repo is a design-language and asset archive for a client barbershop site.
Its V10 state is either a clean archived asset bundle with a ProofPacket, or a
promoted canonical design-system component in `speakeasy-barbershop`.

## Agent Scope

Agents working in this repo **may**:
- Read, analyze, and summarize any tracked file.
- Propose edits to static HTML, CSS, JS, and design-language JSON files.
- Add or update proof files under `proof/`.
- Run `make smoke` or `bash bin/speakeasy-clone smoke` as the first deterministic check.
- Suggest CLI or MCP surface expansions in `cli/manifest.json` and `mcp/manifest.json`.

Agents **must not**:
- Print, log, or commit secrets, tokens, cookies, or browser session state.
- Deploy, publish, or push to any external service.
- Reset, delete, or overwrite existing user content.
- Implement production features without a sealed DoneContract.
- Merge to `main` without a human approval step.

## Model Routing

| Task | Preferred model |
| --- | --- |
| Design-language analysis, CSS audit | Any capable model |
| Code generation (HTML/CSS/JS/shell) | Any capable model |
| Proof writing and documentation | Any capable model |
| Security review | Any capable model + human approval |
| Deployment or destructive ops | **Human only** |

## Quality Gates

1. `make smoke` must exit 0 before any PR is merged.
2. All changed shell scripts pass `bash -n` (syntax check).
3. All changed JSON files parse without error (`python3 -m json.tool`).
4. No secrets are committed (manual review for any `.env`, token, or credential pattern).

## First Deterministic Smoke Command

```bash
make smoke
# or without make:
bash bin/speakeasy-clone smoke
```

This command is local, network-free, and safe to run before any edit.

## MCP Surface

Defined in `mcp/manifest.json`. This repo exposes read-only tools for
design-language inspection. No mutations, no credentials, no external calls.

## Weekly Improvement Loop

- Trigger: `.github/workflows/weekly-smoke.yml` (schedule: Monday 06:00 UTC).
- Action: run `make smoke`, write result to `proof/looper-v10-cockpit/smoke-latest.txt`.
- Human approval required before: archive action, consolidation merge, or any destructive step.

## Proof Paths

- `proof/looper-v10-cockpit/v10-design.md` — V10 design output (this cycle).
- `proof/looper-v10-cockpit/smoke-latest.txt` — latest smoke run output.

## Boundaries (repeat for clarity)

- Never print secrets, tokens, private exports, cookies, or browser session state.
- Never deploy, publish, send messages, or activate new schedules.
- Never reset, clean, delete, or overwrite user work.
- Never implement production features without a later sealed DoneContract.
