var myForm = document.getElementById("myForm");
var myInput = document.getElementById("input1");
var mylist = document.getElementById("list1");
myForm.addEventListener("submit", function(event){
    event.preventDefault()
    f1(myInput.value)
})
function f1(x){
    var items = `<li>${x}
    <button onclick="deleteElement(this)">Delete</button> </li>`;
    mylist.insertAdjacentHTML("beforeend", items);
    myInput.value="";
    myInput.focus()
}

function deleteElement(ElementToDelete){

    ElementToDelete.parentElement.remove();

}