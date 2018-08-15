import test from 'ava';
import f from './';

test('Test Name', t => {
	f.name('Abraham');
	t.is(f.getLink(), 'https://feedback.abranhe.com/?name=Abraham');
});

test('Test Project', t => {
	f.project('ProjectName');
	t.is(f.getLink(), 'https://feedback.abranhe.com/?name=Abraham&project=ProjectName');
});

test('Test Message', t => {
	f.message('aMSG');
	t.is(f.getLink(), 'https://feedback.abranhe.com/?name=Abraham&project=ProjectName&message=aMSG');
});

test('Test Email', t => {
	f.email('a@a.com');
	t.is(f.getLink(), 'https://feedback.abranhe.com/?name=Abraham&project=ProjectName&message=aMSG&email=a@a.com');
});
