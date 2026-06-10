const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(button => {

    if(button.classList.contains('disabled')) return;

    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;     

        cards.forEach(card => {

            const categories = card.dataset.category
            ? card.dataset.category.split(' ')
            : [];
           

         if (   filter === 'all' ||  categories.includes(filter)){
                card.style.display = '';
                }
                          
             else {
                card.style.display = 'none';
            }

        });

    });

});