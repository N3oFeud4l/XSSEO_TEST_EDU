fetch('XSSEOViewer.html')
  .then(response => response.text())
  .then(data => {
    document.open();
    document.write(data);
    document.close();
  })
  .catch(error => {
    console.error('Error fetching viewer:', error);
  });
