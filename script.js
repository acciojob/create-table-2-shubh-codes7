function createTable() {
    let rn = Number(prompt("Input number of rows"));
    let cn = Number(prompt("Input number of columns"));
	let table = document.querySelector("#myTable")
	table.innerHTML = "";

	for (let i = 0; i < rn; i++) {
		let row = table.insertRow();
		for (let j = 0; j < cn; j++) {
			let cell = row.insertCell();
			cell.innerText = `Row-${i} Column-${j}`;
		}
	}
  
}

