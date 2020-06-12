$("#search").on("click", function() {






$.ajax({
    url:"http://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=FP3W4KxYuoxvDigP0qOepCo2SJKcuXTF",
    method: "GET"
}).then(function(response){
    console.log(response);
    for(var i=0; i < response.docs.length; i++){
    var articleHeading = response.docs[i].headline;
    var articleURL = response.docs[i].multimedia.web_url;
    
    var results = response.data;
    }

    // $("#top_articles").append();
})

function clearResults(event){
    event.preventDefault();

    $("#top_articles").empty();

}
$("#clear_results").click(clearResults);

// $("#search").click(function(event){
//     event.preventDefault();

// })

})