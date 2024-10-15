import {isEmpty, isNumber, isStringUpperCase, isCardinalDirection, trimSplit} from './helper.utils';
import {CoordinateDataModel} from './../models/coordinate-data.model';

export const validateInput = (value) => {

    if(isEmpty(value)) return { ...CoordinateDataModel };

    let splitValue = trimSplit(value, ",");

    if(splitValue.length !== 2
        || isEmpty(splitValue[1])
    ) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Please enter a valid input."
    };

    let x_coordinate = splitValue[0];
    let secondSplitValue = trimSplit(splitValue[1], " ");
    
    if(secondSplitValue.length !== 2) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Please enter a valid input."
    };

    let y_coordinate = secondSplitValue[0];
    let direction = secondSplitValue[1];

    if(!isNumber(x_coordinate) 
        || !isNumber(y_coordinate)) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Please enter a valid x,y coordinates."
    };

    if(x_coordinate < 0 || x_coordinate > 4
        || y_coordinate < 0 || y_coordinate > 4) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Coordinates must be in 0-4."
    };

    if(!isCardinalDirection(direction)) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Please enter a valid cardinal direction."
    };

    if(!isStringUpperCase(direction)) return {
        ...CoordinateDataModel,
        isValid: false,
        errorMessage: "Cardinal direction should be in uppercase."
    };

    return {
        ...CoordinateDataModel,
        x: x_coordinate,
        y: y_coordinate,
        direction: direction.toLowerCase(),
        isValid: true,
    };
};