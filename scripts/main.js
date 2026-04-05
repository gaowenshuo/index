const myHeading = document.querySelector("h1");
myHeading.textContent = "Wenshuo Gao / 高文硕";

const myDate = document.querySelector("#date");
if (myDate) {
  myDate.textContent =
    new Date().getFullYear() +
    "年" +
    (new Date().getMonth() + 1) +
    "月" +
    new Date().getDate() +
    "日";
}

const photoOrder = [2, 3, 1];
let photoStep = 0;

function cycleProfilePhoto() {
  const n = photoOrder[photoStep % photoOrder.length];
  for (const id of [1, 2, 3]) {
    const el = document.getElementById("photo" + id);
    if (el) el.style.display = id === n ? "block" : "none";
  }
  photoStep += 1;
}

cycleProfilePhoto();
setInterval(cycleProfilePhoto, 3000);
