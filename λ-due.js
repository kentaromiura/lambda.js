var λ = require('λ');
module.exports = function(params, body){
    if(!body){
        body = params;
        params = 'x';
    }
    return λ(params, 'return '+body);
}