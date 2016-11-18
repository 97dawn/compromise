var test = require('ava');
var nlp = require('./lib/nlp');
var str_test = require('./lib/fns').str_test;

test('.article():', function(t) {
  [
    ['duck', 'a'],
    ['eavesdropper', 'an'],
    ['alligator', 'an'],
    ['hour', 'an'],
    ['NDA', 'an'],
    ['F.B.I', 'an'],
    ['N.D.A.', 'an'],
    ['eulogy', 'a'],
    ['ukalele', 'a'],
  ].forEach(function (a) {
    var o = nlp(a[0]).tag('Noun').nouns().parse()[0];
    var msg = a[0] + ' -> ' + o.article;
    t.is(o.article, a[1], msg);
  });
  t.pass();
});
