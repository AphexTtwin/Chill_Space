const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("chillspace-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
const startingTheme = savedTheme || systemTheme;

function applyTheme(theme) {
	document.documentElement.dataset.theme = theme;
	themeToggle.checked = theme === "dark";
}

applyTheme(startingTheme);

themeToggle.addEventListener("change", function () {
	const selectedTheme = themeToggle.checked ? "dark" : "light";

	applyTheme(selectedTheme);
	localStorage.setItem("chillspace-theme", selectedTheme);
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const precisePointer = window.matchMedia("(pointer: fine)");

function trackPointerLight(element, xProperty, yProperty) {
	if (!element) {
		return;
	}

	let bounds;
	let nextX = 0;
	let nextY = 0;
	let animationFrame;

	function paintLight() {
		element.style.setProperty(xProperty, `${nextX.toFixed(2)}px`);
		element.style.setProperty(yProperty, `${nextY.toFixed(2)}px`);
		animationFrame = undefined;
	}

	element.addEventListener("pointerenter", function () {
		bounds = element.getBoundingClientRect();
	});

	element.addEventListener("pointermove", function (event) {
		if (!bounds) {
			return;
		}

		nextX = event.clientX - bounds.left;
		nextY = event.clientY - bounds.top;

		if (animationFrame === undefined) {
			animationFrame = requestAnimationFrame(paintLight);
		}
	}, { passive: true });

	element.addEventListener("pointerleave", function () {
		if (animationFrame !== undefined) {
			cancelAnimationFrame(animationFrame);
			animationFrame = undefined;
		}

		bounds = undefined;
		element.style.setProperty(xProperty, "50%");
		element.style.setProperty(yProperty, "50%");
	});
}

if (!reducedMotion.matches && precisePointer.matches) {
	const primaryButton = document.querySelector(".suggestion-panel button[type='submit']");

	trackPointerLight(primaryButton, "--button-light-x", "--button-light-y");
}

const form = document.querySelector("form");
const ideaInput = document.querySelector("#idea");
const descriptionInput = document.querySelector("#idea-description");
const ideasBody = document.querySelector("#ideas-body");
const planList = document.querySelector("#plans-list");
const emptyPlansMessage = document.querySelector("#empty-plans-message");
const descriptionArea = document.querySelector("#description-area");


const planItem = document.createElement("li");
planItem.className = "plan-item";

const planDate = document.createElement("p");
planDate.className = "plan-date";

const attendanceText = document.createElement("p");
attendanceText.className = "attendance-status";

const attendanceButton = document.createElement("button");
attendanceButton.className = "attendance-button";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const idea = ideaInput.value.trim();

	if (idea === "") {
		return;
	}
	const description = descriptionInput.value.trim();
	// console.log(description);

	// const planItem = document.createElement("li");
	// planItem.textContent = idea;
	// ideasBody.append(planItem);

	const ideaRow = document.createElement("tr");
	const ideaCell = document.createElement("td");

	// ideaCell.textContent = idea;
	// ideaRow.append(ideaCell);

	const ideaDetails = document.createElement("details");
	const ideaTitel = document.createElement("summary");
	const ideaDescription = document.createElement("p");

	ideaTitel.textContent = idea;
	ideaDescription.textContent = description || "No details added.";

	ideaDetails.append(ideaTitel, ideaDescription);

	const planButton = document.createElement("button");
	planButton.type = "button";
	planButton.textContent = "Plan it";
	// ideaDetails.append(planButton); ...///--hna dart changes

	const planningArea = document.createElement("div");
	planningArea.hidden = true;

	const dateLabel = document.createElement("label");
	dateLabel.textContent = "Date and time: ";

	const dateInput = document.createElement("input");
	dateInput.type = "datetime-local";

	dateInput.required = true;
	const confirmButton = document.createElement("button");
	confirmButton.type = "button";
	confirmButton.textContent = "Confirm plan";
	planningArea.append(confirmButton);

	confirmButton.addEventListener("click", function () {
		dateInput.setCustomValidity("");
		if (!dateInput.reportValidity())
			return;
		const selectedDate = new Date(dateInput.value);
		const now = new Date();

		if (selectedDate <= now) {
			dateInput.setCustomValidity("Choose a future date and time");
			dateInput.reportValidity();
			return;
		}
		const ideaPosition = ideaRow.getBoundingClientRect();
		const planItem = document.createElement("li");
		const planDate = document.createElement("p");

		planDate.textContent = selectedDate.toLocaleString();

		planningArea.remove();
		planButton.remove();

		planItem.append(ideaDetails, planDate);

		let isGoing = false;
		const attendanceText = document.createElement("p");
		attendanceText.textContent = "Going: 0"

		const attendanceButton = document.createElement("button");
		attendanceButton.type = "button";
		attendanceButton.textContent = "I'm going";

		attendanceButton.addEventListener("click", function () {
			isGoing = !isGoing;
			if (isGoing) {
				attendanceText.textContent = "Going: 1 — You're going ✓";
				attendanceButton.textContent = "Can't make it";
			}
			else {
				attendanceText.textContent = "Going: 0";
				attendanceButton.textContent = "I'm going";
			}
		});
		planItem.append(attendanceText, attendanceButton);

		planList.append(planItem);
		emptyPlansMessage.hidden = true;

		const planPosition = planItem.getBoundingClientRect();

		const distanceX = ideaPosition.left - planPosition.left;
		const distanceY = ideaPosition.top - planPosition.top;

		ideaRow.remove();

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (!reduceMotion && typeof planItem.animate === "function") {
			planItem.animate(
				[
					{
						transform: `translate(${distanceX}px, ${distanceY}px)`,
						opacity: 0.35
					},
					{
						transform: "translate(0, 0)",
						opacity: 1
					}
				],
				{
					duration: 520,
					easing: "cubic-bezier(0.16, 1, 0.3, 1)"
				}
			);
		}
	});

	dateLabel.append(dateInput);
	planningArea.append(dateLabel);
	ideaDetails.append(planningArea);

	planButton.addEventListener("click", function () {
		ideaDetails.open = true;
		planningArea.hidden = false;
		dateInput.focus();
	});

	ideaCell.append(ideaDetails);

	const interestedCell = document.createElement("td");

	interestedCell.textContent = "0";

	const actionCell = document.createElement("td");
	const interestedButton = document.createElement("button");
	interestedButton.type = "button";
	interestedButton.textContent = "I'm intrested";
	actionCell.append(interestedButton, planButton);

	let isIntrested = false;
	interestedButton.addEventListener("click", function () {
		if (isIntrested) {
			isIntrested = false;
			interestedCell.textContent = "0";
			interestedButton.textContent = "I'm intrested";
		}
		else {
			isIntrested = true;
			interestedCell.textContent = "1";
			interestedButton.textContent = "Undo interest";
		}
	});

	ideaRow.append(ideaCell, interestedCell, actionCell);
	ideasBody.append(ideaRow);

	form.reset();
	descriptionArea.open = false;
	ideaInput.focus();
});
