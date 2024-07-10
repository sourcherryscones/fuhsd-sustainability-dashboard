import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

document.addEventListener('DOMContentLoaded', async function () {
      
    function clean_csv(data){
        for (let i = 0; i < data.length; i++){
            data[i].Date = new Date(data[i].Date)
            data[i].KWH = parseFloat(data[i].KWH)
            data[i].Therms = parseFloat(data[i].Therms)
        }
        return data
    }

    let mvhs_json = await d3.csv('./data_files/mvhs.csv')
    let lhs_json = await d3.csv('./data_files/lhs.csv')
    let hhs_json = await d3.csv('./data_files/hhs.csv')

    mvhs_json = clean_csv(mvhs_json)
    lhs_json = clean_csv(lhs_json)
    hhs_json = clean_csv(hhs_json)
    console.log(hhs_json)

    function calculate_totals(input_json){
        let kwh_sum = d3.sum(input_json, function(d){
            return d.KWH
        })
        console.log("KWH:" +  kwh_sum)
        let therm_sum = d3.sum(input_json, function(d){
            return d.Therms
        })
        console.log("THERMS:" + therm_sum)

        return kwh_sum, therm_sum
    }
   
    // Processing dates and emissions data for chart
    // let labels = montaVistaData.map(data => data[' Date'].trim());
    // let montaVistaEmissions = montaVistaData.map(data => data['Total CO2 Emissions']);
    // let homesteadEmissions = homesteadData.map(data => data['Total Carbon Emissions']);

    let thermLabels = mvhs_json.map(data => data.Date.toLocaleDateString())
    let thermData = mvhs_json.map(data => data.Therms)
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: thermLabels,
            datasets: [{
                label: 'MVHS',
                data: thermData,
                borderColor: '#7c3aed',
                backgroundColor: '#7c3aed',
                hidden: false
            }]
        },
        options: {
            plugins: {
                legend:{
                    display:false,
                    onClick: null
                },
                title:{
                    display: false,
                    font:{
                        size: 30
                    },
                    text: 'CO2e emissions, by school'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    const bar_data = [
        { category: 'Monta Vista', kwh: 70 },
        { category: 'Homestead', kwh: 40 },
        { category: 'Lynbrook', kwh: 50},
        { category: 'Tino', kwh: 30 },
        { category: 'Fremont', kwh: 36}
    ];
    
    var ctx2 = document.getElementById('energyBarChart').getContext('2d');
    var nrgBarChart = new Chart(
        ctx2,
        {
        type: 'bar',
        data: {
            labels: bar_data.map(row => row.category),
            datasets: [
            {
                label: 'kWh used, by school',
                data: bar_data.map(row => row.kwh)
            }
            ]
        }
        ,
        options:
        {
            indexAxis: 'y'
        }
    }
    );
});
