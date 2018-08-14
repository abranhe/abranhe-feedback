#!/usr/bin/env node
'use strict';
const meow = require('meow');
const username = require('username');
const open = require('opn');
const capitalize = require('capitalize');

const feedbackURL = 'https://feedback.abranhe.com/?';
const defaultMessage = 'I (do/don\'t) like this 😒 because ...';

const cli = meow(`
	Usage
	  $ abranhe-feedback <option>

	Options
    -h, --help          Show this message and close
    -n, --name          Set your name, default: your computer username
    -p, --project       Project Name
    -m, --message       Set message to send
    -e, --email         Set your email to contact you back
    -s, --submit        If you use (submit) you will automatically send the
                        feedback from the command line, otherwise you will
                        need to finish online.

	Example
		$ abranhe-feedback -n "your name" -e "your@email.com" -p "a project" -m "Your feedback, hope it will be good" --submit
`,{
	flags: {
    submit: {
			type: 'boolean',
			alias: 's'
		},
		help: {
			type: 'boolean',
			alias: 'h'
		},
		name: {
			type: 'string',
			alias: 'n'
		},
    project: {
			type: 'string',
			alias: 'p'
		},
		email: {
			type: 'string',
			alias: 'e'
		},
		message: {
			type: 'string',
			alias: 'm'
		}
	}
});

let url = [];

username().then(username => {
  if(cli.flags.project) {
    url.push('project=' + cli.flags.project);
  }

  if(cli.flags.email) {
    url.push('email=' + cli.flags.email);
  }

  if(cli.flags.message) {
    url.push('message=' + cli.flags.message);
  } else {
    url.push('message=' + defaultMessage);
  }

  if(cli.flags.name) {
    url.push('name=' + cli.flags.name);
  } else {
    url.push('name=' + capitalize(username));
  }

  if(cli.flags.submit) {
    url.push('submit');
  }

  let parameters = url.join('&');
  open(feedbackURL + parameters);
  process.exit();
});
