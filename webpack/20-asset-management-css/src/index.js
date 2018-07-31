import _ from 'lodash';

// A css is imported in a js !!!
// This is because we have a webpack loader.
import './style.css';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // add a class
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
