'use strict'

angular.module('wildNoteApp')

    .component('home', {
            url: '/app/components/home/home.html',
            controller: function(Users) {
                const vm = this;
                Users.get().$promise.then(function(res) {
                    vm.users = res.users;
                })
              }
            })
