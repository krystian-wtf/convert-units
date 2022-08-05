import { Measure } from './../index';
export declare type TorqueUnits = TorqueSIUnits | TorqueImperialUnits;
export declare type TorqueSystems = 'SI' | 'imperial';
export declare type TorqueSIUnits = 'Nm';
export declare type TorqueImperialUnits = 'lb-ft' | 'kip-ft';
declare const measure: Measure<TorqueSystems, TorqueUnits>;
export default measure;
