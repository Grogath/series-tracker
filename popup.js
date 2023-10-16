// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const seriesListDiv = document.getElementById('series-list');
    const addButton = document.getElementById('add-button');
  
    // Function to create a new series entry
    function createSeriesRow(series) {
      const row = document.createElement('div');
      row.classList.add('series-row');
  
      const seriesInfo = document.createElement('div');
      seriesInfo.classList.add('series-info');
  
      const name = document.createElement('span');
      name.textContent = series.name;
  
      const link = document.createElement('a');
      link.href = series.link;
      link.textContent = 'Visit';
      link.classList.add('series-link');
  
      seriesInfo.appendChild(name);
      seriesInfo.appendChild(link);
  
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
        // Remove the series from the data and storage
        removeSeries(series);
      });
  
      row.appendChild(seriesInfo);
      row.appendChild(editButton);
      row.appendChild(deleteButton);
  
      return row;
    }
  
    // Function to render the series list
    function renderSeriesList(seriesData) {
      seriesListDiv.innerHTML = ''; // Clear existing entries
  
      seriesData.forEach(series => {
        const row = createSeriesRow(series);
        seriesListDiv.appendChild(row);
      });
    }
  
    // Function to save series data to storage
    function saveSeriesData(seriesData) {
      chrome.storage.sync.set({ seriesData: seriesData });
    }
  
    // Function to retrieve series data from storage
    function getSeriesData(callback) {
      chrome.storage.sync.get(['seriesData'], function(result) {
        const seriesData = result.seriesData || [];
        callback(seriesData);
      });
    }
  
    // Function to remove a series from data and storage
    function removeSeries(seriesToRemove) {
      getSeriesData(function(seriesData) {
        const updatedSeriesData = seriesData.filter(series => series !== seriesToRemove);
        saveSeriesData(updatedSeriesData);
        renderSeriesList(updatedSeriesData);
      });
    }
  
    // Event listener for the "Add" button
    addButton.addEventListener('click', () => {
      // You might want to prompt the user for series details here
      const newSeries = {
        name: 'New Series',
        link: 'https://example.com/newseries'
      };
  
      // Add the new series to the data and storage
      getSeriesData(function(seriesData) {
        seriesData.push(newSeries);
        saveSeriesData(seriesData);
        renderSeriesList(seriesData);
      });
    });
  
    // Initial render
    getSeriesData(renderSeriesList);
  });
  