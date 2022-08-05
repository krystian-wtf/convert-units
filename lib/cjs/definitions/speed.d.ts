import { Measure } from './../index';
export declare type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export declare type SpeedSystems = 'metric' | 'imperial';
export declare type SpeedMetricUnits = 'cm/s' | 'm/s' | 'km/h';
export declare type SpeedImperialUnits = 'mph' | 'knot' | 'in/s' | 'ft/s' | 'ft/min';
declare const measure: Measure<SpeedSystems, SpeedUnits>;
export default measure;
