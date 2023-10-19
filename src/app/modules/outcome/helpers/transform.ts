import { ChartData, OutcomeData} from "src/app/data/types";
import { SingleChartData } from "../types/outcome.types";




export function transformDataForChartOutcome(outcomeData: OutcomeData[]): ChartData[] {
    const transformedData: any[] = [];
  
    outcomeData.forEach(monthData => {
      const month = Object.keys(monthData)[0];
      const outcomes = monthData[month]
      let summary = 0;
  
      
      Object.keys(outcomes).forEach(key => {
        summary += outcomes[key]
      })

      transformedData.push({
        name: month,
        value: summary
      })
    });
 
    return transformedData;
  }


  export function transformDataForSingleChartOutcome(outcomeData: OutcomeData[]): SingleChartData[]  {
    const transformedData: any[] = [];
  
      outcomeData.forEach(monthData => {
        const month = Object.keys(monthData)[0];
        const outcomes = monthData[month];
    
        const outcomeMap: { [key: string]: number } = {};
    
        Object.keys(outcomes).forEach(key => {
            outcomeMap[key] = outcomes[key as keyof object];
        });
  
        transformedData.push({
          name: month,
          series: Object.keys(outcomeMap).map(key => ({
            name: key,
            value: outcomeMap[key]
          }))
        })
      })
    return transformedData;
  }

  export function transformForMonthList(data: SingleChartData[]): string[] {
    const transformedData: string[] = [];

    data.forEach(monthData=> {
      const month = monthData.name;
      transformedData.push(month);
    })
    return transformedData
  }

  export function outcomeCallback(data: OutcomeData, month: string): number{
    const outcomes = data[month]
    let summary = 0

    Object.keys(outcomes).forEach(key => {
      summary += outcomes[key]
    })
    return summary
  }