import './contentscript.scss';
import {
  thumbnail_mods,
  replaceBackgroundFunc,
  replaceImgFunc,
} from './functions';

let variablesObj = {
  actors: '.list-items',
  titles: '.fallback-text-container',
  headings: '.logo',
};

let targets = document.querySelectorAll('.handle');
let counter = 0;

async function main(): Promise<void> {
  window.addEventListener('DOMContentLoaded', e => {
    thumbnail_mods(variablesObj);
    replaceBackgroundFunc('.title-boxart', '#000');
    replaceImgFunc(
      'img.boxart-image',
      'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png'
    );
  });

  window.addEventListener('scroll', e => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      thumbnail_mods(variablesObj);
      replaceBackgroundFunc('.title-boxart', '#000');
      replaceImgFunc(
        'img.boxart-image',
        'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png'
      );
    }
  });

  targets.forEach(() => {
    targets[counter].addEventListener('onclick', e => {
      thumbnail_mods(variablesObj);
      replaceBackgroundFunc('.title-boxart', '#000');
      replaceImgFunc(
        'img.boxart-image',
        'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png'
      );
    });
    counter++;
  });
}

main();
