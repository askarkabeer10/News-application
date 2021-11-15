console.log('this is news website')
// c3d13209595748cebfbe4073211a0f6e

// let apiKey = 'c3d13209595748cebfbe4073211a0f6e';
// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=c3d13209595748cebfbe4073211a0f6e`)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index){
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                  <b>Breaking News ${index+1} :</b> ${element.title}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element['description']}. <a href="${element.url}" targe="_blank">Read more</a></div>
                            </div>
                        </div>`
                     newsHtml += news;   
                    });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('some error occured')
    }
}

xhr.send()

