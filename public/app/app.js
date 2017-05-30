'use strict'

const config = [
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

const run = [
    "$state",
    Run
]

angular.module('wildNoteApp', [
        "ui.router",
        "ngAnimate",
        "ngResource"
    ])
    .config(config)
    .run(run)

// .factory("Hey", function() {
//     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
// })

function Config($stateProvider, $urlRouterProvider) {
    const states = [{
            name: "home",
            url: "/",
            component: "home"
        },
        {
            name: "userPage",
            url: "/users/:id",
            component: "userPage"
        }
    ]
    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/zergling')

}

function Run($state) {
    if (!navigator.onLine) {
        $state.go("offline")
    }
}
