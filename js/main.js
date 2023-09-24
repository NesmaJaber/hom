$(function () {

 
  $(".switch-btn").click(function () {
    $("button").removeClass("active");
    $(this).addClass("active");
  });
  $(".link-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });


});

function viewPassword1() {
  let passField1 = document.getElementById("password-field1");
  let iconEye1 = document.getElementById("icon-eye1");
  if (passField1.type === "password") {
    passField1.type = "text";
    iconEye1.classList = "fa-regular fa-eye";


  } else {
    passField1.type = "password";
    iconEye1.classList = "fa-regular fa-eye-slash";
  }
}

function viewPassword2() {
  let passField2 = document.getElementById("password-field2");
  let iconEye2 = document.getElementById("icon-eye2");
  if (passField2.type === "password") {
    passField2.type = "text";
    iconEye2.classList = "fa-regular fa-eye";


  } else {
    passField2.type = "password";
    iconEye2.classList = "fa-regular fa-eye-slash";
  }
}
function viewPassword3() {
  let passField3 = document.getElementById("password-field3");
  let iconEye3 = document.getElementById("icon-eye3");
  if (passField3.type === "password") {
    passField3.type = "text";
    iconEye3.classList = "fa-regular fa-eye";


  } else {
    passField3.type = "password";
    iconEye3.classList = "fa-regular fa-eye-slash";
  }
}

const categories = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data = [0, 20, 15, 25, 30, 0];
Highcharts.chart('container', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', // Customize the line color
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' // Customize the marker color
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for responsiveness
      },
      chartOptions: {
        legend: {
          enabled: false // Hide the legend on small screens
        }
      }
    }]
  }
});


const categories2 = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data2 = [0, 20, 15, 25, 30, 0];
Highcharts.chart('container2', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories2,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data2,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', // Customize the line color
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' // Customize the marker color
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false // Hide the legend on small screens
        }
      }
    }]
  }
});


/* tab button store */
function showTab(tabId) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('activee');
  });

  document.getElementById(tabId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
  clickedButton.classList.add('activee');
}

showTab('tab1');




let nav = document.querySelector(".navv"),
  navList = document.querySelectorAll(".navv .link-item"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    showSection(this);
  })
}
function showSection (element){
  for(let i =0 ;i<totalSection;i++){
    allSections[i].classList.remove("active");
    
  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");


}