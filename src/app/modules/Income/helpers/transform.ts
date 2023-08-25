import { ChartData, IncomeData } from "src/app/data/types";
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

  export function transformDataForChart(inputData: IncomeData[]): ChartData[] {
    const transformedData: any[] = [];
  
    inputData.forEach(monthData => {
      const month = Object.keys(monthData)[0];
      const incomes = monthData[month].incomes;
      let summary = 0;
  
      incomes.forEach(income => {
        for (const key in income) {
            summary += income[key as keyof object];
          }
        })
  
      transformedData.push({
        name: month,
        value: summary
      })

    });
  
    return transformedData;
  }