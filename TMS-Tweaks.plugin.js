/**
 * @name TmsTweaks
 * @version 1.1.2
 * @description Плагин, добавляющий кастомную тему, интеграцию, а также кастомные сообщения на сервере topaviy mainkraft serv 2.0 ⭕
 * @author Fakeminer
 */
/* Параметры плагина */
let useBg = 1;
let bgImage = 'https://bit.ly/tmsbgtheme';
let bgColor = '#222';
let accentColor = '#11111160';
// tech
let defaultBackground = useBg == 1 ? `url("${bgImage}")` : bgColor;
// beta
let useThemeForAll = false;
/* Вспомогательные функции */
let each = (selector, fun) => {
document.querySelectorAll(selector).forEach(e => fun(e));}
/* Работа с темой */
let setTheme = () => {
let bgMaterials = ['main', '.content-yjf30S', '.container-2o3qEW', '.members-3WRCEx', '.header-3OsQeK', '.container-YkUktl', '.title-31SJ6t.container-ZMc96U.themed-Hp1KC_'];
bgMaterials.forEach(mat => {
document.querySelectorAll(mat).forEach(matEl=>{matEl.classList.add('bg-tms-material')});});
each('.bg-tms-material',(list)=>{list.style.background=defaultBackground;
list.style.backgroundAttachment='fixed';
list.style.backgroundSize='cover';});
let normalMaterial = ['.containerDefault-YUSmu3', '.mainContent-uDGa6R .overflow-1wOqNV','.member-48YF_l', '.scrollableContainer-15eg7h', '.scroller-3X7KbA.none-1rXy4P.scrollerBase-1Pkza4'];
normalMaterial.forEach(mat=>{
let mat_objs = document.querySelectorAll(mat);
mat_objs.forEach(mat_obj => {
mat_obj.classList.add('tms-material');});});
each('.tms-material', m => {
m.style.backgroundColor = accentColor;
m.style.margin = '2px 8px';
m.style.backdropFilter = 'blur(4px)';
m.style.borderRadius = '8px';
m.style.color = '#fff';});
each('.sel-material', sm => {
sm.style.display = 'inline-block';
sm.style.backgroundColor = accentColor;
sm.style.padding = '0 4px';
sm.style.borderRadius = '6px';});
each('strong', (doing) => {
doing.style.color = '#0af';
doing.style.borderRadius = '4px';
doing.style.fontWeight = '500';});
['.scroller-3X7KbA.none-1rXy4P.scrollerBase-1Pkza4', '.scrollableContainer-15eg7h', '.container-YkUktl', '.title-31SJ6t.container-ZMc96U.themed-Hp1KC_'].forEach(m => { 
each(m, item => { item.style.margin = '0'; item.style.borderRadius = '0'});});
let messages = document.querySelectorAll('.messageListItem-ZZ7v6g');
messages.forEach(message => {
message.style.margin = '4px 8px';
message.style.borderRadius = '8px';});}
let listeners = () => {
if(useThemeForAll) { setTheme(); return }
let serverName = document.querySelector('.name-3Uvkvr');
if(serverName && serverName.innerHTML.includes('topaviy mainkraft serv') || serverName.innerHTML.includes('ТМС')) {
serverName.innerHTML = '⭕<span class="sel-material">ТМС Дискорд</span>';
setTheme();
each('.textArea-2CLwUE', (textarea) => {
textarea.addEventListener('keydown', e => {
setTheme();});});}}
module.exports = class TMSTweaks {
start() { listeners() }
stop() {}
onSwitch() { listeners() }
}