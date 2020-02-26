    const SportsApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c1e8909737da4e4fa434402a226d9f32`;
    window
    .fetch(SportsApiUrl)
    .then(data => {
        data
        .json()
        .then(sportsnews => 
           
           {            
               console.log(sportsnews);
               let sportsData =sportsnews.articles;
               let output ="";
               for (let sports of sportsData)
               {
                   output +=`
                   
                   <h1 class="h1title" >${sports.title}</h1>
                   <p>${sports.description} </p>
                   <img src="${sports.urlToImage}" />
                   <p>${sports.publishedAt}</p>
                   `
               }document.getElementById("left").innerHTML=output;
            

           })
        .catch(err => console.log(err))
    })
    
    .catch(err => console.log(err));
 
    ///right part >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    const EntertainmentApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c1e8909737da4e4fa434402a226d9f32`;
    window
    .fetch(EntertainmentApiUrl)
    .then(data => {
        data
        .json()
        .then(ent => 
           
           {            
               console.log(ent);
               let entData = ent.articles;
               let output ="";
               for (let ent of entData)
               {
                   output +=`
                   
                   <h1 class="h1title" ><a hres="${ent.url}">${ent.title}</a></h1>
                   <p>${ent.description} </p>
                   <img src="${ent.urlToImage}" />
                   <p>${ent.publishedAt}</p>
                   `
               }document.getElementById("right").innerHTML=output;
            

           })
        .catch(err => console.log(err))
    })
    
    .catch(err => console.log(err));
  



    // midddle section

    const topheadlineApiUrl =`https://newsapi.org/v2/top-headlines?country=us&apiKey=c1e8909737da4e4fa434402a226d9f32`;
    window
    .fetch(topheadlineApiUrl)
    .then(data => {
        data
        .json()
        .then(topnews => 
           
           {            
               console.log(topnews);
               let entData = topnews.articles;
               let output ="";
               for (let ent of entData)
               {
                   output +=`
                   
                   <h1 class="h1title" >${ent.title}</h1>
                   <p>${ent.description} </p>
                   <img src="${ent.urlToImage}" />
                   <p>${ent.publishedAt}</p>
                   `
               }document.getElementById("middle").innerHTML=output;
            

           })
        .catch(err => console.log(err))
    })
    
    .catch(err => console.log(err));



    //time javascript here

    // vae day = new Date().getDate();
    setInterval( () =>
    {
        var time  =new Date().toLocaleTimeString();
        document.getElementById("time").innerHTML =time;

    },1000);

