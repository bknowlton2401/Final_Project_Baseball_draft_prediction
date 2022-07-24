// from HTML_column_data.js
const tableData = data_list;



// get table references
var tbody = d3.select("tbody");

// Define Columns of the datatable
let columnData = [                        
  {title: "Year"},
  {title: "Round"},
  {title: "Overall Pick"},
  {title: "Team"}, 
  {title: "Signed"}, 
  {title: "Bonus"}, 
  {title: "Name"}, 
  {title: "Position"}, 
  {title: "WAR"}, 
  {title: "G"}, 
  {title: "AB"}, 
  {title: "HR"}, 
  {title: "BA"}, 
  {title: "OPS"}, 
  {title: "G1"}, 
  {title: "W"}, 
  {title: "L"}, 
  {title: "ERA"}, 
  {title: "WHIP"}, 
  {title: "SV"}, 
  {title: "Draft Type"}, 
  {title: "Drafted Out Of"}, 
  {title: "Team Made Playoffs"}
];

//function buildTable(data) {
  // First, clear out any existing data
  //tbody.html("");

    // Initialize the DataTable
    $(document).ready(function () {
      var dt = $('#DataTables_0').DataTable({
        data: tableData,
        columns: columnData,
        pageLength: 10, 
  
        // Specify the paging type to be used
        // in the DataTable
        //pagingType: "simple_numbers", 

        // create the search/filter pane
        searchPanes: {
          viewTotal: true, 
          show: true,
          layout: `columns-5`,
          columns: [0, 2, 3, 7, 22]
        },

        dom: 'Plfrtip',

        columnDefs: [
          {
            orderable: true,
            searchPanes: {
              show: true,
            },
            targets: [0]
          },
          {
            searchPanes: {
              show: true,
              options: [
                {
                  label: '1 to 10', 
                  value: function(rowData, rowIdx) {
                    return rowData[2] < 11;
                  }
                },
                {
                  label: '11 to 20', 
                  value: function(rowData, rowIdx) {
                    return rowData[2] <= 21 && rowData[2] >=11;
                  }
                },
                {
                  label: '21 to 30',
                  value: function(rowData, rowIdx) {
                    return rowData[2] <= 30 && rowData[2] >=21;
                  }
                },
                {
                  label: '31 to 40',
                  value: function(rowData, rowIdx) {
                    return rowData[2] <= 40 && rowData[2] >= 31; 
                  }
                },
                {
                  label: '41 to 50',
                  value: function(rowData, rowIdx) {
                    return rowData[2] <= 50 && rowData[2] >= 41; 
                  }
                },
                {
                  label: '51 and up',
                  value: function(rowData, rowIdx) {
                    return rowData[2] >= 51; 
                  }
                }
              ]
            },
            targets: [2]
          },
          {
            searchPanes: {
              show: true,
            },
            targets: [3]
          }
        ],
        select: {
          style: 'os', 
          selector: 'td:first-child'
        },
        order: [[1, 'asc']]
      });

      dt.on('select.dt', () => {
        dt.searchPanes.rebuildPane(0, true);
      });

      dt.on('deselect.dt', () => {
        dt.searchPanes.rebuildPane(0, true);
      });
    });
  //}  

  // Build the table when the page loads
  //buildTable(tableData);
