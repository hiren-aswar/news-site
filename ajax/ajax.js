
const newsacc=document.querySelector("#news-acc");
const xhr=new XMLHttpRequest();

xhr.open("GET","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d1cad94230534fea9b0a37fc1503f20a",true);
xhr.send();
xhr.onload=function(){
    if(this.status==200)
    {
      const json=JSON.parse(this.responseText);
  
      const article=json.articles;
      console.log(article);
      let newshtml="";
      article.forEach(element => {
        const str=`
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           ${element.title} ;
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#news-acc">
            <div class="accordion-body">
             ${element.content}; <a href=${element.url}>read more</a>
            </div>
          </div>
        </div>
      `
        newshtml+=str;
        
      });
      newsacc.innerHTML=newshtml;
    }
    
   
   
    
      
  
      
      
   

    else{
        console.log("not found");
    }
  
}

















