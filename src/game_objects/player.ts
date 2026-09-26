import {PropertyTile} from './PropertyTile';

export class Player {
    name: string;
    token: string;
    position: number = 0;
    capital: number = 1500;
    properties: PropertyTile[] = [];

    constructor(name: string, token: string){
        this.name = name;
        this.token = token;
    }

    payAmount(cost: number): boolean {
        if (this.capital < cost) {
            return false;
        }

        this.capital -= cost;
        return true;
    }

    gainCapital(amount: number): void {
        this.capital += amount;
    }

    purchaseProperty(deed: PropertyTile): boolean {
        if (!this.payAmount(deed.price)) {
            return false;
        }
        
        this.properties.push(deed)

    }
}
