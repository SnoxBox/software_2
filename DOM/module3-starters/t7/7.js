targetElement = document.getElementById('target');

targetElement.addEventListener("mouseover", function() {
    targetElement.src = '/ohjelmisto_2/tmp/module3-starters/t7/img/picB.jpg'
  });

  targetElement.addEventListener("mouseout", function() {
    console.log('hover');
    targetElement.src = '/ohjelmisto_2/tmp/module3-starters/t7/img/picA.jpg'
  });

  