let charlieoldinfo = {
    imgurl: "https://www.aceshowbiz.com/images/wennpic/charlie-puth-2016-kids-choice-awards-01.jpg",
    name: "Charlie Puth",
    Description: "Underated artist"
}


let displayobject={
    name : "",
    imgurl: "",
    Description : ""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
    // displayobject.name="aastha"
    displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
    displayobject.imageurl = data.results[0].picture.large
    displayobject.Description = data.results[0].gender
    document.getElementById("charlie-img").src = displayobject.imgurl;
    document.getElementById("charlie-name").innerHTML = displayobject.name;
    document.getElementById("charlie-description").innerHTML = displayobject.Description;
    })
    
}