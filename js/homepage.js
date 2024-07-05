document.addEventListener('DOMContentLoaded', function () {
    const montaVistaData = [ /* fetch whatever*/
        {" Date":"11/20/2018","Total CO2 Emissions":333264.96},
        {" Date":"12/20/2018","Total CO2 Emissions":204859.35},
        {" Date":"1/22/2019","Total CO2 Emissions":0.0},
        {" Date":"2/21/2019","Total CO2 Emissions":0.0},
        {" Date":"3/22/2019","Total CO2 Emissions":0.0},
        {" Date":"4/23/2019","Total CO2 Emissions":0.0},
        {" Date":"5/22/2019","Total CO2 Emissions":455.67},
        {" Date":"6/21/2019","Total CO2 Emissions":84079.35},
        {" Date":"7/23/2019","Total CO2 Emissions":50771.52},
        {" Date":"8/22/2019","Total CO2 Emissions":31122.81},
        {" Date":"9/23/2019","Total CO2 Emissions":87142.77},
        {" Date":"10/22/2019","Total CO2 Emissions":231222.33},
        {" Date":"11/20/2019","Total CO2 Emissions":266072.85},
        {" Date":"12/20/2019","Total CO2 Emissions":171908.37},
        {" Date":"1/22/2020","Total CO2 Emissions":321390.09},
        {" Date":"2/21/2020","Total CO2 Emissions":452238.75},
        {" Date":"3/23/2020","Total CO2 Emissions":298041.12},
        {" Date":"4/22/2020","Total CO2 Emissions":58896.72},
        {" Date":"5/21/2020","Total CO2 Emissions":5056.29},
        {" Date":"6/22/2020","Total CO2 Emissions":4084.56},
        {" Date":"7/21/2020","Total CO2 Emissions":5616.27},
        {" Date":"8/20/2020","Total CO2 Emissions":5001.39},
        {" Date":"9/20/2020","Total CO2 Emissions":35240.31},
        {" Date":"10/21/2020","Total CO2 Emissions":61114.68},
        {" Date":"11/19/2020","Total CO2 Emissions":160049.97},
        {" Date":"12/21/2020","Total CO2 Emissions":200467.35},
        {" Date":"1/21/2021","Total CO2 Emissions":194636.97},
        {" Date":"2/22/2021","Total CO2 Emissions":178150.5},
        {" Date":"3/10/2021","Total CO2 Emissions":156195.99},
        {" Date":"4/9/2021","Total CO2 Emissions":108729.45},
        {" Date":"5/10/2021","Total CO2 Emissions":586513.17},
        {" Date":"6/9/2021","Total CO2 Emissions":115893.9},
        {" Date":"7/9/2021","Total CO2 Emissions":8542.44},
        {" Date":"8/10/2021","Total CO2 Emissions":33697.62},
        {" Date":"9/9/2021","Total CO2 Emissions":85671.45},
        {" Date":"10/7/2021","Total CO2 Emissions":126357.84},
        {" Date":"11/8/2021","Total CO2 Emissions":348724.8},
        {" Date":"12/8/2021","Total CO2 Emissions":171447.21},
        {" Date":"1/6/2022","Total CO2 Emissions":177398.37},
        {" Date":"2/7/2022","Total CO2 Emissions":647100.81},
        {" Date":"3/8/2022","Total CO2 Emissions":465689.25},
        {" Date":"4/8/2022","Total CO2 Emissions":400275.9},
        {" Date":"5/9/2022","Total CO2 Emissions":279106.11},
        {" Date":"6/8/2022","Total CO2 Emissions":105594.66},
        {" Date":"7/8/2022","Total CO2 Emissions":5270.4},
        {" Date":"8/9/2022","Total CO2 Emissions":9722.79},
        {" Date":"9/8/2022","Total CO2 Emissions":28992.69},
        {" Date":"10/7/2022","Total CO2 Emissions":37611.99},
        {" Date":"11/7/2022","Total CO2 Emissions":143706.24},
        {" Date":"12/8/2022","Total CO2 Emissions":178924.59},
        {" Date":"1/9/2023","Total CO2 Emissions":360918.09},
        {" Date":"2/8/2023","Total CO2 Emissions":746859.6},
        {" Date":"3/9/2023","Total CO2 Emissions":465579.45},
        {" Date":"4/10/2023","Total CO2 Emissions":525936.51},
        {" Date":"5/9/2023","Total CO2 Emissions":198408.6},
        {" Date":"6/8/2023","Total CO2 Emissions":45704.25},
        {" Date":"7/10/2023","Total CO2 Emissions":27719.01}
    ];

    const homesteadData = [
        {" Date":"11/27/2018","Total Carbon Emissions":109782.87},
        {" Date":"12/26/2018","Total Carbon Emissions":117015.51},
        {" Date":"1/27/2019","Total Carbon Emissions":135285.42},
        {" Date":"2/26/2019","Total Carbon Emissions":156105.3},
        {" Date":"3/27/2019","Total Carbon Emissions":125009.73},
        {" Date":"4/28/2019","Total Carbon Emissions":91760.91},
        {" Date":"5/28/2019","Total Carbon Emissions":74745.66},
        {" Date":"6/26/2019","Total Carbon Emissions":49515.57},
        {" Date":"7/28/2019","Total Carbon Emissions":55609.35},
        {" Date":"8/27/2019","Total Carbon Emissions":71660.34},
        {" Date":"9/26/2019","Total Carbon Emissions":86186.34},
        {" Date":"10/27/2019","Total Carbon Emissions":96667.86},
        {" Date":"11/25/2019","Total Carbon Emissions":108684.9},
        {" Date":"12/26/2019","Total Carbon Emissions":142120.89},
        {" Date":"1/27/2020","Total Carbon Emissions":155485.68},
        {" Date":"2/26/2020","Total Carbon Emissions":124938.75},
        {" Date":"3/26/2020","Total Carbon Emissions":94468.23},
        {" Date":"4/27/2020","Total Carbon Emissions":55725.84},
        {" Date":"5/27/2020","Total Carbon Emissions":27754.05},
        {" Date":"6/25/2020","Total Carbon Emissions":37725.24},
        {" Date":"7/26/2020","Total Carbon Emissions":28240.95},
        {" Date":"8/25/2020","Total Carbon Emissions":56549.25},
        {" Date":"9/24/2020","Total Carbon Emissions":58001.76},
        {" Date":"10/26/2020","Total Carbon Emissions":60266.7},
        {" Date":"11/24/2020","Total Carbon Emissions":50238.21},
        {" Date":"12/27/2020","Total Carbon Emissions":92313.39},
        {" Date":"1/26/2021","Total Carbon Emissions":73297.32},
        {" Date":"2/25/2021","Total Carbon Emissions":96047.34},
        {" Date":"3/28/2021","Total Carbon Emissions":69944.61},
        {" Date":"4/27/2021","Total Carbon Emissions":72524.13},
        {" Date":"5/26/2021","Total Carbon Emissions":55696.95},
        {" Date":"6/27/2021","Total Carbon Emissions":39375.51},
        {" Date":"7/27/2021","Total Carbon Emissions":25390.53},
        {" Date":"8/26/2021","Total Carbon Emissions":67476.84},
        {" Date":"9/27/2021","Total Carbon Emissions":93899.85},
        {" Date":"10/26/2021","Total Carbon Emissions":94239.12},
        {" Date":"11/28/2021","Total Carbon Emissions":104236.89},
        {" Date":"12/26/2021","Total Carbon Emissions":115733.79},
        {" Date":"1/25/2022","Total Carbon Emissions":115733.04},
        {" Date":"2/24/2022","Total Carbon Emissions":111090.48},
        {" Date":"3/27/2022","Total Carbon Emissions":96327.45},
        {" Date":"4/26/2022","Total Carbon Emissions":69565.29},
        {" Date":"5/25/2022","Total Carbon Emissions":63402.48},
        {" Date":"6/26/2022","Total Carbon Emissions":28421.67},
        {" Date":"7/26/2022","Total Carbon Emissions":15132.72},
        {" Date":"8/25/2022","Total Carbon Emissions":34041.33},
        {" Date":"9/26/2022","Total Carbon Emissions":64034.4},
        {" Date":"10/25/2022","Total Carbon Emissions":61048.41},
        {" Date":"11/27/2022","Total Carbon Emissions":98788.44},
        {" Date":"12/26/2022","Total Carbon Emissions":129459.24},
        {" Date":"1/25/2023","Total Carbon Emissions":125836.02},
        {" Date":"2/26/2023","Total Carbon Emissions":135202.98},
        {" Date":"3/27/2023","Total Carbon Emissions":142728.3},
        {" Date":"4/26/2023","Total Carbon Emissions":111419.7},
        {" Date":"5/25/2023","Total Carbon Emissions":93054.09},
        {" Date":"6/26/2023","Total Carbon Emissions":53215.08}
    ];

    // Processing dates and emissions data for chart
    let labels = montaVistaData.map(data => data[' Date'].trim());
    let montaVistaEmissions = montaVistaData.map(data => data['Total CO2 Emissions']);
    let homesteadEmissions = homesteadData.map(data => data['Total Carbon Emissions']);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'MVHS',
                data: montaVistaEmissions,
                borderColor: '#7c3aed',
                backgroundColor: '#7c3aed',
                hidden: false
            }, {
                label: 'HHS',
                data: homesteadEmissions,
                borderColor: '#10b981',
                backgroundColor: '#10b981',
                hidden: true
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
