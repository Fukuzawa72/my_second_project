let cards = document.querySelectorAll('.option')

cards.forEach(card => {
    card.addEventListener('mouseover', event => {
      // 先移除所有元素的 .active 類別
      cards.forEach(card => {
        card.classList.remove('active');
      });
  
      // 再為當前被點擊的元素添加 .active 類別
      event.currentTarget.classList.add('active');
    });
  });


  
  
  
  
  
  
  
  
  
  