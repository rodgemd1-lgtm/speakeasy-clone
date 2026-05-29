.PHONY: smoke doctor info capabilities help

REPO_SLUG := speakeasy-clone
BIN        := ./bin/$(REPO_SLUG)

## smoke: run deterministic local smoke checks (no network, no clone required)
smoke:
	bash $(BIN) smoke

## doctor: check dependencies and remote reachability
doctor:
	bash $(BIN) doctor

## info: show repo identity and source-of-truth routing
info:
	bash $(BIN) info

## capabilities: show the capability contract
capabilities:
	bash $(BIN) capabilities

## help: list available make targets
help:
	@grep -E '^## ' Makefile | sed 's/## //' | column -t -s':'
