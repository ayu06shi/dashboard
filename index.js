// let list=document.querySelectorAll(".nav li");

// function activeLink(){
//     list.forEach((item)=>{
//         item.classList.remove("hovered");
//     });
//     this.classList.add("hovered");
// }

// list.forEach(item=>item.addEventListener("mouseover", activeLink));

    
var options = {
    series: [{
    name: 'Employer',
    data: [9, 19, 50, 70, 100, 140, 160, 180, 200, 210, 230],
    color: '#36349E',
  }, {
    name: 'Employee',
    data: [10, 28, 50, 70, 90, 130, 160, 180, 200, 230, 250],
    color: '#007ED9',
  }, {
    name: 'Total Interest',
    data: [12, 50, 70, 100, 140, 160, 180, 200, 250, 280, 300],
    color: '#63BEFF',
  }],
    chart: {
    type: 'bar',
    height: 220,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 2
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '30%',
      dataLabels: {
        total: {
          enabledOnSeries: false,
          enabled: false,
          style: {
            fontSize: '10px',
            fontWeight: 800
          }
        }
      }
    },
  },
  xaxis: {
    type: 'integer',
    categories: ['20','25', '30', '35', '40', '60', '65' 
    ],
  },
  yaxis:{
    type: 'integer',
    categories: ['0', '100', '200', '300'],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#graph-object"), options);
  chart.render();

// circle chart

//   var options = {
//     series: [78],
//     showInLegend: false,
//     chart: {
//     height: 90,
//     type: 'radialBar',


//   },
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         size: '30%',
//       }
//     },
//   },
// //   labels: ['Cricket'],
//   };

//   var circhart = new ApexCharts(document.querySelector("#circhart"), options);
//   circhart.render();


//   var options = {
//     series: [95],
//     chart: {
//     height: 90,
//     type: 'radialBar',
//   },
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         size: '30%',
//       }
//     },
//   },
// //   labels: ['Cricket'],
//   };

//   var circhart = new ApexCharts(document.querySelector("#circhart"), options);
//   circhart.render();

//   var options = {
//     series: [59],
//     chart: {
//     height: 90,
//     type: 'radialBar',
//   },
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         size: '30%',
//       }
//     },
//   },
// //   labels: ['Cricket'],
//   };

  var options = {
    series: [78],
    chart: {
    height: 110,
    type: 'radialBar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '60%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '10%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: [''],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'square'
  },
  labels: [''],
  };

  var circhart = new ApexCharts(document.querySelector("#circhart"), options);
  circhart.render();

  var options = {
    series: [95],
    chart: {
    height: 110,
    type: 'radialBar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '60%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '10%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '20px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: [''],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'square'
  },
  labels: [''],
  };

  var circhart = new ApexCharts(document.querySelector("#circhart"), options);
  circhart.render();

  var options = {
    series: [59],
    chart: {
    height: 110,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '60%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '10%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
  
      dataLabels: {
        show: false,
        name: {
          offsetY: -10,
          show: false,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    color: 'blue',
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: square
  },
  labels: [''],
  };

  var circhart = new ApexCharts(document.querySelector("#circhart"), options);
  circhart.render();


// slider
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }