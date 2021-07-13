export interface Answer {
	id: string;
	text: string;
}

export interface QuestionPayload {
	answerId: string;
	answers: Answer[];
	image?: string;
	text: string;
}
