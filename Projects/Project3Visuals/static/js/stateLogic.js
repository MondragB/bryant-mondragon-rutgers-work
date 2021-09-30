// Populate drop-down list with State table returned from /page5
d3.json("/stateAbr").then(function(dlist){
    for (var st in dlist){
        var opt = document.createElement('option');
        opt.innerHTML = dlist[st].state_nm;
        opt.value = dlist[st].state_nm;
        selDataset.appendChild(opt);
    }
})

// With State selected in dropdown list
function optionChanged(x){
  console.log(x);
  var state_names = [];
  var price = [];
  var avg_price = []
  var when = []
    
    
  var l_state = x.toLowerCase();
  console.log(l_state)

  d3.json("/statedata").then(function(data) { 
    var state_h = data 
    // console.log(l_state)
    //Get json data from /page3 containing median and average listing price per year for each state.
    //Create lists of price data for the state selected
    for (var key in state_h) {
        if (state_h[key].states === l_state) {
          state_names.push(state_h[key].states);
          price.push(state_h[key].median_listing_price);
          avg_price.push(state_h[key].average_listing_price);
          when.push(state_h[key].month_date_yyyymm)
          }
      }

    //Make traces for scatter plot
    var trace1 = {
      x: when,
      y: price,
      mode: 'lines',
      type: 'scatter',
      line: {
        color: 'rgb(55, 128, 191)',
        width: 10
      },
      name: "Median Price"
    };

    var trace2 = {
      x: when,
      y: avg_price,
      mode: 'lines',
      type: 'scatter',
      line:{width:10},
      name:  'Average Price'
    };

    var layout = {
      title:'Historic Median and Average Listing Price',
      width: 800,
      height: 600,
      xaxis: {type: 'category',
            title: 'Date- YYYYMM'},
      yaxis: { autorange: true ,
                title: '$ US Dollars'},
    };

    var plot_data = [trace1, trace2];
    Plotly.newPlot("LinePlot", plot_data, layout);
    });


    //Initialize then collect json data from /page5 containing state name abbreviations
    //Find abbreviation for state selected
    metros = []
    hots = []
    d3.json("/stateAbr").then(function(st_abr) {
      var state_abrevs = st_abr
      console.log(state_abrevs)
      for (var st in state_abrevs){
          if(state_abrevs[st].state_nm === l_state){
              var sid = state_abrevs[st].abr
          }
          console.log("abr", sid);
        }
      //Gather json data from /page4 containing metro area and hotness index.
      d3.json("/hotness").then(function(hotdata) { 
        var metro_h = hotdata 
        console.log(hotdata)
  
  
        //Find metro areas within state selected and hotness scores.
        for (var key in metro_h) {
          if (metro_h[key].state_id.includes(sid)) {
            metros.push(metro_h[key].metro);
            hots.push(metro_h[key].hotness_score);
          }
        }

        //Create bar chart
          var bardata = [
            {
              x: metros,
              y: hots,
              type: 'bar',
              marker:{color: 'rgb(118,44,8)'}
            }
          ];
          var bar_layout = {
            title: "Hotness Score by Metro Area",
            xaxis: {
              tickangle: -45
            },
            yaxis:{
                title:"Hotness Index"
            }
        };
  
        Plotly.newPlot('barchart', bardata, bar_layout);
      })
  })
}