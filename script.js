$("#search").on("click", function() {
    event.preventDefault();
    var searchTermValue = $("#searchTerm").val();
    var articleLimit = $("#numOfRecs").val();
    var articleYearStart = $("#startYear").val();
    var articleYearEnd = $("#endYear").val();


    console.log("how many articles " + articleLimit);

    $("#top_articles").empty();


    // Query Parameters
    // begin_date	
    // string
    // matches ^\d{8}$
    
    // matches ^\d{8}$
    // Begin date (e.g. 20120101)
    
    // end_date	
    // string
    // matches ^\d{8}$
    
    // matches ^\d{8}$
    // End date (e.g. 20121231)


    $.ajax({
        url:"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermValue + "&api-key=FP3W4KxYuoxvDigP0qOepCo2SJKcuXTF" + "&begin_date=" + articleYearStart,
        method: "GET"
    }).then(function(response){
        console.log(response);
        for(var i=0; i < articleLimit; i++){
            var articleHeading = response.response.docs[i].headline.main;
            var articleAbstract = response.response.docs[i].abstract;
            var articleURL = response.response.docs[i].multimedia.web_url;
            
            //var results = response.data;
            var article = $("<div>");
            article.append($("<p>").text(articleHeading));
            article.append($("<p>").text(articleAbstract));
            $("#top_articles").append(article);
            

        }

        // $("#top_articles").append();
    })
});

function clearResults(event){
    event.preventDefault();

    $("#top_articles").empty();

}
$("#clear_results").click(clearResults);

