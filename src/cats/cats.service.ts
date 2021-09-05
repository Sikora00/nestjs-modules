import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private catsRepository: CatsRepository, private clientService: ClientService) {}

  adopt(cat: Cat, clinetId: number) {
    if(!this.clientService.canAdpot(clientId)) {
      throw new Error(`This person can't adpot a cat`);
    }

    // The rest of logic needed to adpot a cat
  }

  remove(catId: number) {
    const cat = this.catsRepository.findOne(catId)
    this.clientService.disallowToAdpot(cat.ownerId);

    // The rest of logic needed to adpot a cat
  }

  create(cat: Cat) {




    this.cats.push(cat);
  }

  update(cat: Cat) {





  }

  findAll(): Cat[] {


    
    
    return this.cats;
  }

  findOne(catId: number): Cat {




    return this.cats[0]
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
