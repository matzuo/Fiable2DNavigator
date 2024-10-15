import {DIRECTION} from './const.utils'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

export const isEmpty = (value) => {
    return !value || value.trim() === '';
};

export const isNumber = (value) => {
    return !isNaN(value) && value !== '';
};

export const isStringUpperCase = (str) => {
    return str === str.toUpperCase();
};

export const trimSplit = (value, separator) => {
    return value.trim().split(separator);
}

export const isCardinalDirection = (value) => {
    let newValue = value.toLowerCase();
    return newValue === DIRECTION.North 
        || newValue === DIRECTION.East
        || newValue === DIRECTION.South
        || newValue === DIRECTION.West;
};

export const getIconDirection = (direction) => {
    let directionToLower = direction.toLowerCase();
    switch(directionToLower){
      case DIRECTION.North: return <NorthIcon />
      case DIRECTION.East: return <EastIcon />
      case DIRECTION.South: return <SouthIcon />
      case DIRECTION.West: return <WestIcon />
      default: return null;
    }
}