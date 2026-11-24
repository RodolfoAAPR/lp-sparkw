# Sparkw · LP "Jogar agora pode ter um sentido a mais."

Contexto para quem (pessoa ou agente de IA) for mexer nesta landing page. Leia inteiro antes de mudar qualquer coisa.

- **No ar (apresentação):** <https://rodolfoaapr.github.io/lp-sparkw/> (GitHub Pages, fora do Google). Cloudflare e Higgsfield seguem fora do escopo.
- **Domínio oficial:** <https://sparkw.app> (a página atual /baixar segue no ar até a LP ficar pronta).
- **Código:** `app/` (React 19 + Vite + TypeScript + Tailwind v4, pré-renderizado).
- **Decisões de criação:** `design-package.md`. **Movimento:** `MOTION-DESIGN-SYSTEM.md`.
- **Fonte dos fatos:** `contexto/` (textos oficiais do cliente). Nenhum número, nome ou promessa fora dele.
- **Brutos e testes:** `review/` (nunca vai para o site).

## O que é a marca

Sparkw é uma plataforma que recompensa gamers por conquistas dentro dos jogos: platinas e achievements viram SPK. Cobre Xbox, PSN e Steam. App para Windows, hoje em teste fechado (versão 1.0.0.47). Tese da página: jogar agora pode ter um sentido a mais, cada desafio cumprido vira recompensa.

## Regras do dono (não negociáveis)

1. Português do Brasil, frases curtas, palavras simples. Sem travessão em nada, no chat e no site: vírgula, dois pontos ou ponto.
2. Mídia no arquivo original, nunca comprimir ou converter. Peso se resolve na hospedagem.
3. Componentes de terceiros entram como estão, em `src/components/ui/`. Personalizar só por fora.
4. Nada inventado: números, preços, prêmios, avaliações e promessas só com fonte do cliente.
5. Ajuste só no que foi apontado. Feedback com print vale para aquela parte.
6. Commits em conventional commits. Repositório público, com push autorizado pelo dono.

## Rodar, testar, publicar

```bash
cd app
npm install
npm run dev                                # http://localhost:8080
npm run build                              # dist/ completo (qualquer hospedagem), fora do Google
SITE_URL=https://dominio npm run build     # versão oficial
npm run build:pages                        # só se a mídia estiver no R2 (link de apresentação)
```

Deploy do link de apresentação: `npx wrangler pages deploy dist --project-name <projeto> --branch main --commit-dirty=true`.

## Arquitetura da página

Ordem das seções (`app/src/App.tsx`): Cabecalho · Topo · Manifesto · ComoFunciona · Plataformas · Instalacao · Duvidas · Baixar · Rodape, com Fio dentro do main.

- `Topo.tsx`: abertura de marca A (traço do SVG oficial + logo cheio), batidas com atraso (título 2,05 s, bloco 3,0 s).
- `Manifesto.tsx`: palavras acendem com o progresso ("vale mais" em laranja).
- `ComoFunciona.tsx`: linha do tempo com nós que acendem + troféu demonstração (toque a toque).
- `Fio.tsx`: fio de faísca, SVG de página inteira, só com mouse, progresso em `--k`.
- `efeitos.ts`: `useEfeitos` (is-in uma vez), `useProgresso` (sem setState), `useAcendePalavras`, `useTemMouse`.
- CTA único: `#baixar` nas âncoras, `https://sparkw.app/baixar` no botão final.

## Celular

Topo empilhado, mesma copy. Sem fio, sem Lenis, entradas paradas no estado final, alturas em `lvh`, menu sólido sem blur. Overflow zerado de 360 a 1920 px (Edge automatizado). Fluidez em aparelho e teste do dono: pendentes. Modos `?teste=fio,fundo` prontos.

## Conteúdo e decisões

- 2026-11-24: ação única da LP é baixar o app para Windows (resposta ao briefing).
- 2026-11-24: Cloudflare e Higgsfield fora do escopo por enquanto, a pedido do dono. Sem geração paga até liberar.
- 2026-11-24: régua de qualidade é a LP da AutoSeg (estrutura e padrão, não a identidade).
- 2026-11-24: repo público RodolfoAAPR/lp-sparkw, commits em conventional commits.
- 2026-11-24: sensação da página é épica e cinematográfica (briefing).
- 2026-11-24: materiais vindos do ar, salvos em contexto/ (briefing).
- 2026-11-24: acesso grátis no teste fechado, diferencial líder é conquista vira recompensa, prova só com fonte (briefing).
- 2026-11-24: caminho B (sem vídeo gerado) por escopo, sem Higgsfield por enquanto. Cenas em vídeo entram depois, se o dono liberar.
- 2026-11-24: direção visual Noite neon (Fase 3). Tiers de cena não valem sem vídeo.
- 2026-11-24: abertura de marca A Desenha e acende (vitrine, Fase 4).
- 2026-11-24: Trio 1 Neon técnico, paleta Noite neon com contraste medido (vitrine, Fase 4).
- 2026-11-24: elemento-assinatura Fio de faísca, só no computador (Fase 4).
- 2026-11-24: design package aprovado, incluindo o item 10 (apoio sem "bout", uma conta só, regras de resgate, botão ao /baixar, versão do /baixar).
- 2026-11-24: build verde + autoteste 22/22 no Edge + Lighthouse celular 98/100/100 (SEO 69 pelo noindex de apresentação). Correção: botão do menu com texto escuro (contraste).
- 2026-11-24: correção de fontes. Sora 700 real no lugar do negrito sintetizado, e o topo espera fontes e traço do logo (limite 1,5 s) antes de animar. Fases do topo amarradas na abertura.
- 2026-11-24: correção do título. Espaços reais entre as máscaras (palavras sobrepunham 18 px), itálico a 1,1 (altura x medida 1,09), entrelinha 1,06, topo limitado a 860 px.

## Pendências

1. Regras do SPK (a página promete as regras antes do fim do teste).
2. Teste no celular do dono (fluidez; modos `?teste=fio,fundo` prontos).
3. og-image.jpg antes de publicar (a tag existe, o arquivo não).
4. Versão do app: atualizar 1.0.0.47 a cada release do /baixar.
5. Prints reais do app quando quiser mostrar o produto.
6. ffmpeg ausente no PC: instalar com `winget install Gyan.FFmpeg` antes da Fase 7.
