document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        const faqItem = this.parentNode;
        const toggleIcon = this.querySelector('.toggle-icon');
 
        faqItem.classList.toggle('active');
 
        // Меняем изображение в зависимости от состояния
        if (faqItem.classList.contains('active')) {
            toggleIcon.src = 'img/svg/minus.svg'; // Изменяем на минус
            this.classList.add('active'); // Добавляем класс active к faq-question
            const answer = faqItem.querySelector('.faq-answer');
            answer.style.display = 'block';
        } else {
            toggleIcon.src = 'img/svg/plus.svg'; // Возвращаем на плюс
            this.classList.remove('active'); // Убираем класс active от faq-question
            const answer = faqItem.querySelector('.faq-answer');
            answer.style.display = 'none';
        }

    });
 });
 