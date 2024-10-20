let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
parks [1] = {name : "Riverside Greenspace", trees, facilities};

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
let treeName = "Sugar Maple";
parks[0] = {name : "Central Park", 'trees' : [{'species' : treeName, 'age' : 5, 'health' : "Good", 'height' : 20}, {species, age, health, height}], facilities};

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
parks[0] = {name : "Central Park", 'trees' : [{species, age, health, height}, {species, age, health, height}, {'species' : "Birch", 'age' : 7, 'height' : "Good"}], facilities};

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
let centralParkTrees = parks[0];

// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
let allTrees = parks[0].trees;
allTrees = allTrees.concat(parks[1].trees);
allTrees = allTrees.concat(parks[2].trees);
let averageTreeAge = 0;
for (let index = 0; index < allTrees.length; index++) {
    const element = allTrees[index].age;
    averageTreeAge = averageTreeAge + element;
}
averageTreeAge = averageTreeAge / allTrees.length;

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
let tallestTree = 0;
for (let index = 0; index < allTrees.length; index++) {
    const element = allTrees[index].height;
    if (element > tallestTree) {
        tallestTree = allTrees[index];
    }
}

// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
parks[0] = {name : "Central Park", trees, 'facilities' : ["swimming pool"]};

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
let parksJSON = JSON.stringify(parks);

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
console.log(parks[0].name + " " + parks[0].facilities);

// Task 10: Using console.log, display the species of the third item in the parks array.
console.log(parks[2].trees.species);
