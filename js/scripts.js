//Coffee Bar Graph
var coffeeData = {
  type: "bar",  // Specify your chart type here.
  plot: {
    "background-color": "red pink",
    "font-family": "Fascinate Inline"
  },
  title: {
    text: "Style" // Adds a title to your chart
  },
  "scale-x": {
    "labels": ["Latte", "Americano", "Espresso", "Mocha", "Cappuccino"]
  },
  legend: {}, // Creates an interactive legend
  series: [  // Insert your series data here.
    { values: [85, 50, 43, 80, 60]}
  ]
};
zingchart.render({ // Render Method[3]
  id: "chartCoffee",
  data: coffeeData,
  height: 350,
  width: '20%'
});

//Pie Coffee Graph
var myCoffeeTwo = {
  type: "pie",
  title: {
    text: "Drip vs. French Press"
  },
  series:[
    {
      "values": [70],
      "background-color": "pink red"
    },
    {
      "values":[30],
      "background-color": "red pink",
    }
  ]
};
zingchart.render({
  id:'chartCoffeeTwo',
  data: myCoffeeTwo,
  height: 350,
  width: '20%'
});

//Dairy Bar Graph
var dairyData = {
  type: "bar",  // Specify your chart type here.
  plot: {
    "background-color": "blue pink",
  },
  title: {
    text: "Flavor" // Adds a title to your chart
  },
  "scale-x": {
    "labels": ["Skim", "2%", "Almond", "Cashew", "Soy"]
  },
  legend: {}, // Creates an interactive legend
  series: [  // Insert your series data here.
    { values: [60, 20, 50, 13, 89]}
  ]
};
zingchart.render({ // Render Method[3]
  id: "chartDairy",
  data: dairyData,
  height: 350,
  width: '20%'
});

//Pie Dairy Graph
var dairyDataPie = {
  type: "pie",
  title: {
    text: "Dairy vs. Non-Dairy"
  },
  series:[
    {
      "values": [45],
      "background-color": "blue pink"
    },
    {
      "values":[55],
      "background-color": "pink blue",
    }
  ]
};
zingchart.render({
  id:'pieDairy',
  data: dairyDataPie,
  height: 350,
  width: '20%'
});
