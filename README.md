# Rapecca — Landing Page

Site institucional desenvolvido como projeto de extensão em parceria com a **Rapecca** ([@rapecca.agroecologia](https://www.instagram.com/rapecca.agroecologia/)), uma rede de agroecologia, saberes tradicionais e defesa do território caiçara.

O site apresenta a Rapecca — sua história e frentes de atuação — e também serve como um ponto de convocação para o projeto, reunindo em um só lugar os formulários de voluntariado e de adesão à CSA (Comunidade que Sustenta a Agricultura).

---

## 🌱 Sobre a Rapecca

A Rapecca atua na agricultura urbana, pesca artesanal e agroecologia, na valorização da cultura popular, na defesa dos direitos do povo caiçara e de comunidades tradicionais, na economia solidária, em soluções baseadas na natureza, no protagonismo feminino e na luta por terra e território. Esses eixos estruturam o conteúdo da página **Sobre nós**.

---

## 🗺️ Estrutura do site

| Página | Arquivo | Função |
|---|---|---|
| Início | `index.html` | Carrossel de destaques, eventos favoritos e últimos eventos |
| Projetos | `Projetos.html` | Lista completa de projetos publicados |
| Detalhe do projeto | `projeto-detalhe.html` | Leitura de um projeto específico |
| CSA | `CSA.html` | Apresenta o modelo de CSA, valores das cestas, pontos de retirada e formulário de interesse |
| Sobre nós | `Sobre-nos.html` | Eixos de atuação da rede e equipe de desenvolvimento |
| Participe | `Participe.html` | Formulário de voluntariado |
| Livreto | `Livreto.html` | Apresentação e venda do livreto "Encontros de Medicina Popular Caiçara", com prévia em PDF |

Todas as páginas compartilham o mesmo cabeçalho (logo + navegação), rodapé (Instagram e e-mail de contato) e a folha de estilos `css/style.css`.

---

## ⚙️ Como o site funciona

- **HTML5 + CSS3** puro, sem frameworks — cada página é um arquivo estático independente.
- **Fontes**: `Ananias` para textos correntes, com uma identidade mais manuscrita e artesanal, e `Montserrat` para títulos e destaques.
- **Identidade visual**: paleta verde (`#0F4129`), bordô (`#7A0708` / `#7F0000`), bege (`#DFC7B1`) e oliva (`#9AA36A`), com cantos arredondados e sombras suaves espalhados pelos componentes — cards, carrossel, separadores.
- **Responsivo**, com ajustes de layout para telas menores.

Os eventos e projetos que aparecem no início e em `Projetos.html` são alimentados dinamicamente por um pequeno backend, então o conteúdo muda sem precisar editar o HTML. As páginas **CSA** e **Participe** trazem formulários do Google Forms incorporados, que são o coração da convocação: é por ali que quem se interessa vira de fato parte do projeto.

---

## 📁 Estrutura de pastas

```
public/
├── index.html
├── Projetos.html
├── projeto-detalhe.html
├── CSA.html
├── Sobre-nos.html
├── Participe.html
├── Livreto.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logoRapecca.png
│   ├── folhas.png
│   ├── divisor-vermelho.png
│   ├── carrossel/
│   ├── Sobre nos/
│   └── Outros Projetos/
└── media/
    └── Encontros Medicina Popular Caiçara (previa).pdf
```

---

## 📬 Contato

- **Instagram**: [@rapecca.agroecologia](https://www.instagram.com/rapecca.agroecologia/)
- **E-mail**: contato@rappecca.com.br
