export declare enum GameStatus {
    finished = 'finished',
    inProgress = 'inProgress',
    pending = 'pending',
}

export declare interface Answer {
    id: string;
    text: string;
}

export declare interface QuestionPayload {
    answerId: string;
    answers: Answer[];
    image?: string;
    text: string;
}

export declare interface Question extends QuestionPayload {
    id: string;
}

export declare interface ActiveQuestion extends Question {
    answered?: boolean | null;
    answeredTime?: number | null;
    remainingTime?: number | null;
}

export declare interface Settings {
    numberOfQuestions: number;
    remainingTime: number;
}

export declare interface Statistic {
    averageTimePerQuestion: number;
    correctAnswers: number;
    gameId: string;
    id: string;
    quickestTimePerQuestion: number;
    slowestTimePerQuestion: number;
    unansweredAnswers: number;
    usedLifeLines: number;
}

export declare interface Player {
    id: string;
    name: string;
}

export declare interface Game {
    currentQuestion: Question;
    gameStatus: GameStatus;
    id: string;
    player: Player;
    questions: ActiveQuestion[];
    questionsPool: Question[];
    settings: Settings;
    statistic: Statistic;
}
