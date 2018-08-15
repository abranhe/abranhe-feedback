#!/usr/bin/env node
'use strict';
const meow = require('meow');
const username = require('username');
const open = require('opn');
const capitalize = require('capitalize');
const feedback = require('./index.js');

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

username().then(username => {
  if(cli.flags.project) {
		feedback.project(cli.flags.project);
  }

  if(cli.flags.email) {
		feedback.email(cli.flags.email);
  }

  if(cli.flags.message) {
		feedback.message(cli.flags.message);
  } else {
		feedback.message(feedback.defaultMessage);
  }

  if(cli.flags.name) {
		feedback.name(cli.flags.name);
  } else {
		feedback.name(capitalize(username));
  }

  if(cli.flags.submit) {
    feedback.submit();
  }

	feedback.web();
});
