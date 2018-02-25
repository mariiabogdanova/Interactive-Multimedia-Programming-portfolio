var list = document.getElementById("name_to_add").value;
	var input = document.getElementById("list_space");
	input.innerHTML += "<br>" + localStorage.getItem(list);



	function AddName() {
		localStorage.setItem(list, document.getElementById("name_to_add").value);
		input.innerHTML += "<br>" + localStorage.getItem(list);

}