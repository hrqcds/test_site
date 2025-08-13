# Deploy Configuration

## Arquivos Gerados

Após rodar `yarn build`, os seguintes arquivos são gerados na pasta `dist/`:

- `index.html` - Arquivo HTML principal
- `assets/index.css` - Todos os estilos CSS compilados e minificados
- `assets/index.js` - Todo o JavaScript compilado e minificado

## Como Usar

### 1. Build Padrão (Recomendado)

```bash
yarn build
```

Os arquivos na pasta `dist/` são estáticos e podem ser servidos por qualquer servidor web.

### 2. Build com Arquivo Único

```bash
yarn build:single
```

Gera um único arquivo HTML com CSS e JS inline na pasta `dist-single/`.

### 3. Testar Localmente

```bash
yarn serve
```

Serve o build na porta 3000.

## Deploy

### Netlify

1. Faça upload da pasta `dist/`
2. Configure: Build command: `yarn build`, Publish directory: `dist`

### Vercel

1. Conecte o repositório
2. Configure: Build command: `yarn build`, Output directory: `dist`

### GitHub Pages

1. Configure GitHub Actions ou faça upload manual da pasta `dist/`

### Servidor Web Simples

Copie todo o conteúdo da pasta `dist/` para o diretório público do seu servidor.

## Configurações

- **Minificação**: Ativada com Terser
- **Source Maps**: Desativados para produção
- **Assets**: Organizados na pasta `/assets/`
- **Compatibilidade**: Funciona em qualquer servidor que serve arquivos estáticos

## Estrutura Final

```
dist/
├── index.html          # HTML principal (0.66 kB)
└── assets/
    ├── index.css       # CSS compilado (24.92 kB)
    └── index.js        # JS compilado (319.54 kB)
```

O site está pronto para produção e não requer Node.js ou qualquer dependência no servidor!
