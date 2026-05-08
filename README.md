# FORGE — Training App

App de treino esportivo: musculação, cardio, CrossFit/funcional, com **Coach IA** (Gemini) e biblioteca de **800+ exercícios** com fotos.

## Stack

- HTML/CSS/JS puro (sem build)
- PWA instalável (iOS / Android / desktop)
- Dados salvos em `localStorage` (offline-first)
- Biblioteca de exercícios: [Free Exercise DB](https://github.com/yuhonas/free-exercise-db) (MIT)
- Coach IA: Google Gemini API (chave configurada pelo usuário)
- Hospedagem: Cloudflare Pages

## Estrutura

```
.
├── index.html              # Estrutura + CSS
├── app.js                  # Toda a lógica
├── exercises.json          # Biblioteca traduzida (PT-BR)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (cache offline)
├── icon-*.png              # Ícones do app
└── apple-touch-icon.png    # Ícone iOS
```

## Funcionalidades

### Treinos
- ✅ Musculação com séries/repetições/cargas
- ✅ Timer de descanso real entre séries (com vibração)
- ✅ Histórico completo salvo no celular
- ✅ Cardio: corrida, bike, natação
- ✅ Funcional: AMRAP, EMOM, For Time

### Planos
- ✅ Plano padrão Push/Pull/Legs criado na primeira execução
- ✅ Múltiplos planos salvos
- ✅ Coach IA pode gerar planos personalizados

### Coach IA (requer chave Gemini)
- ✅ Conversa em linguagem natural
- ✅ Cria planos baseados em objetivos
- ✅ Analisa progresso baseado no histórico
- ✅ Sugere ajustes e identifica pontos fracos

### Biblioteca
- ✅ 873 exercícios catalogados (PT-BR)
- ✅ Filtros por grupo muscular e equipamento
- ✅ Fotos de execução para cada exercício

### Perfil
- ✅ Recordes pessoais calculados automaticamente
- ✅ Trajetória de progresso (gráficos)
- ✅ Exportar/importar backup em JSON

## Deploy

O app é totalmente estático. Qualquer host de arquivos estáticos serve:

- **Cloudflare Pages** (recomendado): conecta o repo, deploy automático a cada push
- **Netlify, Vercel, GitHub Pages**: também funcionam

Pra desenvolvimento local:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

(Não funciona via `file://` direto porque carrega `exercises.json` via fetch.)

## Licença

Projeto pessoal. Free Exercise DB é MIT (créditos preservados).
