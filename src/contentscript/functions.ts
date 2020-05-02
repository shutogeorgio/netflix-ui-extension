import { configTargets } from './interface';

export function thumbnail_mods(moduleObj: configTargets) {
  let setTargets = document.querySelectorAll(moduleObj.actors);
  let setHeadings = document.querySelectorAll(moduleObj.headings);
  let titleObj = [];

  if (setTargets) {
    setTargets.forEach(setTarget => {
      setTarget.textContent = "XXX";
    })
  }


  moduleObj.titles.forEach(title => {
    let titleNodes = document.querySelectorAll(title);
    titleNodes.forEach(target => {
      titleObj.push(target);
    })
  });

  if (titleObj) {
    titleObj.forEach(setTitle => {
      setTitle.innerHTML = "<h4 class='video-title'>Imagine Title Please</h4>";
    })
  }

  if (setHeadings) {
    setHeadings.forEach(setHeading => {
      setHeading.textContent = "";
    });
  }
}

export function replaceBackgroundFunc(className: string, content: string) {
  let items = document.querySelectorAll(className);
  items.forEach(function (item: HTMLInputElement) {
    item.style.background = content;
  });
}

export function replaceImgFunc(className: string, content: string) {
  let items = document.querySelectorAll(className);
  items.forEach(function (item: HTMLInputElement) {
    item.src = content;
  });
}

export function dynamicDisplayFunc(className: string, content: string) {
  let items = document.querySelectorAll(className);
  items.forEach(function (item: HTMLInputElement) {
    item.style.display = content;
  });
}
