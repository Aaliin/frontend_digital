/** Part 1 - START **/

/** Одномерные массивы */
let data: number[] = [-64, 0, 32, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 0];

console.log(data);

function removeZeroElements(data: number[]): number[] {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            data = data.splice(i, 1);
            i++;
        }
    }
    return data;
}

const preparedData: number[] = removeZeroElements(data);
console.log(preparedData);

/** Двумерные массивы */

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

const rotateMatrix = (matrix: number[][]) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}

const preparedMatrix: number[][] = rotateMatrix(matrix);
console.log(preparedMatrix);

/** Part 1 - END **/

/** Part 2 - START **/

const tuple: [string, string] = ['Привет', 'Приветик'];

const showTuple = (tuple: [string, string]) => {
    return tuple[0] + ' ' + tuple[1];
}

console.log(showTuple(tuple));

/** Part 2 - END **/

/** Part 3 - START **/

enum SomeEnum {
    ELEM_1 = 'p0',
    ELEM_2 = 1,
    ELEM_3 = 'a3',
}

console.log(SomeEnum.ELEM_1, SomeEnum.ELEM_2, SomeEnum.ELEM_3);

/** Part 3 - END **/

/** Part 4 - START **/
class Pet {
    name: string = '';
    age: number = -1;

    speak() {
        return "";
    }
}

class Dog extends Pet {
    name = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

const somePet: Pet = new Pet();
console.log(somePet.speak());

const someCat: Pet = new Cat();
console.log(someCat.speak());

const someDog: Pet = new Dog();
console.log(someDog.speak());

/** Part 4 - END **/

/** Part 5 - START **/

interface Int1234 {
    name: string;
    age: number;
    enum1: SomeEnum;
    eof: 'NO' | 'YES';
}

const obj1: Int1234 = {
    name: 'qwerty',
    age: 12,
    enum1: SomeEnum.ELEM_2,
    eof: null,
}

const jsonObject = JSON.stringify(obj1);
console.log(jsonObject);

const objParsed: Int1234 = JSON.parse(jsonObject) as Int1234;

let partObject: SomeEnum = objParsed.enum1;

console.log(objParsed);


/** Part 5 - END **/