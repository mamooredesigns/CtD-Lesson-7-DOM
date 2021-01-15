//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let child = document.createElement("div")
document.getElementById("a-1").appendChild(child)
child.className = "square"
child.innerHTML = "X"
child.addEventListener("click", 
function() {
    if (child.innerHTML == "X") {
        child.innerHTML = "O"
    } else {
        child.innerHTML = "X"
    }
})


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array below, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

//resolve // QUESTION 2 here
let ddlist = document.createElement("select")
ddlist.id = "selectList"
let optionItem
let removeButton = document.createElement("button")
removeButton.type = "button"
removeButton.innerHTML = "Remove"
for (i = 0; i < colors.length; i++) {
    text = colors[i]
    optionItem = document.createElement("option")
    optionItem.id = text
    optionItem.value = text
    optionItem.innerHTML = text
    ddlist.appendChild(optionItem)
}
document.getElementById("a-2").appendChild(ddlist)
document.getElementById("a-2").appendChild(removeButton)
removeButton.addEventListener("click", 
    function(){
        var wholeList = document.getElementById("selectList")
        console.log(wholeList)
        var indexOfSelected = wholeList.selectedIndex
        console.log(indexOfSelected)
        var textOfSelected = wholeList.options[indexOfSelected].text
        console.log(textOfSelected)
        wholeList.remove(wholeList.selectedIndex)
    }
)


//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volume of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

let userInput = document.getElementById("radius")

const calculateSphere = () =>{
    let userNum = parseInt(userInput.value)
    let volume
    volume = (4/3) * Math.PI * Math.pow(userNum, 3)
    document.getElementById("volume").value = volume
    let area
    area = 4 * Math.PI * Math.pow(userNum, 2)
    document.getElementById("area").value = area
 }


//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 

//resolve // QUESTION 4 here
let button1 = document.createElement("button")
document.getElementById("a-1").style.display = "block"
button1.innerHTML = "Hide Question 1"
let button2 = document.createElement("button")
document.getElementById("a-2").style.display = "block"
button2.innerHTML = "Hide Question 2"
let button3 = document.createElement("button")
document.getElementById("a-3").style.display = "block"
button3.innerHTML = "Hide Question 3"

document.getElementById("a-4").appendChild(button1)
document.getElementById("a-4").appendChild(button2)
document.getElementById("a-4").appendChild(button3)

button1.addEventListener("click", 
function() {
    if (document.getElementById("a-1").style.display == "block") {
        document.getElementById("a-1").style.display = "none"
        button1.innerHTML = "Show Question 1"
    } else {
        document.getElementById("a-1").style.display = "block"
        button1.innerHTML = "Hide Question 1"
    }
}
)

button2.addEventListener("click", 
function() {
    if (document.getElementById("a-2").style.display == "block") {
        document.getElementById("a-2").style.display = "none"
        button2.innerHTML = "Show Question 2"
    } else {
        document.getElementById("a-2").style.display = "block"
        button2.innerHTML = "Hide Question 2"
    }
}
)

button3.addEventListener("click", 
function() {
    if (document.getElementById("a-3").style.display == "block") {
        document.getElementById("a-3").style.display = "none"
        button3.innerHTML = "Show Question 3"
    } else {
        document.getElementById("a-3").style.display = "block"
        button3.innerHTML = "Hide Question 3"
    }
}
)