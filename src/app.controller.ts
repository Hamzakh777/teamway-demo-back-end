import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Question } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Question[] {
    return this.appService.getQuestions();
  }
}
