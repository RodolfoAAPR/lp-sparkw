# Sparkw · LP "Jogar agora pode ter um sentido a mais."

Contexto para quem (pessoa ou agente de IA) for mexer nesta landing page. Leia inteiro antes de mudar qualquer coisa.

- **No ar (apresentação):** ainda sem link. Cloudflare e Higgsfield fora do escopo por enquanto, a pedido do dono (2026-11-24).
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

A definir no design package. Ação única: baixar o app para Windows.

## Celular

A definir. Celular é tratado como produto à parte: foto no lugar do vídeo, sem efeito pesado.

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

## Pendências

1. Termo "bout" na frase do /baixar: é termo da marca ou revisão.
2. Regras do SPK: como ganha, quanto vale, como resgata.
3. URL final do botão: instalador direto ou página /baixar.
4. Números futuros com fonte (usuários, SPK distribuído).
5. Prints reais do app quando quiser mostrar o produto.
6. ffmpeg ausente no PC: instalar com `winget install Gyan.FFmpeg` antes da Fase 7.
