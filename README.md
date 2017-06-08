# NICE frontend tests
Front end tests for NICE org


# Getting started

- git clone https://github.com/nhsevidence/nice-frontend-tests.git
- cd nice-frontend-tests
- npm i

Run Selenium server by doing this:

 - ./node_modules/selenium-standalone/bin/selenium-standalone install 
 - ./node_modules/selenium-standalone/bin/selenium-standalone start 


the terminal will now have selenium server running

### For Windows 
Start another terminal and run:

```npm run test-win```

### For MACOSX / Linux
Start another terminal and run:

```npm test```

This should start a web browser and run your tests.
