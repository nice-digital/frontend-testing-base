# Front end testing base repository
This is a base repository to start any type of browser based testing.
Here we've used a package called webdriverio which is a helper library for selenium written in Node.  For more info go to http://webdriver.io/


# Getting started

- ```git clone https://github.com/nhsevidence/frontend-testing-base.git```
- ```cd frontend-testing-base```
- ```npm i```

After the install has finished run the Selenium server by doing this:

 - ```./node_modules/selenium-standalone/bin/selenium-standalone install ```
 - ```./node_modules/selenium-standalone/bin/selenium-standalone start ```

The terminal will now have selenium server running so start another terminal

### For Windows 
Start another terminal and run:

```npm run test-win```

### For MACOSX / Linux
Start another terminal and run:

```npm test```

This should start a web browser and run our example test.


## Notes
#### Running individual specs
It would be nice to run only one feature, maybe through tags, but this seems to be difficult (see https://github.com/webdriverio/webdriverio/issues/1247)

So to run only one feature do this:

```npm run only features\homepage.feature```

If you have many scenarios in one feature then let's talk.
