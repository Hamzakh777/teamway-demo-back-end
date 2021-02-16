import { Injectable } from '@nestjs/common';
import { Question } from './types';

@Injectable()
export class AppService {
  getQuestions(): Question[] {
    return [
      {
        id: 1,
        title:
          'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
        answers: [
          {
            id: 1,
            title: 'Don’t dare to interrupt them',
            extrovertValue: 0,
            questionId: 1,
          },
          {
            id: 2,
            title:
              'Think it’s more important to give them some of your time; work can wait',
            extrovertValue: 1,
            questionId: 1,
          },
          {
            id: 3,
            title: 'Listen, but with only with half an ear',
            extrovertValue: 2,
            questionId: 1,
          },
          {
            id: 4,
            title:
              'Interrupt and explain that you are really busy at the moment',
            extrovertValue: 3,
            questionId: 1,
          },
        ],
      },
      {
        id: 2,
        title:
          'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        answers: [
          {
            id: 5,
            title: 'Look at your watch every two minutes',
            extrovertValue: 0,
            questionId: 2,
          },
          {
            id: 6,
            title: 'Bubble with inner anger, but keep quiet',
            extrovertValue: 1,
            questionId: 2,
          },
          {
            id: 7,
            title:
              'Explain to other equally impatient people in the room that the doctor is always running late',
            extrovertValue: 2,
            questionId: 2,
          },
          {
            id: 8,
            title:
              'Complain in a loud voice, while tapping your foot impatiently',
            extrovertValue: 3,
            questionId: 2,
          },
        ],
      },
      {
        id: 3,
        title:
          'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
        answers: [
          {
            id: 9,
            title: 'Don’t dare contradict them',
            extrovertValue: 0,
            questionId: 3,
          },
          {
            id: 10,
            title: 'Think that they are obviously right',
            extrovertValue: 1,
            questionId: 3,
          },
          {
            id: 11,
            title: 'Defend your own point of view, tooth and nail',
            extrovertValue: 2,
            questionId: 3,
          },
          {
            id: 12,
            title: 'Continuously interrupt your colleague',
            extrovertValue: 3,
            questionId: 3,
          },
        ],
      },
    ];
  }
}
