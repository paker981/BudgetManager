export enum IncomeCategory {
    PEDICURE = 'Pedicure',
    MANICURE = 'Manicure',
    SCHOOLING = 'Schooling',
}

export enum OutcomeCategory {
    RENT = 'rent',
    INGREDIENTS = 'ingredients',
    REPAIRMENTS = 'repairments',
}


export interface IncomeData {
    [month: string]: {
        incomes: Array<{ [category in IncomeCategory]?: number }>;
    };
}

export interface OutcomeData {
    [month: string]: {
        [category: string]: number;
    };
}

export interface ChartData {
    name: string; 
    value: number;
  }