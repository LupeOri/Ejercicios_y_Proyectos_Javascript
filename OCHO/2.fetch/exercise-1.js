document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.agify.io?name=lupe';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response from Agify API:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });