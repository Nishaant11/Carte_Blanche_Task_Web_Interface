window.onload = function() {
  const csvFileInput = document.getElementById('csvFileInput');
  csvFileInput.addEventListener('change', handleFileSelect, false);
};

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const contents = event.target.result;
    const lines = contents.split('\n');
    const tableContainer = document.getElementById('tableContainer');
    let tableHtml = '<table>';

    // Parse the CSV and generate the HTML table
    lines.forEach(function(line, index) {
      const row = line.split(',');
      tableHtml += '<tr class="' + (index % 2 === 0 ? 'even' : 'odd') + '">';
      row.forEach(function(cell) {
        tableHtml += '<td>' + cell + '</td>';
      });
      tableHtml += '</tr>';
    });

    tableHtml += '</table>';
    tableContainer.innerHTML = tableHtml;

    const linkContainer = document.querySelector('.link-container');
    linkContainer.classList.remove('hidden');
  };

  reader.readAsText(file);
}
