fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => { 
    for (let item of data.data.children){
        let title = item.data.title;
        let thumbnail = item.data.thumbnail;
        let url = item.data.url;
        console.log(item.data);
        let ourContainer = document.querySelector("section")
        let ourDiv = document.createElement("div");
        let ourH1 = document.createElement("h1");
        let ourPics = document.createElement("img");
        let ourLink = document.createElement("a");
        ourContainer.appendChild(ourDiv);
        ourDiv.appendChild(ourH1);
        ourDiv.appendChild (ourPics);
        ourDiv.appendChild(ourLink);
        ourH1.innerText = title;
        ourPics.setAttribute("src", thumbnail);
        ourLink.setAttribute("href", url);
        ourLink.innerText = "Click to view post on reddit.";
        
        if (thumbnail === "default"){
            ourPics.remove();
        }

    }
});