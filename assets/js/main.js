
const addNewHabbit = document.getElementById('addnewhabbit');
const addNewHabbitForm = document.getElementById("add-new-habbit-form");
addNewHabbitForm.style.display = 'none';
const addNewHabbitFormButton = document.getElementById("add-new-habbit-form-button");
const dateToday = document.getElementById("today-date");
var detailView = document.getElementById("aside-detail-view");
var weekView = document.getElementById("aside-week-view");
var detailscontainer  = document.getElementById("main-home-container");
var weekcontainer = document.getElementById("main-home-container-week");

weekcontainer.style.display = "none";
//sidebar detail view event listner 
detailView.addEventListener("click",function(){
    detailView.classList.add("active");
    weekView.classList.remove("active");
    weekcontainer.style.display = "none";
    detailscontainer.style.display = "block";
});

//sidebar week view event listner 
weekView.addEventListener("click",function(){
    weekView.classList.add("active");
    detailView.classList.remove("active");
    detailscontainer.style.display = "none";
    weekcontainer.style.display = "block";
});

//add new habbit form
addNewHabbit.addEventListener('click',function(e) {
    e.preventDefault();
    addNewHabbitForm.style.display = 'block';
});

//add new habbit form button
addNewHabbitFormButton.addEventListener('click',function(e) {
    addNewHabbitForm.style.display = 'none';
});

