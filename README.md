# Mugô Landing Page

Projeto estático da Mugô com:
- layout desktop aprovado
- responsividade para tablet/mobile
- i18n (`PT`, `EN`, `ES`) sem recarregar página
- sistema de consentimento de cookies com categorias (`necessários`, `analytics`, `marketing`)

## Estrutura
- `index.html` - estrutura da página, modais e banner de cookies
- `style.css` - estilos globais, responsividade e componentes de cookies
- `script.js` - i18n, menu/sidebar, newsletter, animações e consentimento
- `vercel.json` - configuração para deploy em Vercel
- `netlify.toml` - configuração para deploy em Netlify

## Rodar localmente
```bash
cd "/Users/klebs/Desktop/ mugo.ag/mugo.ag"
python3 -m http.server 8080
```
Acesse: `http://localhost:8080`

## Cookies e Consentimento
### Categorias
- `necessary`: sempre ativo
- `analytics`: opcional
- `marketing`: opcional

### Comportamento
- Banner permite: aceitar tudo, recusar opcionais ou personalizar.
- Preferências são salvas em `localStorage` na chave `mugo-cookie-consent-v1`.
- Scripts opcionais só disparam após consentimento da categoria correspondente.

### API pronta para integrações futuras
O projeto expõe `window.MugoConsent`:
- `window.MugoConsent.getState()`
- `window.MugoConsent.canRun('analytics' | 'marketing' | 'necessary')`
- `window.MugoConsent.onChange((state) => { ... })`
- `window.MugoConsent.runWhenConsented('analytics' | 'marketing', () => { ... })`

### Base para GTM / Consent Mode e Meta Pixel
- O script envia atualizações de consentimento para `dataLayer`.
- Se `gtag` existir, envia `gtag('consent', 'default'|'update', payload)`.
- Se `fbq` existir, aplica `fbq('consent', 'grant'|'revoke')` para marketing.

### Bloqueio por atributo (`data-consent-category`)
Você pode adicionar scripts bloqueados com `type="text/plain"`:
```html
<script
  type="text/plain"
  data-consent-category="analytics"
  data-consent-src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
></script>
```
Eles só serão injetados quando a categoria estiver consentida.

## Checklist rápido de QA
1. Trocar idioma (`PT | EN | ES`) e validar textos.
2. Testar banner e modal de cookies.
3. Validar persistência de consentimento e idioma após reload.
4. Testar menu lateral, newsletter, links, vídeo e animações.
5. Validar responsividade (iPhone/Android/tablet) sem overflow horizontal.

## Preview pública para equipe
### Opção A: Vercel (preview URL)
```bash
cd "/Users/klebs/Desktop/ mugo.ag/mugo.ag"
npx vercel login
npx vercel --yes
```
- Ao final, a CLI retorna a URL pública de preview para compartilhar.
- Para publicar em produção:
```bash
npx vercel --prod
```

### Opção B: Netlify (draft URL)
```bash
cd "/Users/klebs/Desktop/ mugo.ag/mugo.ag"
npx netlify-cli login
npx netlify-cli deploy --dir=. --message "preview equipe"
```
- A CLI retorna uma URL pública de preview.
- Para publicar em produção:
```bash
npx netlify-cli deploy --prod --dir=.
```

## Observações
- Não há etapa de build.
- `vercel.json` e `netlify.toml` já estão prontos para deploy simples.
