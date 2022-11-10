var getData = async () => {
    var key = document.getElementById("InSearch").value;
    var reDaTA = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${key}`)
    var Data = await reDaTA.json()
    document.getElementById("Result").style.display = "block"
    Data[1].forEach(async e => {
        var reDataSearch = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageprops|pageimages&format=json&titles=${e}`)
        var DataResult = await reDataSearch.json();
        var pageId = Object.values(DataResult.query.pages)[0]
        
        document.getElementById("Result").innerHTML += `
            <div class="ResultItem">
            
            <div class="col-2"> 
                <img  src="${pageId.thumbnail.source}" alt="">
            </div>
            <div class="col-11">
               <a target="_blank" href="https://en.wikipedia.org/wiki/${e}"> 
               <p class="font-24">${e}</p>
                <p>${pageId.pageprops["wikibase-shortdesc"]}</p>
                </a>
            </div>
            
        </div>
            `
    })
}

