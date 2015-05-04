# ryanair-test
interview app

## installation

`git clone <this repo>`

### install proxy
ryanair test resource does not allow CORS (does not set the header)
nor it does support JSONP, so the only option I am aware of is to setup proxy

the `proxy` directory contain ultra simple proxy server piping the data from ryanair's machine
the query is exactly same as supports the original server, for anything else there is 404 reply.

in proxy directory:
`npm install`

open in new shell and execute
`node server.js`

### install ionic app
unfortunatelly I was trying to be fancy and picked beta version of ionic.
Besides it does not offer any out of box testing or linting, it also performs weirdly in safari
and its' modals polute $scope with properties like directon (of slide in) and god know what...
however it is build on top of cordova and does all the cute stuff with iOS emulator and automatic 
build for mobile platforms which looks very cool.

`npm install -g cordova ionic`

    ionic platform add ios
    ionic build ios
    ionic emulate ios
  
or test in browser

`ionic serve`  
