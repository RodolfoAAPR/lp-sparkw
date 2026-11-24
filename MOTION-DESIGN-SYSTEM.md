# Sparkw · Design System de Motion

Vale para a LP e para tudo que vier depois: anúncios, motion para redes,
novas seções. Fechado na Fase 4/5, direção Noite neon, caminho B.

## 1. Essência

- **Em uma frase:** a conquista vira recompensa.
- **Sensação:** épica, direta, acesa.
- **O que nunca é:** barulhenta, infantil, "tech" genérica de gradiente roxo.

## 2. Logo

- Arquivo: `app/public/assets/logo.svg` (o SVG oficial, dois paths).
- Traço da abertura montado do próprio SVG (fill some, stroke desenha).
- Animações permitidas: desenho em traço com aceso (batida 1, 2,2 s);
  brilho parado suave no topo. Proibidas: girar, quicar, recolorir,
  reescrever o nome em fonte, sombra colorida fora do laranja.
- Respiro: altura do "s" em volta. Mínimo: 96 px de largura no menu.

## 3. Cores

| Token | Hex | Uso |
|---|---|---|
| `--sw-canvas` | #111113 | fundo |
| `--sw-panel` | #1A1A1C | superfície |
| `--sw-line` | #2A2A2E | linhas |
| `--sw-accent` | #FF6909 | sinal, CTA, faísca (raro) |
| `--sw-accent-hover` | #FF8A3D | hover |
| `--sw-prestigio` | #E8B84B | conquistas e SPK |
| `--sw-text-1` / `--sw-text-2` | #F2F2F2 / #A9A9B2 | texto |
| `--sw-cta-text` | #200E02 | texto sobre o botão |

Nunca o sinal e o prestígio no mesmo elemento.

## 4. Tipografia

- Títulos: Unbounded 800, entrelinha 1,02, balanço ligado.
- Corpo e botão: Sora 400 e 500.
- Destaque: Instrument Serif itálico 400, só dentro de títulos (`<em>`).
- Rótulos: Space Mono 400 e 700, caixa alta, 0,32 em.
- Cara da marca: rótulo mono acima + título grande + palavra em itálico.

## 5. Movimento

### 5.1 Curvas (só estas)

| Nome | cubic-bezier | Quando |
|---|---|---|
| Marca | 0.4, 0, 0.1, 1 | geral, câmera |
| Saída | 0.16, 1, 0.3, 1 | entradas |
| Botão | 0.35, 0, 0, 1 | microinterações |

### 5.2 Durações

| Animação | Duração | Detalhe |
|---|---|---|
| Traço do logo | 0,9 s | 0,16 s entre traços |
| Palavras do título | 1,0 s | 55 ms entre palavras |
| Bloco de texto | 0,9 s | sobe 22 px + aparece |
| Linha que se desenha | 1,0 s | 250 ms depois do texto |
| Nós da linha do tempo | 0,4 s | acendem com o progresso |
| Pop do troféu | 0,6 s | curva Saída, uma vez por toque |

### 5.3 Regras

- Um movimento por elemento. Tudo entra uma vez. Nada pisca.
- Sem cortes secos no meio de um movimento.
- Laranja só onde o sistema manda: CTA, faísca, nós acesos.
- Dourado só em conquista e SPK.

## 6. Motivos visuais

- Fio de faísca: fio de luz laranja que serpenteia entre as seções e se
  desenha com a rolagem. Só no computador (min 1024 px, sem toque).
- Aceso do manifesto: palavras apagam e acendem com o scroll.
- Nós que acendem: linha do tempo do Como funciona.
- Pop do troféu: cartão demonstração, toque a toque.

## 7. Imagem e cena

- Sem imagem ou vídeo gerado (caminho B). Único ativo: o logo oficial.
- Fotos reais do app entram depois, vindas do dono, sem alteração.

## 8. Composição

Grade de 1200 px, margens 24 px no celular e 80 px no computador.
Título vive à esquerda no computador, centralizado só na abertura de marca.
Área de segurança: nada colado na borda em 390 px.

## 9. Roteiro-base

Usar exatamente assim: "Jogar agora pode ter um sentido a mais.",
"Sua platina vale mais do que moral.", "Você joga. Eu cuido do resto.
Cada conquista vira SPK.", "Baixar para Windows", "Versão 1.0.0.47",
"Teste fechado · Windows", "Xbox · PSN · Steam".

## 10. Som

Sem direção sonora. A página é muda.

## 11. Checklist antes de entregar

- [ ] Só as três curvas.
- [ ] Laranja e dourado só onde o sistema manda.
- [ ] Logo dentro das regras.
- [ ] Textos iguais ao roteiro-base.
- [ ] Reduzir movimento mostra os estados finais.
