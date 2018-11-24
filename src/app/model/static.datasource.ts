import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private items: Item[] = [
    new Item(1, 'Ac Milan', 'Serie A', 'Ac Milan - Serie A'),
    new Item(2, 'Juventus', 'Serie A', 'Juventus - Serie A'),
    new Item(3, 'Inter', 'Serie A', 'Inter - Serie A'),
    new Item(4, 'Roma', 'Serie A', 'Roma - Serie A'),
    new Item(5, 'Lazio', 'Serie A', 'Lazio - Serie A'),
    new Item(6, 'Napoli', 'Serie A', 'Napoli - Serie A'),
    new Item(7, 'Liverpool', 'Premier League', 'Liverpool - Premier League'),
    new Item(8, 'Man City', 'Premier League', 'Man City - Premier League'),
    new Item(9, 'Man Utd', 'Premier League', 'Man Utd - Premier League'),
    new Item(10, 'Chalsea', 'Premier League', 'Chalsea - Premier League'),
    new Item(11, 'Tottenham', 'Premier League', 'Tottenham - Premier League'),
    new Item(12, 'Arsenal', 'Premier League', 'Arsenal - Premier League'),
    new Item(13, 'Borussia', 'Bundesliga', 'Borussia - Bundesliga'),
    new Item(14, 'RB Lipsk', 'Bundesliga', 'RB Lipsk - Bundesliga'),
    new Item(15, 'Bayern', 'Bundesliga', 'Bayern - Bundesliga'),
    new Item(16, 'Wolfsburg', 'Bundesliga', 'Wolfsburg - Bundesliga'),
    new Item(17, 'Schalke', 'Bundesliga', 'Schalke - Bundesliga'),
    new Item(18, 'Herta', 'Bundesliga', 'Herta - Bundesliga'),
    new Item(19, 'Barcelona', 'La Liga', 'Barcelona - La Liga'),
    new Item(20, 'Real', 'La Liga', 'Real - La Liga'),
    new Item(21, 'Sevilla', 'La Liga', 'Sevilla - La Liga'),
    new Item(22, 'Atletico', 'La Liga', 'Atletico - La Liga'),
    new Item(23, 'Valencia', 'La Liga', 'Valencia - La Liga'),
    new Item(24, 'Bilbao', 'La Liga', 'Bilbao - La Liga'),
  ];

  getItems(): Observable<Item[]> {
    return from([this.items]);
  }
}

