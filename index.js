memeDetails()

async function memeDetails(){
try{
    var url = `https://meme-api.herokuapp.com/gimme`;

var res = await fetch(url);
var memeData =await res.json();
var data = memeData;

let imageUrl = data.url;
console.log('imageUrl:', imageUrl);

showImg(imageUrl);

}catch(err){
    showError(meme);
    console.log(err);
}

}


function showImg(imageUrl){
    let image = document.createElement("img");
    image.src = imageUrl;
    document.getElementById("img").append(image);
}




