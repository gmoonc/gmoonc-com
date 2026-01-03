# Goalmoon Ctrl (gmoonc)

Kit plugável para construir dashboards com autenticação e RBAC, compatível com Next.js e Vite, agnóstico de backend.

## Links oficiais

- Site: https://gmoonc.com
- GitHub: https://github.com/gmoonc/gmoonc-packages
- NPM (gmoonc): https://www.npmjs.com/package/gmoonc
- NPM (@gmoonc/core): https://www.npmjs.com/package/@gmoonc/core

## Por que existe

Montar um dashboard completo do zero leva tempo e esforço considerável. Desenvolvedores frequentemente precisam implementar menu de navegação, roteamento, controle de acesso baseado em roles (RBAC) e integração com autenticação, tarefas que se repetem em cada novo projeto.

O gmoonc resolve isso oferecendo uma abordagem config-driven: você define o menu através de uma configuração simples, e cada item do menu vira automaticamente uma rota/página base. O sistema gerencia o controle de acesso por roles, permitindo que você se concentre em construir as funcionalidades do dashboard ao invés de infraestrutura repetitiva.

## Principais conceitos

### Menu

O menu é definido através de itens (MenuItem) que contêm:
- id: identificador único do item
- label: texto exibido no menu
- path: rota associada ao item
- roles: array opcional de roles que têm acesso ao item

### RBAC

O controle de acesso baseado em roles funciona por item de menu. Cada item pode ter uma lista de roles permitidas. O gmoonc valida o acesso automaticamente, mas a implementação da verificação de roles fica a cargo do desenvolvedor (agnóstico de backend).

### Config

A configuração é feita através da função `defineConfig`, que recebe o nome da aplicação e a lista de itens do menu. Esta configuração centraliza toda a estrutura de navegação e acesso do dashboard.

### Plugável

O gmoonc é projetado para ser plugável, sem lock-in. Você pode usar adapters para diferentes frameworks (Next.js, Vite com React Router, etc.) e integrar com qualquer backend de autenticação, mantendo total flexibilidade na arquitetura.

## Quickstart

Instale o pacote core:

```bash
npm i @gmoonc/core
```

Exemplo mínimo em TypeScript:

```typescript
import { defineConfig } from "@gmoonc/core";

export const config = defineConfig({
  appName: "Meu Dashboard",
  menu: [
    { id: "home", label: "Home", path: "/" },
    { id: "admin", label: "Admin", path: "/admin", roles: ["admin"] }
  ]
});
```

Após definir a configuração:

- Conecte a configuração ao sistema de roteamento do seu framework (Next.js ou React Router no Vite)
- Crie as páginas/rotas correspondentes aos paths definidos no menu
- Implemente a proteção da UI usando as roles definidas em cada item do menu

## Uso em Next e em Vite

### Next.js

No Next.js, a configuração do gmoonc se integra ao sistema de roteamento do framework. Você pode usar a configuração para gerar rotas dinamicamente ou mapear manualmente os paths do menu para as páginas do Next.js. O controle de acesso pode ser implementado usando middleware ou verificações no lado do servidor, utilizando as roles definidas na configuração.

### Vite

No Vite, você pode usar a configuração com React Router ou outro sistema de roteamento de sua escolha. A configuração do menu serve como fonte de verdade para as rotas disponíveis. Você mapeia os paths da configuração para os componentes de rota do React Router e implementa a verificação de roles no cliente ou através de chamadas ao backend.

## Pacotes

| Pacote | Descrição |
|--------|-----------|
| gmoonc | Meta package que agrupa os pacotes principais do gmoonc |
| @gmoonc/core | Configuração e tipos TypeScript para definir menu e RBAC |

### Pacotes planejados

Os seguintes pacotes estão planejados para futuras versões:

- @gmoonc/ui: Componentes de UI reutilizáveis para dashboards
- @gmoonc/router: Adapters para integração com sistemas de roteamento
- Adapters: Pacotes específicos para Next.js, Vite e outros frameworks

## Versionamento e compatibilidade

O gmoonc está em versão inicial (0.x), o que significa que podem ocorrer mudanças na API antes da estabilização. Após a versão 1.0, o projeto seguirá Semantic Versioning (semver) para garantir compatibilidade e comunicar mudanças de forma clara.

## Contribuição

Para rodar o monorepo localmente:

1. Execute `npm install` na raiz do repositório
2. Execute `npm run dev` no workspace `apps/sicoop-app`

Contribuições são bem-vindas através de Pull Requests. Para reportar bugs ou sugerir features, abra uma issue no GitHub. Mantenha o código limpo, documentado e siga os padrões já estabelecidos no projeto.

## Segurança

Não commite arquivos `.env` ou informações sensíveis no repositório. Chaves de API e credenciais nunca devem ser expostas no frontend. Sempre valide e sanitize dados no backend, mesmo que o gmoonc forneça controle de acesso no frontend.

Para reportar vulnerabilidades de segurança, abra uma issue no GitHub marcando-a como security ou entre em contato através dos canais oficiais do projeto.

## Licença

MIT
