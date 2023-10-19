import { ChartData, IncomeData, OutcomeData, TransformChartDataCallback } from "src/app/data/types";
import { transformDataForSingleChartOutcome } from "src/app/modules/outcome/helpers/transform";
import { SingleChartData } from "src/app/modules/outcome/types/outcome.types";

// TODO: reużywalna metoda w chat module + ograć zmienne cześci logiki za pomocą argumentu callback
// generycznie 
export function transformDataForChart(data: any[], callback: TransformChartDataCallback): ChartData[] {
    const transformedData: any[] = [];
  
    data.forEach(monthData => {
      const month = Object.keys(monthData)[0];
      const summary= callback(monthData, month)
    
      transformedData.push({
        name: month,
        value: summary
      })
    });
  
    return transformedData;
  }

  export function getSingleChartDataByMonth(data: SingleChartData[] ,month: string) {
   
    const monthData = data.find((data)=> data.name === month)

    if(!monthData){
      throw new Error('Bad request!')
    }
    return monthData;
  }