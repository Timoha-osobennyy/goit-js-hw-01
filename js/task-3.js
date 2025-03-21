function getElementWidth(content, padding, border) {
      // Перетворюємо рядкові значення на числа (видаляємо "px" і конвертуємо в числа)
      const contentWidth = parseFloat(content);
      const paddingWidth = parseFloat(padding) * 2; // Падінг з обох сторін
      const borderWidth = parseFloat(border) * 2; // Бордер з обох сторін

  
      const totalWidth = contentWidth + paddingWidth + borderWidth;
  
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200