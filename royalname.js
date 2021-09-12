const titles = [ 'Prince', 'Princess', 'King', 'Queen', 'Duke', 'Duchess', 'Marquis', 'High King', 'High Queen'];
const kingdoms = [ 'Narnia', 'Aerendel', 'the Fairy County', 'the Southern Isles', 'Northern Hemisphere', 'Outer Space'];
const adjectives = [ 'Adaptable', 'Affectionate', 'Compassionate', 'Zealous', 'Strong'];


const generateName = ( ) => {    
    const title = getRandomValue(titles);
    const kingdom = getRandomValue(kingdoms);
    const adjective = getRandomValue(adjectives);
    console.log("Your Royal Title is: ");
    console.log(`${adjective} ${title} of ${kingdom}`);
};

const getRandomValue = arr => {
    return arr[numberGenerator(arr.length)];
}

const numberGenerator = (num) => {
    return Math.floor(Math.random() * num);
}

console.log(generateName());