let currentIndex = 0;

function showSections(index) {
  const sectionsContainer = document.getElementById("sections-container");
  const totalSections = document.querySelectorAll(".section").length;
  const sectionsToShow = 3;

  if (index >= totalSections / sectionsToShow) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = Math.ceil(totalSections / sectionsToShow) - 1;
  } else {
    currentIndex = index;
  }

  const translateX = -currentIndex * 100;
  sectionsContainer.style.transform = `translateX(${translateX}%)`;
}

function nextSection() {
  currentIndex++;
  showSections(currentIndex);
}

function prevSection() {
  currentIndex--;
  showSections(currentIndex);
}
