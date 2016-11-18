var test = require('ava');
var nlp = require('./lib/nlp');
var pos_test = require('./lib/fns').pos_test;


test('default lexicon:', function (t) {
  [
    ['great', 'Adjective'],
    ['walked', 'PastTense'],
    ['singing', 'Gerund'],
    ['funniest', 'Superlative'],
    ['sillier', 'Comparative'],
    ['the', 'Determiner'],
    ['iraqi', 'Demonym'],
    ['december', 'Date'],
    ['fifth', 'Value'],
    ['suddenly', 'Adverb'],
    ['shanghai', 'City'],
    ['google', 'Organization'],
  ].forEach(function (a) {
    var terms = nlp(a[0]).terms;
    pos_test(terms, [a[1]], t);
  });
  t.pass();
});

test('adjusted lexicon:', function (t) {
  //place new words
  var context = {
    lexicon: {
      'paris': 'Person',
      'lkjj': 'Adjective',
      'donkey kong': 'City'
    }
  };

  var arr = [
    ['paris is nice', ['Person', 'Copula', 'Adjective']],
    ['he is lkjj', ['Pronoun', 'Copula', 'Adjective']],
    ['donkey kong wins the award', ['City', 'Verb', 'Determiner', 'Noun']],
  ];
  arr.forEach(function (a) {
    var terms = nlp(a[0], context).terms;
    pos_test(terms, a[1], t);
  });
  //
  // //set gender from lexicon
  // var terms = nlp('Kelly', context).terms;
  // pos_test(terms, ['FemaleName'], t);
  // //set as male:
  // context = {
  //   lexicon: {
  //     kelly: 'MaleName'
  //   }
  // };
  // terms = nlp('Kelly', context).terms;
  // pos_test(terms, ['MaleName'], t);
  // //gender follows lumping
  // terms = nlp.sentence('Kelly Gruber', context).terms;
  // pos_test(terms, ['MaleName'], t);

  t.pass();
});
