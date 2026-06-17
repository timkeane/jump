import papa from 'papaparse';

const redirectId = window.location.search?.split('=')[1];

function notFound() {
  document.getElementById('not-found').style.display = 'block';
}

function error(err, file, inputElem, reason) {
  console.error({err, file, inputElem, reason});
  notFound();
}

function complete(response) {
  let found = false;
  response.data.forEach(redirect => {
    if (redirect.id == redirectId) {
      found = true;
      document.getElementById('link').href = redirect.url;
      document.getElementById('name').innerHTML = redirect.name;
      document.getElementById('jump').style.display = 'block';
    }
  });
  if (!found) notFound();
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

papa.parse('./redirect.csv', config);
