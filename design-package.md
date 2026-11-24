# Design Package · Sparkw · Noite neon

Fase 5, caminho B (sem vídeo gerado). Toda linha de copy aqui sai literal na página.
Aprovação deste pacote confirma também o item 10 (pontos sem fonte própria).

## 1. Premissa

Uma palavra do mundo gamer: platina. A página inteira ensina uma ideia:
sua platina vale mais do que moral. Cada capítulo serve a tese:
conquista vira SPK, sem mudar nada no seu jogo, e o próximo passo é baixar.

## 2. Paleta (tokens, contraste medido em 2026-11-24)

```css
:root {
  --sw-canvas: #111113;       /* fundo, nunca preto puro */
  --sw-panel: #1a1a1c;        /* cartões e superfícies */
  --sw-line: #2a2a2e;         /* linhas */
  --sw-accent: #ff6909;       /* sinal: CTA e faísca, raro (6,5:1 no fundo) */
  --sw-accent-hover: #ff8a3d; /* hover do CTA */
  --sw-prestigio: #e8b84b;    /* conquistas e SPK, nunca com o sinal (10,2:1) */
  --sw-text-1: #f2f2f2;       /* texto (16,9:1) */
  --sw-text-2: #a9a9b2;       /* apoio (8,1:1) */
  --sw-cta-text: #200e02;     /* texto sobre o botão (6,5:1) */
}
```

## 3. Trio de tipos (Trio 1 · Neon técnico, escolha do dono)

- Títulos: Unbounded 800, entrelinha 1,02.
- Corpo e botão: Sora 400 e 500.
- Rótulos: Space Mono 400 e 700, caixa alta, 0,32 em.
- Destaque: Instrument Serif itálico 400, só dentro de títulos (`<em>`).
- Arquivos: woff2 latim em `app/public/fonts/`, `@font-face`, preload no `index.html`.
  Unbounded 800, Sora 400, Sora 500, Space Mono 400, Space Mono 700,
  Instrument Serif itálico 400.

## 4. Topo em batidas (caminho B: sequência no tempo, sem rolagem travada)

| Batida | Tempo | Tela | Copy | Entrada |
|---|---|---|---|---|
| 1 | 0,0 a 2,2 s | só o logo, no centro | (logo, sem texto) | A desenha e acende |
| 2 | 2,0 a 3,2 s | título | "Jogar agora pode ter um sentido a mais." | palavras sobem da máscara |
| 3 | 3,0 s em diante | apoio, botão, linha Steam | "Você joga. Eu cuido do resto. Cada conquista vira SPK." + "Baixar para Windows" + "Steam" | bloco sobe e aparece |

Sem JavaScript ou com reduzir movimento: logo pronto, textos visíveis, sem sequência.
O apoio sai sem a palavra "bout", que segue sem confirmação (ver item 10).

## 5. Topo no celular

A mesma composição, empilhada: logo pronto no alto, título, apoio, botão,
nota de versão, linha Steam. Sem fio de faísca, sem efeito pesado, alturas em
`lvh`. O botão é o mesmo link do computador.

## 6. Seções abaixo do topo (copy literal, um único CTA: #baixar)

Menu: mini logo + Como funciona + Dúvidas + botão "Baixar".

Capítulo 01 · Manifesto (frase grande, sem botão):
"Sua platina vale mais do que moral."
Tratamento: "vale mais" aceso, o resto apagado, acende palavra por palavra.

Capítulo 02 · Como funciona ("Começa em minutos." + linha do tempo, nós acendem):
1. "Baixe e crie sua conta" / "Instale no Windows e entre com seu email. O código chega na hora."
2. "Jogue como sempre" / "Nada muda no seu jogo. Você nem percebe."
3. "Cada conquista vira SPK" / "Platinas e conquistas viram SPK na sua conta."
Momento interativo (nesta seção): "Toque no troféu." Um cartão de platina
demonstra o pop do troféu com "+ SPK", sem número e sem nome de jogo,
marcado como "Demonstração".

Capítulo 03 · Instalação ("O Windows vai avisar. Pode seguir."):
1. "Se o navegador perguntar, escolha Manter."
2. "Na tela O Windows protegeu o seu PC, clique em Mais informações e depois em Executar assim mesmo."
3. "Instale e crie a sua conta com o email. O código chega na hora."
Nota: "O aviso aparece porque eu ainda sou novo por aqui."

Capítulo 04 · Dúvidas (nas palavras da pesquisa):
- "Precisa pagar?" / "Não. O teste fechado é grátis, sem cartão."
- "Preciso fazer algo no jogo?" / "Não. Você joga como sempre e nem percebe. A contagem é automática."
- "Como o SPK funciona?" / "Cada conquista soma SPK na sua conta. As regras de resgate saem antes do fim do teste fechado."
- "Por que o Windows acusa o instalador?" / "Porque a Sparkw ainda é nova. O arquivo é o oficial, e o capítulo acima mostra cada tela."

Capítulo 05 · Baixar (âncora #baixar):
"Sua próxima conquista já vale SPK."
Botão: "Baixar para Windows", link https://sparkw.app/baixar.
Nota: "Versão 1.0.0.47 · Windows · Grátis no teste"

Rodapé: "© 2026 Sparkw · Teste fechado" + "Steam" + link "Baixar".
Sem formulário (o CTA é link de download).
Sem depoimento (sem fonte; espaço pronto para depois, com autorização).

## 7. Camada vetorial

- Logo em traço (batida 1), montado do SVG oficial, depois o logo cheio.
  Proibido: girar, quicar, recolorir, reescrever o nome em fonte.
- Fio de faísca: SVG em laranja, serpenteia entre as seções e se desenha com
  a rolagem, só no computador (min 1024 px, sem toque). No celular não existe.
- Sem movimento: fio pronto e visível, logo pronto, textos finais.

## 8. Lista de engenharia (caminho B)

Tokens `--sw-` no `index.css`, sem hex solto. Uma seção por arquivo em
`src/sections/`. Fontes no próprio site com preload. Lenis só com mouse ou
trackpad (ver `src/lib/rolagemSuave.ts`). Entradas uma vez, um movimento por
elemento. `prefers-reduced-motion`: estados finais. Página completa sem
JavaScript. Alturas em `lvh`. 390 a 1920 px sem rolagem lateral.
Console limpo. Gate de copy zerado antes de mostrar.

## 9. Custo

Zero. Caminho B, sem geração. Higgsfield e Cloudflare seguem fora do escopo.

## 10. O que a aprovação confirma (sem fonte própria, vale o OK do dono)

1. Apoio do topo sem "bout": "Você joga. Eu cuido do resto. Cada conquista vira SPK."
2. "Uma conta só" para as três plataformas, e "tudo soma na mesma conta".
3. "As regras de resgate saem antes do fim do teste fechado."
4. Botão leva a https://sparkw.app/baixar (estável), não ao exe direto.
5. Versão 1.0.0.47 vinda do /baixar; atualizar a cada release.

Atualização 2026-11-24: escopo virou só Steam, a pedido do dono. O item 2 (três plataformas) está substituído, o capítulo 3 saiu e os capítulos renumeraram. O botão segue para o /baixar.

## 11. Linha do gate de copy

Toda linha acima sai literal. A página construída passa no grep da Fase 9
(zero travessão, zero clichê, sem vícios de IA) antes de qualquer olhar.
"Vale mais do que moral" é recurso de marca, fica.
