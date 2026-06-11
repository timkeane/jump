import papa from 'papaparse';

const secondsToWait = 4;
const id = window.location.search?.split('=')[1];

function error(err, file, inputElem, reason) {
  console.error({err, file, inputElem, reason});
  document.getElementById('not-found').style.display = 'block';
}

function complete(response) {
  let found = false;
  response.data.forEach(memorial => {
    if (memorial.id == id) {
      found = true;
      document.getElementById('link').href = memorial.url;
      document.getElementById('name').innerHTML = memorial.name;
      document.getElementById('memorial').style.display = 'block';
    }
  });
  if (!found) document.getElementById('not-found').style.display = 'block';
}

const config = {
  download: true,
  quotes: true,
  quoteChar: '"',
  delimiter: ',',
  header: true,
  newline: '\n',
  skipEmptyLines: true,
  complete,
  error
};

papa.parse('./memorial.csv', config);
