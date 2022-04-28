let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();
     if (filter === "Mission") {
    $("img").css("filter", "contrast(115%) brightness(120%)");   

    // 1.Replace variable with the variable name in line 4, replace condition with the "Mission", and delete the //  before lines 5-6.

    }else if ( filter ==="Portero")   	     {$("img").css("filter", "contrast(50%) brightness(180%)");

    // 2.Replace variable with the variable name in line 4, replace condition with the "Portero", and delete the //  before line 10. 

    } else if (filter ==="Soma") {$("img").css("filter", "grayscale(50%) hue-rotate(10deg)");

    // 3.Replace variable with the variable name in line 4, replace condition with the "SOMA", and delete the //  before line 14. 

   }else if (filter === "Sunset") { $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");}

    // 4.Replace variable with the variable name in line 4, replace condition with the "Sunset", and delete the //  before line 14. 

    else {
      alert("error type in a filter name");
}
//5. delete // from before lines 22-24 and now check to see that it all works 
});
$(".reset").click(function() {
    $("img").css("filter", "");
});