<p align="center" id="top">
	<a href="https://www.npmjs.com/package/@abranhe/feedback"><img src="https://cdn.abranhe.com/abraham/abraham.svg" width="100"></a>
	<br>
	<br>
	<br>
	Send me a <a href="https://feedback.abranhe.com"> feedback</a>!
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/abranhe-feedback"><img src="https://img.shields.io/travis/abranhe/abranhe-feedback.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe/abranhe-feedback/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/abranhe-feedback.svg" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abranhe.com/badges/paypal.svg" /></a>
</p>


## Overview

Feedback is welcome, so let's hear it! I created this simple **CLI** with the objective of get people opinions from the command line interface. **Feedbacks** are always good, so I am glad to know everyone's opinions.

You can also do it online at [feedback.abranhe.com](https://feedback.abranhe.com)

## Install

```
npm install -g @abranhe/feedback
```

or just

```
npx @abranhe/feedback -p abranhe-feedback -m "I liked this project" --submit
```

## CLI

```
Y'all can give me a feedback @abranhe

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
 Examples
	 $ abranhe-feedback -n "your name" -e "your@email.com"
	 $ abranhe-feedback -p "a project" -m "Your feedback" --submit
```

## *Give it a shot*

![Give it a shot!](https://cdn.abranhe.com/projects/abranhe-feedback/give-it-a-shot.gif)

## Usage

```js
const feedback = require('@abranhe/feedback');

feedback.project('Project Name');
console.log(feedback.getLink());
// => https://feedback.abranhe.com/?project="Project Name"
```

## Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://abranhe.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

## License

[MIT](https://github.com/abranhe/abranhe-feedback/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
