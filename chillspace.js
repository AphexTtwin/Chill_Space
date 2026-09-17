const form = document.querySelector("form");
const ideaInput = document.querySelector("#idea");
const plansList = document.querySelector("#plans-list");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const idea = ideaInput.value.trim();

	if (idea === "") {
		return;
	}

	const planItem = document.createElement("li");
	planItem.textContent = idea;
	plansList.append(planItem);

	form.reset();
	ideaInput.focus();
});
