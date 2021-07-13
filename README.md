# Quiz-game

## Task

1. Provide git repository - with commit history
2. Create web-app - QUIZ GAME

## Constraints

1. Any framework could be used (React.js)
2. Not to use 3-d party libraries for essential parts of the app
3. Solution should contain unit tests for critical logic (Jest)

## Non-functional requirements

1. Documentation
2. Single-page application
   1. Readme.md - Required
3. Tests
   1. Unit tests for critical logic - Required
   2. Integration tests - Optional
   3. Storybooks - optional
4. Should - be able to load questions from the server (Could be hard-codded)
5. Images should be free to use.
6. Fancy interface - optional

## Functional requirements

1. Quiz game should contain 10 random questions (Optional quantity should be customisable)
2. Questions pool contain more than 10 questions (more than game questions)
3. Question provided to the user in series from the pool
4. Questions in game are unique
5. Question could have:
   1. Text or/and image
   2. Four alternative answers
   3. Only one answer is correct
6. The player have 15 seconds to answer to the question
7. The remaining time should be visible to the player
8. When remaining time is up, the question is considered as unanswered
9.  The player have 2 lifelines
    1.  50/50 - removes 2 incorrect answers
    2.  +10 - gives player 10 extra seconds to think
    3.  Each lifeline could be used once during game
10. The game ends when:
    1.  The player answered all questions
    2.  Or run out the time
11. In the end of the game the the player can see score:
	1. The number of correct answers
	2. The number of unanswered questions
	3.  Average time per question - optional
	4.  Quickest answer - optional
	5.  Slowest answer - optional
	6.  Used lifelines - optional

## This is monorepository

### The first package is back-end

I decided to use API first approach, I developed CRUD for question with Hapi/Mondo/TypeScript,
than I start working on...

### The second package is front-end

I start from splitting up app to small reusable blocks - components, with unit testing and integration testing
I spend to much time to it, so I start to speed up.

Originally I want to use state machine with redux, unfortunately I missed dead lines, so
I switch to more strait forward approach with components and containers where I am keeping state in React, I use rxJs for timers, that was a good solution for timers and not very nice one for testing
crucial parts

I create storybooks and fancy intractable components,
Unfortunately, the app is not functional and, there are separated finished parts
that need to be gathered

I have a lot of thought what could be improved,

If I would have enough time I would add state manager, for this simple app I would prefer redux/redux-thunk, add happy flow with cypress, and deploy it to the herroku

PS. I will finish this test task later
