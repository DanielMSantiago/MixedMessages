//this randomFact function creates the array for the random facts, and returns a random fact to be displayed in the HTML file using the DOM
let randomFact = () => {
    const factArray = [
        'The world is big', 
        'The moon is not real', 
        'I hate chickens',
        'The sky if blue'];
    let randomArray = factArray[Math.floor(Math.random() * factArray.length)];
    return document.getElementById("message").innerHTML = "Fact: " + randomArray;
    
}