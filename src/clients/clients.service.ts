@Injectable()
export class ClientsService {
    constructor(private clientsRepository: ClientsRepository, catsService: CatsService) {}

    sponsorFeed(clientId: number, catId: number, amount: number) {
        this.catsService.increaseCatBudged(catId, amount);
        // Logic of updating client score
    }
}