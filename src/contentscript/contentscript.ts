import './contentscript.scss';
import {
  thumbnail_mods,
  replaceBackgroundFunc, replaceImgFunc, dynamicDisplayFunc
} from './functions';

const isThisContentscript: boolean = true;
console.log('isThisContentscript', isThisContentscript);

let variablesObj = {
  actors: ".list-items",
  titles: [".title", ".fallback-text-container", ".bob-title"],
  headings: ".logo"
}

window.addEventListener("onpaint", (e) => {
  thumbnail_mods(variablesObj);
  replaceBackgroundFunc('.title-boxart', '#000');
  replaceBackgroundFunc('.PlayerControlsNeo__all-control', '#000');
  replaceImgFunc('img.boxart-image-in-padded-container', "https://assets.brand.microsites.netflix.io/assets/8fe330ea-8236-11e9-ac0c-066b49664af6_cm_800w.png?v=18");
  replaceImgFunc('img.boxart-image', 'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png');
});

window.addEventListener("scroll", (e) => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    thumbnail_mods(variablesObj);
    replaceBackgroundFunc('.title-boxart', '#000');
    replaceImgFunc('img.boxart-image-in-padded-container', "https://assets.brand.microsites.netflix.io/assets/8fe330ea-8236-11e9-ac0c-066b49664af6_cm_800w.png?v=18");
    replaceImgFunc('img.boxart-image', 'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png');
  }
});
