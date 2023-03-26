/**
 * @name TmsTweaks
 * @version 1.1.1
 * @description Плагин, добавляющий кастомную тему, интеграцию, а также кастомные сообщения на сервере topaviy mainkraft serv 2.0 ⭕
 * @author Fakeminer
 */

const settings = {
  bgImage: true
}

/* Параметры плагина */

let backgroundColor = '#2b2d31';
let accentColor = '#22222260';

/* Вспомогательные функции */

let each = (selector, fun) => {
  document.querySelectorAll(selector).forEach(e => fun(e));
}
let get = (selector) => {
  return document.querySelector(selector);
}

/* Работа с темой */

let setTheme = () => {
  get('main').classList.add('bg-tms-material');
  get('.content-yjf30S').classList.add('bg-tms-material');
  get('.container-2o3qEW').classList.add('bg-tms-material');
  get('.members-3WRCEx').classList.add('bg-tms-material');

  let titleHeader = get('.header-3OsQeK');

  titleHeader.classList.add('bg-tms-material')

  each('.bg-tms-material', (list) => {
    list.style.backgroundImage = 'url("https://media.discordapp.net/attachments/952482815293923378/1089180258042916954/mci.png?width=576&height=324")';
    list.style.backgroundAttachment = 'fixed';
    list.style.backgroundSize = 'cover';
  })

  each('.messageListItem-ZZ7v6g', msg => {
    msg.classList.add('tms-material');
  });

  each('.containerDefault-YUSmu3', channel => {
    channel.classList.add('tms-material');
  });
  
  each('.mainContent-uDGa6R .overflow-1wOqNV', channelTitle => {
    channelTitle.classList.add('tms-material');
  });

  each('.member-48YF_l', user => {
    user.classList.add('tms-material');
    user.style.opacity = '1';
  });

  each('.defaultColor-1EVLSt', profileTitle => {
    if(!profileTitle.innerHTML.includes('ТМС')) {
      profileTitle.innerHTML = `${profileTitle.innerHTML} || ⭕ТМС`
    }
  });


  let material = document.querySelectorAll('.tms-material');

  material.forEach(m => {
    m.style.backgroundColor = accentColor;
    m.style.margin = '2px 8px';
    m.style.backdropFilter = 'blur(4px)';
    m.style.borderRadius = '8px';
    m.style.color = '#fff';
  });
  each('strong', (doing) => {
    doing.style.color = '#00e2ff';
  })
}

/* ======================================== */

let listeners = () => {
  let serverName = document.querySelector('.name-3Uvkvr');

  if(serverName.innerHTML.includes('topaviy mainkraft serv') || serverName.innerHTML.includes('ТМС')) {
    serverName.innerHTML = '⭕ТМС Дискорд';
    setTheme();

    each('.textArea-2CLwUE', (textarea) => {
    textarea.addEventListener('keydown', e => {
      setTheme();
    });
  });
  }
}

module.exports = class TMSTweaks {
  start() { listeners() }
  stop() {}
  onSwitch() { listeners() }
}