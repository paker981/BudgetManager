export type Config = {
    showXAxis: boolean,
    showYAxis: boolean,
    showLegend: boolean,
    showXAxisLabel: boolean,
    showYAxisLabel: boolean,
    xAxisLabel: string,
    yAxisLabel: string
}

export const BASIC_CHART_CONFIG: Config = {
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'Priority',
    yAxisLabel: 'Percentage%'
}