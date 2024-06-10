import {SYMBOL} from "../../utils";

export const symbolsToPick= (symbols) =>{
    const firstRow = [SYMBOL[0],SYMBOL[1],SYMBOL[2],SYMBOL[3],SYMBOL[4],SYMBOL[5],SYMBOL[6]];
    const secondRow = [SYMBOL[7],SYMBOL[0],SYMBOL[6],SYMBOL[8],SYMBOL[9],SYMBOL[5],SYMBOL[10]];

    let correspondingRow = [];
    console.log('SIMBOLE TO PICK Symbols :',symbols)
    for(let symbol of symbols){
        const symbolMatch = firstRow.find((rowSymbol)=> symbol === rowSymbol)
        console.log('symbolMatch: ',symbolMatch);
        if(symbolMatch){
        correspondingRow.push(symbolMatch);    }
        }
    if(correspondingRow.length === 4){
        console.log('FIRST ROW CORRESPONDING', correspondingRow)
        const sortArray = correspondingRow.sort((a, b) => firstRow.indexOf(a) - firstRow.indexOf(b))
        return sortArray;
    }
    console.log('NOT FIRST ROW')
    correspondingRow = []
    for(let symbol of symbols){
        const symbolMatch = secondRow.find((rowSymbol)=> symbol === rowSymbol)
        console.log('symbolMatch: ',symbolMatch);
        if(symbolMatch){
        correspondingRow.push(symbolMatch);
        }
    }
    if(correspondingRow.length === 4){
        console.log('SECOND ROW correspondingRow',correspondingRow);
        const sortArray = correspondingRow.sort((a, b) => secondRow.indexOf(a) - secondRow.indexOf(b))
        return sortArray;
    }

    return [];
}
