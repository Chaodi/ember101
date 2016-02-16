/**
 * Created by yangchao on 2016/2/16.
 */
// declare application
var app = Ember.Application.create({
    LOG_TRANSITIONS:true
});

//define router
app.Router.map(function(){
//route to each par
//everything starts here
//each line defines a new module
    //this make http://XXX/app#/data available through browser, or for {{#link-to}}
    //as default route to index, so we don't need a this.route('index')
    this.route('data');

});

// the most basic controller definition, is just for storing some attribute for a template interactive usage
app.IndexController = Ember.Controller.extend({
    times : 6,
    logo : 'resource/img/logo.png', //{{bind-attr}} is no longer supported sincce 1.10
    time : function() {
        return (new Date().toDateString())
    }.property()
});
