console.log("lets broadcast");
let apiKey = `384b277131464b2384cc2db11c340a81`;


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=384b277131464b2384cc2db11c340a81', true);

xhr.onload = (function () {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let html = '';
    let articles=json.articles;
   articles.forEach(function(element,index ){
        html += `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${element.title}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     ${element.content} <a href=${element.url}>read more here</a>
      </div>
    </div>
  </div>`
    });
document.getElementById(`accordionExample`).innerHTML=html;
})

xhr.send();