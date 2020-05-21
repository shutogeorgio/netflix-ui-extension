import './contentscript.scss';
import { replaceAll } from './features/replacement';

let targets = document.querySelectorAll('.handle');

async function main(): Promise<void> {
  window.addEventListener('DOMContentLoaded', () => replaceAll());
  window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      replaceAll();
    }
  });

  targets.forEach(target => {
    target.addEventListener('onclick', () => replaceAll());
  });
}

main();
