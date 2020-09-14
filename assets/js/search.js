function f(){
    var search = document.getElementById("search");

    localStorage.setItem("searchText",search.value);
    console.log(search.value);  
}
search.value = localStorage.getItem("searchText");
