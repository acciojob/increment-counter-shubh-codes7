//your JS code here. If required.
let count = 0;
let counter = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
	counter.textContent = ++count;
	alert(count)
})