import checkStatus from './checkStatus.js';
import parseJSON from './parseJSON.js';

var getData = function(link) {
    return (
        fetch(link)
        .then(checkStatus)
        .then(parseJSON)
    )
}
export default getData;