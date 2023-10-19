import { InjectionToken } from "@angular/core";
import { Config } from "../config";

// Tworzymy InjectionToken, który będzie używany jako token do wstrzykiwania zależności
export const CONFIG_CHART_TOKEN = new InjectionToken<Config>('MyToken');