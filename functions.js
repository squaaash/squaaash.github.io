function show(f, s) {
	const first = document.getElementsByClassName(f);
	const second = document.getElementsByClassName(s);
	for (var i = 0; i < 3; i++) {
		first[i].classList.remove("hidden");
		second[i].classList.add("hidden");
	}
}

async function copy(txt_id) {
	try {
		let txt = document.getElementById(txt_id).innerHTML
		await navigator.clipboard.writeText(txt)
		console.log('copied.')
	} catch (err) {
		console.error('failed')
	}
}
