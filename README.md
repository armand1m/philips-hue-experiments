# Philips Hue Experiments

Well, I recently bought a Google Home Mini + 3 Philips Hue bulbs in a kit, and so I started tweaking and exploring around.

This is a simple project in nodejs which explores the `node-hue-api` module and implements some features as commands you can run from CLI.

## Getting started

 - Clone this repo locally.

 - Make sure you have the latest Node.js LTS installed. This project relies in `async / await` features.

 - Run `npm ci`

 - Register your computer as a user in Philips Bridge

## Registering user

In order to make calls to Philips Bridge, you need to authenticate your device.

I implemented a simple script for this, you can run it using `npm run register-user`, and it will print a key after it is complete.

Keep in mind you need to press the button in Philips Bridge before running this command in order for it to work _(you'll have an error message telling you to do so, if you forget to do this)_.

After this, get the key for the registered user, and store it in your `.bashrc`, `.zshrc`, or simply `export` it as `PHILIPS_HUE_USERNAME=<user-token>`.

At this point, you're ready to run any commands you might want to! :)

## Commands

Currently, we have these commands available:

 - `npm run info`
    - Prints information about the commands implemented.

 - `npm run register-user`
    - Register an user in your Philips Bridge and prints it so you can use it to run other commands.

 - `npm run turn-on`
    - Turns on all lamps

 - `npm run turn-off`
    - Turns off all lamps

 - `npm run start-colors-loop`
    - Start a colors loop with all lamps

 - `npm run stop-effects`
    - Stop all effects in all lamps

 - `npm run set-brightness -- 40`
    - Set brightness for all lamps, accepts a first argument as a brightness percentage (min: 0, max: 100)

 - `npm run set-saturation -- 30`
    - Set saturation for all lamps, accepts a first argument as a saturation percentage (min: 0, max: 100)

 - `npm run set-color-temperature -- 170`
    - Set color temperature  for all lamps, accepts a first argument as a color temperature value (min: 153, max: 500)

## Contributors

 - Armando Magalhães [armando.mag95@gmail.com]
