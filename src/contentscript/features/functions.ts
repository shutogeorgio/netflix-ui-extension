import { configTargets } from './interface';

export function thumbnail_mods(moduleObj: configTargets) {
  let setTargets = document.querySelectorAll(moduleObj.actors);
  let setTitles = document.querySelectorAll(moduleObj.titles);
  let setHeadings = document.querySelectorAll(moduleObj.headings);

  if (!setTargets) return;
  setTargets.forEach(function(setTarget) {
    setTarget.textContent = 'XXX';
  });

  if (!setTitles) return;
  setTitles.forEach(function(setTitle) {
    setTitle.innerHTML = "<h4 class='video-title'>Title</h4>";
  });

  if (setHeadings) {
    setHeadings.forEach(function(setHeading) {
      setHeading.textContent = 'Unknown';
    });
  }
}

export function replaceBackgroundFunc(className: string, content: string) {
  var items = document.querySelectorAll(className);
  items.forEach(function(item: HTMLInputElement) {
    item.style.background = content;
  });
}

export function replaceImgFunc(className: string, content: string) {
  var items = document.querySelectorAll(className);
  items.forEach(function(item: HTMLInputElement) {
    item.src = content;
  });
}
