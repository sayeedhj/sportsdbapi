function displaySports(){
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => sportsName(data.sports))
}

function sportsName(data){
    const mainDiv = document.getElementById('sport')
    const apiText = document.getElementById('apitext')
    const h1 = document.createElement('h1')
        h1.innerText = 'TheSportsDB API'
        apiText.appendChild(h1)
    for(const sport of data){
        const div = document.createElement('div');
        
        div.innerHTML = `
        <div class="col">
              <div class="card-bg card">
                <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Sport: ${sport.strSport} <img style="width:50px;" src="${sport.strSportIconGreen}"> </h5>
                  <h5>Playing Format: ${sport.strFormat} </h5>
                  <p class="card-text">${sport.strSportDescription.slice(0, 205)}</p>
                </div>
              </div>
            </div>
        </div>
        `
        mainDiv.appendChild(div)
    }
    
}



