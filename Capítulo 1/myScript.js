const IMAGE_URL1 = "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg";
const IMAGE_URL2 = "https://wallpapers.com/images/hd/android-marvel-s-avengers-background-knwuv8t537mmsrph.jpg";

function changeImage(){
    const imageElement = document.getElementById("photo");
    if (imageElement.src.endsWith('OTE@._V1_FMjpg_UX1000_.jpg')){
        imageElement.src = IMAGE_URL2;
        imageElement.alt = "Doctor Strange 2";
    } else {
        imageElement.src = IMAGE_URL1;
        imageElement.alt = "Doctor Strange 1";
    }
}