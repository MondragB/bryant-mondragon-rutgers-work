d3.json("/hotnessdata", function(data) {

    locations = [];
    z = [];
    text = [];

    data.forEach(element => {
        locations.push(element[1].trim().toUpperCase());
        z.push(element[7]);
        text.push(element[5]);
    });

    let results = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: locations,
        z: z,
        text: text,
        zmin: 0,
        zmax: 1000,
        colorscale: [
            [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
            [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
            [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
        colorbar: {
            title: 'Hotness Rank',
        },
        marker: {
            line:{
                color: 'rgb(255,255,255)',
                width: 2
            }
        },
        reversescale : true
    }];

    let layout = {
        title: 'Hotness Rating by State',
        geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
        },
    };

    let config = {responsive: true}

    Plotly.newPlot("myDiv", results, layout, config, {showLink: false});
});