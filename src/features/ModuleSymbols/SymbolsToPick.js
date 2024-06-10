import {SYMBOL} from "../../utils";

export const symbolsToPick= (symbols) =>{
    const firstRow = [SYMBOL[1],SYMBOL[2],SYMBOL[3],SYMBOL[4],SYMBOL[5],SYMBOL[6],SYMBOL[7]];
    const secondRow = [SYMBOL[8],SYMBOL[1],SYMBOL[7],SYMBOL[9],SYMBOL[10],SYMBOL[6],SYMBOL[11]];

    let correspondingRow = [];
    console.log('SIMBOLE TO PICK Symbols :',symbols)
    for(let symbol of symbols){
        correspondingRow.push(firstRow.find((rowSymbol)=> symbol === rowSymbol));
    }
    if(correspondingRow.length === 4){
        return correspondingRow;
    }
    correspondingRow = []
    for(let symbol of symbols){
        correspondingRow.push(secondRow.find((rowSymbol)=> symbol === rowSymbol));
    }
    if(correspondingRow.length === 4){
        return correspondingRow;
    }

    return [];
}
