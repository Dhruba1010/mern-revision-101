const options = document.querySelectorAll('.option');

options.forEach((e) => {
    e.addEventListener('click', () => {

        options.forEach((e) => {
            e.classList.remove('active');
        })

        e.classList.add('active');
    })
})