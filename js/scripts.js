var coffeeData = {
  type: "bar",  // Specify your chart type here.
  plot: {
    "background-color": "red pink",
  },
  title: {
    text: "Favorite Coffee" // Adds a title to your chart
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
  height: 400,
  width: '50%'
});

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
  height: 400,
  width:'50%'
});
