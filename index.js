#!/usr/bin/env node
'use strict';
const open = require('opn');
const feedbackURL = 'https://feedback.abranhe.com/?';
const defaultMessage = 'I (do/don\'t) like this 😒 because ...';

let url = [];

const saveData = (data) => {
	url.push(data);
};

const project = project => {
	saveData('project=' + project);
}

const name = name => {
	saveData('name=' + name);
}

const email = email => {
	saveData('email=' + email);
}

const message = msg => {
	saveData('message=' + msg);
}

const description = summary => {
	saveData('description=' + summary);
}

const submit = () => {
	saveData('submit');
}

const web = () => {
	let parameters = url.join('&');
	open(feedbackURL + parameters);
	process.exit();
};

const getLink = () => {
	let parameters = url.join('&');
	return feedbackURL + parameters;
};

module.exports = {
	project,
	name,
	email,
	message,
	description,
	submit,
	web,
	getLink,
	defaultMessage
}
