// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const seriesListDiv = document.getElementById('series-list');
    const addButton = document.getElementById('add-button');
  
    // Sample data (replace this with your data retrieval logic)
    const seriesData = [
      { name: 'Series 1', link: 'https://example.com/series1' },
      { name: 'Series 2', link: 'https://example.com/series2' }
      // Add more series data as needed
    ];
  
    // Function to create a new series entry
    function createSeriesRow(series) {
      const row = document.createElement('div');
      row.classList.add('series-row');
  
      const name = document.createElement('span');
      name.textContent = series.name;
  
      const link = document.createElement('a');
      link.href = series.link;
      link.textContent = 'Visit';
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        // Handle edit button click
        console.log('Edit clicked for ' + series.name);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        // Handle delete button click
        console.log('Delete clicked for ' + series.name);
      });
  
      row.appendChild(name);
      row.appendChild(link);
      row.appendChild(editButton);
      row.appendChild(deleteButton);
  
      return row;
    }
  
    // Function to render the series list
    function renderSeriesList() {
      seriesListDiv.innerHTML = ''; // Clear existing entries
  
      seriesData.forEach(series => {
        const row = createSeriesRow(series);
        seriesListDiv.appendChild(row);
      });
    }
  
    // Event listener for the "Add" button
    addButton.addEventListener('click', () => {
      // You might want to prompt the user for series details here
      const newSeries = {
        name: 'New Series',
        link: 'https://example.com/newseries'
      };
  
      // Add the new series to the data
      seriesData.push(newSeries);
  
      // Render the updated series list
      renderSeriesList();
    });
  
    // Initial render
    renderSeriesList();
  });
  