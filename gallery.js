function getCurrentTimeStamp(){
    return Math.floor(Date.now() / 1000)
}

let seed = getCurrentTimeStamp();
const start = 10000;
const end = 200000;
let count = 0;

function getRandom(seed, start, end){
    seed = seed *(seed % 2 == 0 ? 13 : 5);
    seed = seed /(seed % 3 == 0 ? 3 : 2);
    return ((seed %(end - start)) + start)
}

while (count < 4){
    let b = Math.floor(getRandom(seed, start, end));
    let string = "https://images.pexels.com/photos/"+b+"/pexels-photo-"+b+".jpeg";
    seed = getRandom(seed, start, end);

    function UrlExits(string){
        var http = new XMLHttpRequest();
        http.open('HEAD',string,false);
        http.send();

        if (http.status != 404){
            const ImageContainer = document.getElementById('image-container');
            const image = new Image();

            image.onload = function(){
                image.width=300;
                image.height=300;
                ImageContainer.appendChild(image);
            };
            image.src = string;
            ++count;
        }
    }
    UrlExits(string);
}
