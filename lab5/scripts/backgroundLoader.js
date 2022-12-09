const { RandomPicture } = require('random-picture')

const loadRandomBackground = () => {
    RandomPicture()
        .then(img => {
            const main = document.querySelector('main');

            const imageElement = document.createElement('img');
            imageElement.className = 'bg-image';
            imageElement.src = img.url

            main.before(imageElement)
        });
}

export {loadRandomBackground}
