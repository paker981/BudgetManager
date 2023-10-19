import { ChartData, IncomeData, TransformChartDataCallback } from "src/app/data/types";
import { PreviewData } from "../types/incomeData.types";


export function transformDataToPreview(inputData: IncomeData[]): PreviewData[] {
  const transformedData: any[] = [];

  inputData.forEach(monthData => {
    const month = Object.keys(monthData)[0];
    const incomes = monthData[month].incomes;

    const incomeMap: { [key: string]: number } = {};

    incomes.forEach(income => {
      for (const key in income) {
        if (incomeMap[key]) {
          incomeMap[key] += income[key as keyof object];
        } else {
          incomeMap[key] = income[key as keyof object];
        }
      }
    });

    transformedData.push({
      name: month,
      series: Object.keys(incomeMap).map(key => ({
        name: key,
        value: incomeMap[key]
      }))
    });
  });

  return transformedData;
}

export function incomeCallback(data: IncomeData, month: string): number{
  const income = data[month].incomes
  let summary = 0;

  income.forEach(data=>{
    for(const key in data){
      summary += data[key as keyof object]
    }
  })
  return summary;
}