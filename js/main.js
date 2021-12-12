$(document).ready(function () {
  let currentFloor = 2; //текущий этаж
  let counterUp = $('.counter-up'); //кнопка увеличения этажа
  let counterDown = $('.counter-down'); //кнопка уменьшения этажа
  let floorPath = $(".home-image path"); //подсвечивание отдельного этажа в svg

  // наведение мышью по этажам с отображением номера этажа
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //убирает класс отображения выделения этажа
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значние этажа в счётчик
  });

  //по клику на стрелку счётчика вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) { //проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; //прибавляем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor); // форматируем номерацию этажа с нулём в начале по клику счётчика

      floorPath.removeClass("current-floor") //убирает класс отображения выделения этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") //добавляет класс для подсвечивания текущего этажа
    }     
  })

  //по клику на стрелку счётчика вниз
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor); // переводит номерацию этажа с нулём в начале по клику счётчика
      floorPath.removeClass("current-floor") //убирает класс отображения выделения этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") //добавляет класс для подсвечивания текущего этажа
    }
  })  
});