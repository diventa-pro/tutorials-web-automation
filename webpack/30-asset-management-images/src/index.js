import _ from 'lodash';
import say_webpack_again from './say_webpack_again.jpg';
import i_know_webpack from './sub/i_know_webpack.jpg';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Add the image to our existing div.
    {
        var myImg = new Image();
        myImg.src = "../dist/" +  say_webpack_again;
        element.appendChild(myImg);
    }

    {
        // Add the image to our existing div.
        var myImg = new Image();
        myImg.src = "../dist/" +  i_know_webpack;
        element.appendChild(myImg);
    }

    return element;
}

document.body.appendChild(component());
