# AeroTopo - Site

Site da AeroTopo desenvolvido com React, TypeScript e Vite.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração Inicial

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Configure o GitHub Pages:**
   - Vá para Settings > Pages no seu repositório
   - Selecione "GitHub Actions" como source

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build da aplicação
- `npm run preview` - Visualiza o build localmente
- `npm run deploy` - Deploy manual usando gh-pages
- `npm run lint` - Executa o linter

### Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `master`. O workflow:

1. Instala as dependências
2. Faz o build da aplicação
3. Faz o deploy para GitHub Pages

### Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run deploy
```

### Estrutura do Projeto

```
├── .github/workflows/
│   └── deploy.yml          # Workflow do GitHub Actions
├── src/                    # Código fonte
├── public/                 # Arquivos públicos
├── dist/                   # Build da aplicação (gerado)
├── vite.config.ts         # Configuração do Vite
└── package.json           # Dependências e scripts
```

### URL do Site

Após o deploy, o site estará disponível em:
`https://hrqcds.github.io/test_site/`

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
