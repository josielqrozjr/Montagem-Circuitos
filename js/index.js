// Carregar os cards com a informações do servidor
window.onload = function() {

    const docsPdf = [
        {
            id: 1,
            titulo_rel: 'Guia de Simbologia',
            link: 'https://drive.google.com/file/d/16AII8VWLco2I0lJP9jivZ6imO-eS_ycg/view'
        },
        {
            id: 2,
            titulo_rel: 'Alimentador de peças',
            link: 'https://drive.google.com/file/d/1uDKVqP8IwPAQbtbSGTwB7DeB-7yuJNZb/view'
        },
        {
            id: 3,
            titulo_rel: 'Abertura da porta de ônibus',
            link: 'https://drive.google.com/file/d/1NqkqN6GMKE8PBZDw_QM4KFJe0YAX-f6V/view'
        },
        {
            id: 4,
            titulo_rel: 'Válvula "e"',
            link: 'https://drive.google.com/file/d/1GmOaQ--pYLqMb6wcJAz50c3zmctSBG3c/view'
        }
    ];

    const videoAulas = [
        {
            id: 1,
            titulo_video: 'Simulação do alimentador de peças',
            link_video: 'https://www.youtube.com/embed/tkp6eVCu2VU'
        },
        {
            id: 2,
            titulo_video: 'Simulação da porta de ônibus',
            link_video: 'https://www.youtube.com/embed/KQorZ9jGjTA'
        },
        {
            id: 3,
            titulo_video: 'Sistema com incremento da Válvula "E"',
            link_video: 'https://www.youtube.com/embed/g5cn3z28NkI'
        },
        {
            id: 4,
            titulo_video: 'Sistema com introdução ao relé temporizador',
            link_video: 'https://www.youtube.com/embed/ch7e3RDs2rI'
        },
        {
            id: 5,
            titulo_video: 'Sistema A+C+B+ A-C-B-',
            link_video: 'https://www.youtube.com/embed/lylwxjsZ_-k'
        },
        {
            id: 6,
            titulo_video: 'Simulação de conformação de parafusos',
            link_video: 'https://www.youtube.com/embed/6e653iynWRo'
        },
        {
            id: 7,
            titulo_video: 'Simulação do Eixo motriz A+ B+ A- B-',
            link_video: 'https://www.youtube.com/embed/WxRfFq_gasQ'
        }
    ];

        for (let i = 0; i < docsPdf.length; i++) {
            let conteudo = `
                <div class="card">
                    <div class="card-superior">
                        <div class="filter-glass"></div>
                        <i class="fa-brands fa-google-drive"></i>
                    </div>
                    <a href="${docsPdf[i].link}" target="_blank">
                        <button>${docsPdf[i].titulo_rel}</button>
                    </a>
                </div>
            `;

            document.getElementById('cards').innerHTML += conteudo;
        }

        for (let i = 0; i < videoAulas.length; i++) {
            let videos = `
                <div class="card">
                    <div class="card-video">
                        <iframe width="300" height="150" src="${videoAulas[i].link_video}" title="${videoAulas[i].titulo_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <label>${videoAulas[i].titulo_video}</label>
                </div>
            `;

            document.getElementById('cards_videos').innerHTML += videos;
        }
};


// SCROLL SUAVIZADO
const menuItens = document.querySelectorAll('.navbar-link a[href^="#"]'); // Selecionar apenas os links internos, ou seja, que começam com '#'

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};

function scrollToPosition(to) {
    smoothScrollTo(0, to);
};

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    scrollToPosition(to);
};

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

// MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);