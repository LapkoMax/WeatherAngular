import { Pipe, PipeTransform } from '@angular/core';
import { CityLocation } from 'src/app/core/models/city-location.model';

@Pipe({ name: 'cityName' })
export class CityNamePipe implements PipeTransform {
  transform(value: CityLocation): string {
    return value.local_names.en ?? value.name ?? '<No name>'; // TODO: зачем второй nullish оператор? у тебя указано что value.name: string, либо здесь ошибка, либо у тебя с типизацией что то не то
  }
}

// TODO: все пайпы должны лежать в папке pipes модуля, иначе ты будешь каждый раз создавать папку под каждую сущность и потом не разберешься где что лежит
// обычно если папка имеет просто название компонента (weather-widget, city-form), то это компонент
// если это пайп, директива, файл с чистой функцией, файл с константами => все это должно лежать в папках по значению
//          pipes, directives, utils, constants
// так ты сможешь сразу разобраться где че лежит когда взглянешь на структуру модуля
