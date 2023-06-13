let charlieoldinfo = {
    imgurl: "https://www.aceshowbiz.com/images/wennpic/charlie-puth-2016-kids-choice-awards-01.jpg",
    name: "Charlie Puth",
    Description: "Underated artist"
}

let charlieyounginfo = {
    imgurl: "https://i2.wp.com/abtc.ng/wp-content/uploads/2021/01/Charlie-Puth-1.jpg?resize=1024%2C1024&ssl=1",
    name: "Charles Autto Puth",
    Description: "Great Artist but still underated"
}

let ischarlieold = true;
let displayobject;
let flipdata = function(){
    if(ischarlieold == true){
        displayobject = charlieyounginfo;
        ischarlieold = false;
    }
    else{
        displayobject = charlieoldinfo;
        ischarlieold = true;
    }
    document.getElementById("charlie-img").src = displayobject.imgurl;
    document.getElementById("charlie-name").innerHTML = displayobject.name;
    document.getElementById("charlie-description").innerHTML = displayobject.Description;
}