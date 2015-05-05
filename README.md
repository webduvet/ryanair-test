# ryanair-test
interview app

## installation

`git clone <this repo>`

### install proxy
ryanair test resource does not allow CORS (does not set the header)
nor it does support JSONP, so the only option I am aware of is to setup proxy

the `proxy` directory contain ultra simple proxy server piping the data from ryanair's machine
the query is exactly the same as the one which the original server supports. For anything else there is a 404 reply.

in proxy directory:
`npm install`

open in new shell and execute
`node server.js`

### install ionic app
Unfortunatelly I was trying to be fancy and picked beta version of ionic.
After I realized it was not such a good idea, it performs weirdly in safari
and its' modals polute $scope with properties like `direction` (of slide in) and god know what...
however it is build on top of cordova and does all the cute stuff with iOS emulator and automatic 
build for mobile platforms which looks very cool.


`npm install -g cordova ionic`

    ionic platform add ios
    ionic build ios
    ionic emulate ios
  
or test in browser

`ionic serve` 

### Testing

`npm install - g karma-cli`

`bower install`

`karma start`

there was some missmatch with paths in karma conf,

TODO - I need to double check the paths in karma conf to make it happen


