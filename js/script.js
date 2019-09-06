var parent = document.html;
var child = document.body;
child.style.right = child.clientWidth - child.offsetWidth + "px";

let copyrightString = document.getElementById('copyright');
copyrightString.innerHTML = 'Alex Weininger 2017-' + (new Date).getFullYear();

function togglePopup(element) {

	let popup = document.getElementById('popup-wrapper');
	console.log(popup);
	if (popup.style.display !== 'none') {
		popup.style.display = 'none';
	} else {
		popup.style.display = 'block';
	}

	if (projects.length < 1) {
		return;
	}

	let project = null;
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id === element.id) {
			project = projects[i];
		}
	}

	if (project == null) {
		project = projects[0];
	}

	document.getElementById("p-title").innerText = project.title;
	document.getElementById("p-info").innerText = project.longDescription;
	document.getElementById("p-link").attributes['href'] = project.link;
	document.getElementById("p-link").innerText = project.linkText;
}
