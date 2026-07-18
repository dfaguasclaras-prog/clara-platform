# Clara Platform

Monorepo da Clara Platform, gerenciado com [Turborepo](https://turbo.build/) e pnpm workspaces.

## Estrutura

```
clara-platform/
├── apps/
│   ├── admin/       # Painel administrativo (Next.js + TypeScript + Tailwind)
│   └── api/         # API (NestJS)
├── packages/
│   ├── shared/      # Tipos e utilitários compartilhados
│   └── database/    # Client Prisma e schema do banco de dados
├── docker-compose.yml
├── turbo.json
└── pnpm-workspace.yaml
```

## Pré-requisitos

- Node.js >= 18
- pnpm >= 9 (`npm install -g pnpm`)
- Docker e Docker Compose

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/dfaguasclaras-prog/clara-platform.git
   cd clara-platform
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Copie o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

4. Suba o PostgreSQL via Docker Compose:
   ```bash
   docker compose up -d
   ```

5. Gere o client do Prisma e rode as migrations:
   ```bash
   pnpm --filter @clara-platform/database db:generate
   pnpm --filter @clara-platform/database db:migrate
   ```

## Rodando em desenvolvimento

Para rodar todos os apps em modo dev (via Turborepo):

```bash
pnpm dev
```

- Admin (Next.js): http://localhost:3000
- API (NestJS): http://localhost:3001
- Endpoint de health check da API: http://localhost:3001/health

## Scripts principais

| Comando      | Descrição                                  |
|--------------|----------------------------------------------|
| `pnpm dev`   | Roda todos os apps em modo desenvolvimento    |
| `pnpm build` | Builda todos os apps e pacotes                |
| `pnpm lint`  | Roda o lint em todo o monorepo                |
| `pnpm test`  | Roda os testes                                |

## CI

O build é validado automaticamente via GitHub Actions em pushes e pull requests para `main` (veja `.github/workflows/build.yml`).
