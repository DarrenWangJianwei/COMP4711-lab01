function showAddArtistContent(){
    var addArtistContent = document.getElementsByClassName("addArtistContent");
    console.log(addArtistContent);
    if (addArtistContent[0].style.display === 'block') {
        addArtistContent[0].style.display = 'none';
    } else {
        addArtistContent[0].style.display = 'block';
    }
}
function add(){
    var inputName = document.getElementById("artistName").value;
    var inputAbout = document.getElementById("aboutArtist").value;
    var inputURL = document.getElementById("imageUrl").value;
    var divEachArtist = document.createElement('div');
    divEachArtist.setAttribute('class','eachArtist');
    var divEachArtistImg = document.createElement('div');
    divEachArtistImg.setAttribute('class','eachArtistImg');
    var img = document.createElement('img');
    img.setAttribute('src',inputURL);
    divEachArtistImg.appendChild(img);
    divEachArtist.appendChild(divEachArtistImg);
    var divEachArtistContent = document.createElement('div');
    var artist_h5 = document.createElement('h5');
    var artist_p = document.createElement('p');
    artist_p.textContent = inputAbout;
    artist_h5.textContent = inputName;
    divEachArtistContent.setAttribute('class','eachArtistContent')
    divEachArtistContent.appendChild(artist_h5);
    divEachArtistContent.appendChild(artist_p);
    divEachArtist.appendChild(divEachArtistContent);
    var removeButton = document.createElement('button');
    removeButton.textContent="Delete";
    removeButton.setAttribute("class","removeButton");
    removeButton.setAttribute("onclick","removeArtist(this);");
    divEachArtistContent.appendChild(removeButton);
    var ArtistList = document.getElementsByClassName("ArtistList");
    ArtistList[0].appendChild(divEachArtist);
} 
function removeArtist(btn){
    (((btn.parentNode).parentNode).parentNode).removeChild((btn.parentNode).parentNode);
}