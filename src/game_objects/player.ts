class Player {
    name: string;
    capital: number = 1500;

    constructor(name: string){
        this.name = name;
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
}
