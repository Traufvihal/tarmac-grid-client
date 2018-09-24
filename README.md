# tarmac-grid-client

## React based Front end for tarmac-grid



### Why React?

Due that the back-end turned to be more simple to implement I took the oportunity to implement React instead of a plain MVC client using Spring MVC and a templating technology like Thymeleaf.



Since I was new with React I've read the official docs:

* https://reactjs.org/

Also followed this guides:

* https://github.com/ericvicenti/intro-to-react

* https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react

At the end turned hard to get used to the quirks of React update flow.

### How did I build the project?

#### Tech used:

* NPM for package management

* React's own CLI for bootstrapping the project.

* Zurb foundation for CSS

* Added jQuery dependencies for Zurb Foundation

* No other frameworks for data fetching, just native fetch API call.

#### Having all ready:

```shell
$ npm install -g create-react-app
$ create-react-app [project-name]
$ cd [project-name]
$ npm install jquery
$ npm install foundation-sites
$ npm start
```

### How to run the project?

Make sure to run the project https://github.com/Traufvihal/tarmac-grid before, this will prepare the REST service for feed.

```shell
$ cd [project-name]
$ npm start
```


