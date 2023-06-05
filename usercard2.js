let charlieoldinfo = {
    imgurl: "https://tse2.mm.bing.net/th?id=OIP.h1u0WdtyHk1mITELUMvfPwHaEo&pid=Api&P=0&h=180",
    name: "Charlie Puth",
    Description: "Underated artist"
}

let charlieyounginfo = {
    imgurl: "https://tse3.mm.bing.net/th?id=OIP.NxIhSDYNWuiI7EHC7yu9QgHaHA&pid=Api&P=0&h=180",
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