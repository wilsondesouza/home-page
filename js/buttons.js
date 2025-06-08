// Lista de Objetos (atalhos e identificação)
const listaEstudos = {
    'King': { urlPath: 'http://hikfuz.ly/henbi', imagePath: 'https://cdn.pixabay.com/photo/2019/04/19/17/48/cake-balls-4139982_960_720.jpg' },
    'Colon': { urlPath: 'http://defmezot.bn/meodmaf', imagePath: 'https://cdn.pixabay.com/photo/2023/09/02/18/07/escalator-8229360_1280.jpg' },
    'Clayton': { urlPath: 'http://pu.pe/oduuhha', imagePath: 'https://cdn.pixabay.com/photo/2016/11/18/14/19/arrows-1834859_1280.jpg' },
    'Graves': { urlPath: 'http://jiitu.ms/kohes', imagePath: 'https://cdn.pixabay.com/photo/2019/11/29/10/30/country-brands-4661016_960_720.jpg' },
    'Fields': { urlPath: 'http://suwap.rs/vamo', imagePath: 'https://cdn.pixabay.com/photo/2020/02/01/16/33/stone-column-4810693_1280.jpg' },
    'Craig': { urlPath: 'http://orwaoc.dj/imakane', imagePath: 'https://cdn.pixabay.com/photo/2017/02/26/21/49/sea-2101488_960_720.jpg' },
    'Douglas': { urlPath: 'http://zugoor.ne/ven', imagePath: 'https://cdn.pixabay.com/photo/2017/01/07/18/26/home-1961182_960_720.jpg' },
    'McDaniel': { urlPath: 'http://fipova.cd/ho', imagePath: 'https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_1280.jpg' },
    'Richardson': { urlPath: 'http://tuwuhebe.cm/ozeneip', imagePath: 'https://cdn.pixabay.com/photo/2024/03/08/16/06/building-8621170_1280.jpg' },
    'Gardner': { urlPath: 'http://rah.tf/fi', imagePath: 'https://cdn.pixabay.com/photo/2012/02/24/16/58/vintage-16726_960_720.jpg' },
    'Flowers': { urlPath: 'http://rutahu.td/zuumwak', imagePath: 'https://cdn.pixabay.com/photo/2016/10/12/22/59/sports-1736240_1280.jpg' },
    'Saunders': { urlPath: 'http://kepdipe.eh/ucjiva', imagePath: 'https://cdn.pixabay.com/photo/2021/09/16/11/44/bank-6629880_1280.jpg' },
}

const listaProgramação = {
    'Fuller': { urlPath: 'http://usa.jm/tackajba', imagePath: 'https://cdn.pixabay.com/photo/2020/04/11/20/35/lighthouse-5031977_960_720.jpg' },
    'Harmon': { urlPath: 'http://talgib.il/um', imagePath: 'https://cdn.pixabay.com/photo/2017/09/10/14/24/manipulation-2735727_960_720.jpg' },
    'Obrien': { urlPath: 'http://sibrur.cm/nin', imagePath: 'https://cdn.pixabay.com/photo/2024/04/03/06/09/ai-generated-8672147_1280.jpg' },
    'Gray': { urlPath: 'http://riwahiki.ch/ha', imagePath: 'https://cdn.pixabay.com/photo/2016/05/18/18/37/rubber-duck-1401225_1280.jpg' },
    'Harrington': { urlPath: 'http://to.bi/nalducsas', imagePath: 'https://cdn.pixabay.com/photo/2013/07/18/20/27/climate-165081_960_720.jpg' },
    'Johnston': { urlPath: 'http://mecoznu.na/kupezaf', imagePath: 'https://cdn.pixabay.com/photo/2024/02/12/14/56/woman-8568693_1280.jpg' },
    'Patton': { urlPath: 'http://ufva.nz/cikhehli', imagePath: 'https://cdn.pixabay.com/photo/2018/10/07/20/17/owl-3731244_1280.jpg' },
    'Morrison': { urlPath: 'http://golan.mt/fuw', imagePath: 'https://cdn.pixabay.com/photo/2020/06/14/11/23/wanderer-5297457_960_720.jpg' },
    'Hudson': { urlPath: 'http://joweola.lr/fifkak', imagePath: 'https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg' },
    'Stevens': { urlPath: 'http://hakafek.bm/comal', imagePath: 'https://cdn.pixabay.com/photo/2016/06/01/15/45/advertising-1429216_1280.jpg' },
    'Foster': { urlPath: 'http://kinoc.ve/luplod', imagePath: 'https://cdn.pixabay.com/photo/2013/01/04/17/14/devrent-valley-73573_960_720.jpg' },
    'Copeland': { urlPath: 'http://pov.gr/naj', imagePath: 'https://cdn.pixabay.com/photo/2016/08/25/12/04/dog-1619386_960_720.jpg' },
}

const listaTrabalho = {
    'Robbins': { urlPath: 'http://aseuloz.hr/mizki', imagePath: 'https://cdn.pixabay.com/photo/2013/06/07/15/32/face-122690_960_720.jpg' },
    'Lynch': { urlPath: 'http://sogam.pr/piranab', imagePath: 'https://cdn.pixabay.com/photo/2019/07/30/05/21/sculpture-4371970_960_720.jpg' },
    'Cook': { urlPath: 'http://lucci.li/vin', imagePath: 'https://cdn.pixabay.com/photo/2016/09/13/16/49/animal-tracks-1667740_1280.jpg' },
    'Wilkerson': { urlPath: 'http://ni.ng/bamnoja', imagePath: 'https://cdn.pixabay.com/photo/2014/04/06/19/03/plant-317902_1280.jpg' },
    'Woods': { urlPath: 'http://ug.pr/fektuvic', imagePath: 'https://cdn.pixabay.com/photo/2015/04/10/17/23/wood-716610_960_720.jpg' },
    'Quinn': { urlPath: 'http://ebe.ls/meolete', imagePath: 'https://cdn.pixabay.com/photo/2018/02/12/14/01/horse-3148414_1280.png' },
    'Patton': { urlPath: 'http://igiwapi.cc/vi', imagePath: 'https://cdn.pixabay.com/photo/2018/01/10/13/22/energy-3073847_1280.jpg' },
    'Fleming': { urlPath: 'http://gem.ie/aja', imagePath: 'https://cdn.pixabay.com/photo/2019/04/03/19/08/fantasy-4101146_1280.jpg' },
    'Hogan': { urlPath: 'http://afogivu.im/ikikon', imagePath: 'https://cdn.pixabay.com/photo/2014/04/25/21/06/tire-332133_1280.jpg' },
    'Rogers': { urlPath: 'http://bepjiwo.lk/bospot', imagePath: 'https://cdn.pixabay.com/photo/2018/02/17/23/55/rhino-3161246_1280.jpg' },
    'Stewart': { urlPath: 'http://zoehi.il/hovaza', imagePath: 'https://cdn.pixabay.com/photo/2012/11/20/17/01/rock-formations-66713_960_720.jpg' },
    'Carpenter': { urlPath: 'http://webaw.no/hehpope', imagePath: 'https://cdn.pixabay.com/photo/2020/01/14/06/08/house-4764125_1280.jpg' }
}

const listaInteligenciaArtificial = {
    'Moreno': { urlPath: 'http://kofkavag.kg/muz', imagePath: 'https://cdn.pixabay.com/photo/2013/04/15/19/42/trash-104739_1280.jpg' },
    'Nash': { urlPath: 'http://vaz.cm/uzosi', imagePath: 'https://cdn.pixabay.com/photo/2020/06/30/19/41/the-wild-horse-5357417_1280.jpg' },
    'Payne': { urlPath: 'http://meni.cf/umepansos', imagePath: 'https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614_960_720.jpg' },
    'Barnes': { urlPath: 'http://co.bh/ja', imagePath: 'https://cdn.pixabay.com/photo/2014/03/23/20/52/cobblestones-293578_1280.jpg' },
    'Cox': { urlPath: 'http://idsihid.am/rubuctac', imagePath: 'https://cdn.pixabay.com/photo/2014/05/12/14/51/banana-342575_960_720.jpg' },
    'Green': { urlPath: 'http://riv.in/sadfo', imagePath: 'https://cdn.pixabay.com/photo/2018/09/22/11/57/cat-3695153_960_720.jpg' },
    'Morgan': { urlPath: 'http://dirta.an/ore', imagePath: 'https://cdn.pixabay.com/photo/2013/12/05/19/18/deadman-ranch-223774_960_720.jpg' },
    'Osborne': { urlPath: 'http://afowo.ck/winamdu', imagePath: 'https://cdn.pixabay.com/photo/2017/06/15/19/35/coffee-2406439_960_720.jpg' },
    'Roberson': { urlPath: 'http://siv.pw/ukokew', imagePath: 'https://cdn.pixabay.com/photo/2016/09/12/06/41/eye-1663193_1280.jpg' },
    'Lindsey': { urlPath: 'http://keca.mz/tamitigo', imagePath: 'https://cdn.pixabay.com/photo/2020/06/18/15/28/chair-5313970_960_720.jpg' },
    'Stone': { urlPath: 'http://uj.mh/pe', imagePath: 'https://cdn.pixabay.com/photo/2013/09/27/13/07/lion-with-dog-187009_960_720.jpg' },
    'Mathis': { urlPath: 'http://ag.jp/lehhu', imagePath: 'https://cdn.pixabay.com/photo/2017/07/11/18/07/bolivia-2494518_960_720.jpg' },
}

// Função para esconder e/ou visualizar as seções através dos botões
document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { button: document.querySelector('.btn-show-section1'), section: document.querySelector('.section1') },
        { button: document.querySelector('.btn-show-section2'), section: document.querySelector('.section2') },
        { button: document.querySelector('.btn-show-section3'), section: document.querySelector('.section3') },
        { button: document.querySelector('.btn-show-section4'), section: document.querySelector('.section4') }
    ];

    let activeSection = null;

    sections.forEach(({ button, section }) => {
        button.addEventListener('click', function () {
            // Esconde todas as seções
            sections.forEach(({ section }) => section.classList.add('hidden'));
            // Se clicou no mesmo botão, fecha tudo
            if (activeSection === section) {
                activeSection = null;
                enableAllButtons();
                return;
            }
            // Mostra a seção correspondente
            section.classList.remove('hidden');
            activeSection = section;
            disableOtherButtons(button);
        });
    });

    function disableOtherButtons(activeButton) {
        sections.forEach(({ button }) => {
            if (button !== activeButton) {
                button.disabled = true;
                button.style.cursor = 'no-drop';
            }
        });
    }

    function enableAllButtons() {
        sections.forEach(({ button }) => {
            button.disabled = false;
            button.style.cursor = 'pointer';
        });
    }
});

// Função para gerar botões para cada lista de objetos e adicioná-los às seções correspondentes
function criarBotoes(containerClass, data) {
    const container = document.querySelector('.' + containerClass);

    for (let key in data) {
        const card = document.createElement('div');
        const card_back = document.createElement('div');
        const a = document.createElement("a");
        const img = document.createElement("img");
        const p = document.createElement("p");

        card.setAttribute("class", "card-botoes");
        card_back.setAttribute("class", "card_back");
        a.href = data[key].urlPath;
        a.target = "_blank";
        img.src = data[key].imagePath;
        img.alt = key;
        img.loading = "lazy";
        p.textContent = key;

        container.appendChild(card);
        card.appendChild(a);
        a.appendChild(img);
        card.appendChild(card_back)
        card.appendChild(p);

    }
}

// Chamar a função para cada lista de botões
criarBotoes("botoes-estudos", listaEstudos);
criarBotoes("botoes-programacao", listaProgramação);
criarBotoes("botoes-inteligencia-artificial", listaInteligenciaArtificial);
criarBotoes("botoes-trabalho", listaTrabalho);