# My Home Page

Site construído para ser a página inicial do seu navegador. Seu objetivo é armazenar, listar e expor seus sites favoritos.
Além disto, contém uma barra de pesquisa endereçada ao Google e um Relógio.

<img align="center" alt="HomePage" height="576pxpx" width="1024px" src="https://i.ibb.co/HfM0fK3w/home-page.png">

---

## 🧱 Estrutura do Projeto

```plaintext
home-page/
├── assets/
│   ├── images/
│   │   ├── artificial-intelligence-icons/
│   │   ├── code-icons/
│   │   ├── job-icons/
│   │   ├── study-icons/
│   │   ├── icon.png
│   │   ├── study.png
│   │   ├── code.png
│   │   ├── artificial-intelligence.png
│   │   └── job.png
│   ├── svgs/
│   │   └── reward.png 
├── css/
│   ├── styles.css
│   ├── search-bar.css
│   ├── relogio.css
│   ├── cards.css
│   ├── buttons.css
│   └── responsive.css
├── js/
│   ├── theme.js
│   ├── relogio.js
│   └── buttons.js
├── index.html
├── README.MD
```

---

## 🔎 Saiba Mais

Atualmente o site não permite mudança de favoritos de maneira interativa pelo usuário final, então é necessário alterar no código fonte.
Por isso, sinta-se livre para baixar e alterá-lo conforme sua necessidade.

### Observações
O site foi construído pensando em se adequar apenas a desktops então há responsividade limitada. (em geral, funciona bem)
Os links e imagens utilizados nesta versão foram gerados de maneira randômica

---

## 💻 Ferramentas utilizadas

- [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything) - Para randomizar nomes e links
- [Random Word Generator](https://randomwordgenerator.com/picture.php) - Para randomizar imagens
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/) - Para gerar o display grid utilizado na estrutura do site

---

## ✨ Features

- Relógio atualizado via JavaScript para capturar e atualizar o horário de acordo com o seu horário local
- Barra de pesquisa endereçada ao Google
- Atalho funcional para o Copilot
- Atalho funcional para o Microsoft Reward
- Divisão dos favoritos em áreas de interesse: Estudos, Programação, Inteligência Artificial e Trabalhos
- Alteração no display das seções conforme click nos botões dos hotspots (área de interesse)
- Desabilitação dos demais botões conforme click em algum outro botão da hotspot
- Alteração de temas entre modo claro e escuro via JavaScript

