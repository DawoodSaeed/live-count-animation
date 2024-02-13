export class Helper {
    numberToArrayOfDigits(number: number): number[] {
        if (!Number.isInteger(number) || number < 0) {
            throw new Error('Input must be a non-negative integer.');
        }

        const digitsArray: number[] = [];

        // Convert number to string and iterate through each character
        const numberString: string = number.toString();
        for (let i = 0; i < numberString.length; i++) {
            // Parse each character back to a number and add it to the array
            digitsArray.push(parseInt(numberString[i], 10));
        }

        return digitsArray;
    }


    mismatchStartIndex(arrayOne: number[], arrayTwo: number[]): number[] {

        // if the lengths are not equals just return 0 
        // and it will activate class for every span;
        if (arrayOne.length != arrayTwo.length) {
            let greaterArrayLen = arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;
            return this.generateNumberArray(0, greaterArrayLen - 1);
        } else {
            // which which index to start chnaging from;
            for (let i = 0; i < arrayOne.length; i++) {
                if (arrayOne[i] !== arrayTwo[i]) {
                    return this.generateNumberArray(i, arrayOne.length - 1);
                }
            }

            // if the arrays have same digits just return -1;
            return [-1];
        }
    }


    generateNumberArray(start: number, end: number): number[] {
        if (typeof start !== 'number' || typeof end !== 'number') {
            throw new Error('Invalid input. Both start and end must be numbers.');
        }

        if (start > end) {
            throw new Error('Invalid input. Start must be less than or equal to end.');
        }

        const resultArray: number[] = [];

        for (let i = start; i <= end; i++) {
            resultArray.push(i);
        }

        return resultArray;
    }
}