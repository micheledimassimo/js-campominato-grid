const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function () {
        const gridContainer = document.getElementById('grid-container');

        for (let i = 1; i <= 100; i++) {

            const newCell = document.createElement('div');
            newCell.classList.add('grid-box');
            newCell.innerHTML = i;
            newCell.addEventListener('click', function() {
                newCell.classList.add('change-color');
                console.log('i');
            });
            gridContainer.append(newCell);
        }
    }
);