# Famo.us + Ionic Example
Simple example of integrating Famo.us into Ionic. Written to expand the concepts of my blog post on using Famo.us with Ionic - http://jpcamara.com/using-famo-us-with-the-ionic-framework

### Starting the project
The project already has its bower dependencies installed (they get installed into the www/lib folder), so you shouldn't need to install any libraries for the code itself to be functional. To get it actually running, I recommend using the ionic tools.

You'll need the ionic cli, so type this in the command line (this also includes cordova, for the next potential step):

    npm install -g cordova ionic
    
Now you can either run the example in your browser, or in the simulator.

Running it in the browser (with live reloads):

    ionic serve
    
Running it on ios:

    ionic platform add ios
    ionic build ios
    ionic emulate ios
