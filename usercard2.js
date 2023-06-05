let charlieoldinfo = {
    imgurl:"https://www.aceshowbiz.com/images/wennpic/charlie-puth-2016-kids-choice-awards-01.jpg",
    name: "Charles Auto puth  ",
    Description: "Unrated Artist"
}

let charlienewinfo = {
    imgurl:"https://i2.wp.com/abtc.ng/wp-content/uploads/2021/01/Charlie-Puth-1.jpg?resize=1024%2C1024&ssl=1",
    name:"Charlie Puth",
    Description:" Still pretty underated"
}

let ischarlieold = true;
let displayobject;
let flipdata = function() {
    if(ischarlieold == true)
    {
        displayobject = charlieyounginfo;
        ischarlieold = false;
    }
    else
    {
        displayobject = charlieoldinfo;
        ischarlieold = trud;
    }

    document.getElementById("charlie's img").src= displayobject.imgurl;
    document.getElementById("chname").innerHTML=displayobject.name;
    document.getElementById("decs").innerHTML=displayobject.name
}