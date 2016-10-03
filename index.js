/**
 * @description
 * Use a HTML structure to build data to send emails
 */

'use strict';

var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var templateDir = path.join(__dirname, 'templates', 'newsletter');

console.log('Running...');

var newsletter = new EmailTemplate(templateDir);
var async = require('async');
var users = [
    {
        name: 'Cauê',
        food: [
            {
                'name' : 'Pasta'
            },
            {
                'name' : 'Salad'
            },
            {
                'name' : 'Rice'
            }
        ]
    },
    {
        name: 'John',
        food: [
            {
                'name' : 'Hamburguer'
            },
            {
                'name' : 'Tomatoes'
            }
        ]
    }
];
var data_html = '';

async.each(users, function (user, next) {
  newsletter.render(user, 'pt-br', function (err, result) {
    if (err) return next(err)
    data_html += result.html;
    next();
  })
}, function (err) {
    // All tasks are done now
    doSomethingOnceAllAreDone();
})

var doSomethingOnceAllAreDone = function(){
    console.log('daora');
    console.log(data_html);
};
