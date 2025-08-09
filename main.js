const kotoba = document.getElementById('kotoba');
const oshie = document.getElementById('oshie');

fetch('./kotoba.json')
  .then(response => response.json())
  .then(data => {
    // data にJSONデータがオブジェクトとして格納される
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
