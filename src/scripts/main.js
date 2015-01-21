var context = {'header': 'Templating', 'details': 'yaay! Handlebarss'};
var source   = document.querySelector('#scropt').innerHTML;
var template = Handlebars.compile(source);
var html    = template(context);

console.log(context);
console.log(source);
console.log(template);
console.log(html);

document.querySelector('#partialTest').innerHTML = html;