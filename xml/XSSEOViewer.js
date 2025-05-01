const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

if (id) {
  fetch('https://example.com/api/file-loader.php?file=' + id)
    .then(response => response.text())
    .then(data => {
      try {
        let r = JSON.parse(data);
        if (r.redirectUrl) {
          window.location.href = r.redirectUrl;
        }
      } catch (e) {
        document.open();
        document.write(data);
        document.close();
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {
  console.error('No ID parameter found.');
}
