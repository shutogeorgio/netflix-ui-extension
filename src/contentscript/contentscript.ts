import './contentscript.scss';
import { configTargets } from './variables';

const isThisContentscript: boolean = true;
console.log('isThisContentscript', isThisContentscript);

function thumbnail_mods(moduleObj: configTargets) {
  let setTargets = document.querySelectorAll(moduleObj.actors);
  var setTitles = document.querySelectorAll(moduleObj.titles);

  if (!setTargets) return;
  setTargets.forEach(function (setTarget) {
    setTarget.textContent = "Secret";
  })

  if (!setTitles) return;
  setTitles.forEach(function (setTitle) {
    setTitle.textContent = "Title";
  })
}

function replaceBackgroundFunc(className: string, content: string) {
  var items = document.querySelectorAll(className);
  items.forEach(function (item: HTMLInputElement) {
    item.style.background = content;
  });
}

let variablesObj = {
  actors: ".list-items",
  titles: "p.fallback-text"
}

window.addEventListener("load", (e) => {
  thumbnail_mods(variablesObj);
  replaceBackgroundFunc('.title-boxart', '#000');
});
