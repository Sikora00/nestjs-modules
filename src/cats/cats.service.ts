import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {




    this.cats.push(cat);
  }

  update(cat: Cat) {





  }

  remove(catId: number) {





  }

  findAll(): Cat[] {


    
    
    return this.cats;
  }

  findOne(catId: number): Cat {




    return this.cats[0]
  }

  adopt(cat: Cat, clinetId: number) {





  }

  return(cat: Cat) {





  }

  feed(cat: Cat) {






  }

  clean(cat: Cat) {





  }

  physicalExamination(cat: Cat) {

  



  }

  changePlace(catId: number, placeId: number) {





  }

}
