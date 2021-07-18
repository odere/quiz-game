import { nanoid } from 'nanoid'

import { Question } from '../../types/question.types'

export const questions: Question[] = [
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: '5',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '4',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '6',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '5.25',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: '1.25 + 3.75 = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '2',
		answers: {
			'0': {
				id: '0',
				text: '2',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '0',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '-1',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '3',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: '2 - 3 = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: 'Undefined',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '0',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Infinity',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '100',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: '0 / 0 = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '3',
		answers: {
			'0': {
				id: '0',
				text: '10',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '5',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '2',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '-2',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: '4(x + 5) = 12. x = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '1',
		answers: {
			'0': {
				id: '0',
				text: '10',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '8',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '-15',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '6',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: '2x = 16. x = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: '4 and -4',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '2 and -2',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '4',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '-4',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'x * x = 16. x = ?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '2',
		answers: {
			'0': {
				id: '0',
				text: 'Stockholm',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Paris',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Berlin',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Tbilisi',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'What is the capital of Germany?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: 'Paris',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Wien',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Roma',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Tallinn',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'What is the capital of France?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '3',
		answers: {
			'0': {
				id: '0',
				text: 'USA',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Georgia',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Brazil',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'China',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Which country is the first in terms of population?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '1',
		answers: {
			'0': {
				id: '0',
				text: '9',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '5',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '10',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '7',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'How many oceans are there in the world?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '2',
		answers: {
			'0': {
				id: '0',
				text: 'Wolfgang Amadeus Mozart',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Ludwig van Beethoven',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'William Shakespeare',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Frederic Chopin',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Who is the author of Romeo and Juliet?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: 'Zeus',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Poseidon',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Aphrodite',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Hera',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'The main god of Olympus in Greek mythology?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: 'Egypt',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Germany',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'France',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Sweden',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Where the pyramid of Cheops is located?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '2',
		answers: {
			'0': {
				id: '0',
				text: '15',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '20',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '8',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '1',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'How many planets are in the solar system?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '0',
		answers: {
			'0': {
				id: '0',
				text: '12',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: '11',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: '15',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: '16',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Choose the square root of 144',
	},
	{
		id: nanoid(3),
		correctAnswerId: '3',
		answers: {
			'0': {
				id: '0',
				text: 'Dog',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Zebra',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Cat',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Cow',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Choose a sacred animal in India',
	},
	{
		id: nanoid(3),
		correctAnswerId: '1',
		answers: {
			'0': {
				id: '0',
				text: 'Cat',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Camel',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Dog',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Snake',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: "What animal is called 'The ship of the desert'?",
	},
	{
		id: nanoid(3),
		correctAnswerId: '1',
		answers: {
			'0': {
				id: '0',
				text: 'Bucharest',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Budapest',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Bangkok',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Tbilisi',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'Choose the capital of Hungary?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '2',
		answers: {
			'0': {
				id: '0',
				text: 'Cotton wool',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Cosmic dust',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'The smallest droplets of liquid water and / or water ice crystals',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Nothing',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'What are clouds made of?',
	},
	{
		id: nanoid(3),
		correctAnswerId: '3',
		answers: {
			'0': {
				id: '0',
				text: 'Mouse',
				isDisabled: false,
			},
			'1': {
				id: '1',
				text: 'Cat',
				isDisabled: false,
			},
			'2': {
				id: '2',
				text: 'Peacock',
				isDisabled: false,
			},
			'3': {
				id: '3',
				text: 'Cheetah',
				isDisabled: false,
			},
		},
		answersIds: ['0', '1', '2', '3'],
		text: 'What is the fastest animal in the world?',
	},
]
