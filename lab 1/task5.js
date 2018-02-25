function AddName() {
    var list = document.getElementById("name_to_add").value;
    var input = document.getElementById("list_space");
    input.innerHTML += "<br>" + list;
}