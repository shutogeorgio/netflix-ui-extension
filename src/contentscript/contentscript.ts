import './contentscript.scss';

const isThisContentscript: boolean = true;
console.log('isThisContentscript', isThisContentscript);

const thumbnail_mods = (): void => {
  let setTarget: NodeList = document.querySelectorAll(".list-items");
  if (!setTarget) return;
}

thumbnail_mods();
