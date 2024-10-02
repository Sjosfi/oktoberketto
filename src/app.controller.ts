import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { RendelesDto } from './Rendeles.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(rendelesDto: RendelesDto) {
    let errors = [];

    if (!rendelesDto.nev ||
      !rendelesDto.szamlacim ||
      !rendelesDto.szallitcim ||
      !rendelesDto.kupon ||
      !rendelesDto.kartya ||
      !rendelesDto.lejarat ||
      !rendelesDto.biztonsagi) {
        errors.push('Minden mezőt kötelező kitölteni!');
    }

    if (! /^\d\d\d\d-\d\d\d\d-\d\d\d\d-\d\d\d\d$/.test(rendelesDto.kartya)) {
      errors.push('A kártyaszám 0000-0000-0000-0000 formátumú lehet!')
    }
  }
}
