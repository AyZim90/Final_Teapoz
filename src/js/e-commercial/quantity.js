document.addEventListener('DOMContentLoaded', function() {
    var quantityElement = document.querySelector('.quantity');
    var countElement = document.querySelector('.quantity .count');
    var radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');
  
    // Установим начальное значение count в 1
    countElement.textContent = '1';
  
    // Обработчик изменения радио-кнопок
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        countElement.textContent = this.value; // Используем значение радио-кнопки в качестве count
      });
    });
  
    // Обработчики для кнопок увеличения и уменьшения
    document.querySelector('.quantity .plus').addEventListener('click', function() {
      var count = parseInt(countElement.textContent);
      countElement.textContent = count + 1;
    });
  
    document.querySelector('.quantity .minus').addEventListener('click', function() {
      var count = parseInt(countElement.textContent);
      if (count > 1) {
        countElement.textContent = count - 1;
      }
    });
  });
  