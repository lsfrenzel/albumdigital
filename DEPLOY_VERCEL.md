# Deploy no Vercel

Este projeto está configurado para ser hospedado no Vercel.

## Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. [Vercel CLI](https://vercel.com/docs/cli) instalado (opcional, para deploy via terminal)

## Passos para Deploy

### Opção 1: Deploy via Dashboard (Recomendado)

1. Faça login no [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em "Add New Project"
3. Importe o repositório do seu projeto
4. O Vercel detectará automaticamente as configurações do `vercel.json`
5. Configure as variáveis de ambiente necessárias (veja abaixo)
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

## Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no painel do Vercel:

- `DATABASE_URL`: String de conexão do banco de dados (use Vercel Postgres ou outro serviço)

### Configurando Variáveis de Ambiente:

1. Vá para o projeto no Vercel Dashboard
2. Clique em "Settings"
3. Vá para "Environment Variables"
4. Adicione cada variável necessária

## Banco de Dados

Este projeto usa PostgreSQL. Recomendações para o Vercel:

### Opção 1: Vercel Postgres (Recomendado)
1. No dashboard do projeto, vá em "Storage"
2. Clique em "Create Database"
3. Selecione "Postgres"
4. O Vercel configurará automaticamente a `DATABASE_URL`

### Opção 2: Serviço Externo
Use serviços como:
- [Neon](https://neon.tech)
- [Supabase](https://supabase.com)
- [PlanetScale](https://planetscale.com)
- [Railway](https://railway.app)

## Estrutura do Projeto

- `/api/[...path].ts` - Função serverless catch-all que roteia todas as requisições /api/* para o Express
- `/server` - Lógica do servidor Express (routes.ts, storage.ts)
- `/dist/public` - Build do frontend (gerado automaticamente pelo Vite)
- `vercel.json` - Configurações do Vercel

### Como funciona o roteamento

O Vercel roteia todas as requisições `/api/*` para a função serverless em `/api/[...path].ts`, que por sua vez passa as requisições para o Express com as rotas definidas em `/server/routes.ts`.

## Depois do Deploy

1. Acesse a URL fornecida pelo Vercel
2. Configure um domínio customizado (opcional) em Settings > Domains
3. Monitore logs e analytics no dashboard

## Troubleshooting

### Erro de build
- Verifique se todas as dependências estão no `package.json`
- Verifique os logs de build no Vercel Dashboard

### API não funciona
- Verifique se as variáveis de ambiente estão configuradas
- Verifique os logs de função no Vercel Dashboard

### Banco de dados
- Verifique se a `DATABASE_URL` está correta
- Execute `npm run db:push` localmente primeiro para testar

## Recursos Úteis

- [Documentação do Vercel](https://vercel.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
