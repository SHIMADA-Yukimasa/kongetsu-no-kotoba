import { kotoba } from './kotoba.js';

function toZenkaku(str) {
  return str.replace(/[0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

const month = document.getElementById('month');
const proverb = document.getElementById('proverb');
const explanation = document.getElementById('explanation');

month.innerText = toZenkaku(kotoba.month) + "月の言葉"
proverb.innerHTML = kotoba.proverb.split('\n').join('<br>');
explanation.innerHTML = kotoba.explanation.split('\n').join('<br>');