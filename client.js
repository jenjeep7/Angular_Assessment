var app = angular.module('myApp', []);

app.controller('TextController', function(){
  // As of turning this in, my controller is still showing the wrong
  // thing on the DOM.  I want to display what is consoled in the getList function
  // but it is showing the word entered as well instead of just the list as of then
  var vm = this;

  vm.wordList = [];
  vm.words = '';
  vm.show = false;
  vm.newWord = '';
  vm.allMessage = false;
  vm.totalList= '';

  vm.makeList = function(){
    console.log(vm.words);
    // vm.words = words;
    vm.newWord = vm.words;
    vm.words = '';
    vm.show = true;
    vm.totalList= vm.wordList;
    vm.getList();

  };

  vm.getList = function(){


    // vm.totalList = vm.wordList;
    console.log(vm.totalList);
    // vm.totalList = vm.wordList;
    // console.log(vm.totalList);
    vm.allMessage = true;
    vm.wordList.push(vm.newWord);
  };
});
