let charlieoldinfo = {
    imgurl: "https://www.aceshowbiz.com/images/wennpic/charlie-puth-2016-kids-choice-awards-01.jpg",
    name: "Charlie Puth",
    Description: "Underated artist"
}


let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("charlie-img").src = displayobject.imgurl;
    document.getElementById("charlie-name").innerHTML = displayobject.name;
    document.getElementById("charlie-description").innerHTML = displayobject.Description;
}