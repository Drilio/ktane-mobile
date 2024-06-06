import {WIRE_COLOR} from "../../utils";

export function witchWireToCut(wires,lastSerialNumberIsPair) {
    console.log(lastSerialNumberIsPair);
    console.log(wires)
    if(wires.length === 3){
        // no red wire case
        let isAWireRed = false;

        const redWires = howManyWire(wires, WIRE_COLOR.red);
        if(redWires > 0){
            isAWireRed = true;
        }
        if(!isAWireRed){
            console.log('no red wire')
            return 2
        }
        //last wire is white case

        if(wires[2] === WIRE_COLOR.white){
            console.log('last wire is white')
            return 3
        }

        // multiple blue wire case
        let isMultipleBlueWire = 0;
        let lastBlueWireIndex = 0;
        for(let i =0 ; i < wires.length; i++){
            if(wires[i] === WIRE_COLOR.blue){
                isMultipleBlueWire++;
                lastBlueWireIndex = i;
            }
        }
        if( isMultipleBlueWire > 1){
            console.log('plus de 1 fil bleu')
            return lastBlueWireIndex + 1;
        }
        console.log('aucun critère validé')
        return 3;
    }
    if(wires.length === 4){
        //More than one red wire and last number of serial Number is odd
        // multiple blue wire case
        let isMultipleRedWire = 0;
        let lastRedWireIndex = 0;
        for(let i =0 ; i < wires.length; i++){
            if(wires[i] === WIRE_COLOR.red){
                isMultipleRedWire++;
                lastRedWireIndex = i;
            }
        }
        if( isMultipleRedWire > 1){
            console.log('plus de 1 fil bleu')
            return lastRedWireIndex + 1;
        }
        //last wire is yellow and no red wire
        const redWire = howManyWire(wires, WIRE_COLOR.red);
        if(wires[3] === WIRE_COLOR.yellow && redWire === 0){
            return 1
        }
        //exactly one blue wire
        let blueWire = howManyWire(wires, WIRE_COLOR.blue);
        if(blueWire === 1 ){
            return 1
        }
        //more than one yellow wire
        let yellowWire = howManyWire(wires, WIRE_COLOR.yellow);
        if(yellowWire > 1 ){
            return 4
        }
        return 2;
    }

    if(wires.length === 5){
        //last wire is black
        if(wires[4] === WIRE_COLOR.black){
            return 4
        }

        const blackWire = howManyWire(wires, WIRE_COLOR.black);
        if(blackWire === 0 ){
            return 2
        }

        return 1
    }
    if(wires.length === 6){
        const yellowWire = howManyWire(wires, WIRE_COLOR.yellow)
        const redWire = howManyWire(wires, WIRE_COLOR.red)
        if(yellowWire === 0 && !lastSerialNumberIsPair){
            return 3
        }
        if(redWire === 0){
            return 6
        }
        return 4
    }

    return 0
}

function howManyWire(wires,color) {
    const wireFilter = wires.filter((wire)=> wire === color)
    return wireFilter.length;
}
