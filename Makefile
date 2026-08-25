.PHONY: dev test lint setup format

dev:
    npm run dev

test:
    npm run test

lint:
    npm run lint && npm run format

setup:
    npm install
    cp .env.example .env
    mkdir -p data
    touch data/projeto.db
    npm run test

format:
    npm run format
