// DOM Element References
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");
const startBtn = document.getElementById("start-btn");
const speedSlider = document.getElementById("speed-slider");
const sizeSlider = document.getElementById("size-slider");

let array = [];
let isSorting = false;

// Helper function to create delays during visualization
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Get delay dynamically based on slider value
function getDelay() {
  // Inverse slider value so higher slider number = faster animation
  return 510 - parseInt(speedSlider.value, 10);
}

// Generate a new random array and render it
function generateArray() {
  if (isSorting) return;

  const size = parseInt(sizeSlider.value, 10);
  array = [];
  arrayContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 90) + 10; // Random height value (10–100)
    array.push(value);

    // Create Bar Element
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`; // Scale bar height
    bar.innerText = value;
    arrayContainer.appendChild(bar);
  }
}

// Interactive Bubble Sort Visualization
async function bubbleSort() {
  isSorting = true;
  toggleControls(true);

  const bars = document.querySelectorAll(".bar");
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Highlight comparing elements in RED
      bars[j].classList.add("comparing");
      bars[j + 1].classList.add("comparing");

      await sleep(getDelay());

      if (array[j] > array[j + 1]) {
        // Highlight elements in YELLOW when swapping
        bars[j].classList.remove("comparing");
        bars[j + 1].classList.remove("comparing");
        bars[j].classList.add("swapping");
        bars[j + 1].classList.add("swapping");

        // Swap in JavaScript Array
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Swap visual representation (DOM elements update height and text)
        bars[j].style.height = `${array[j] * 3}px`;
        bars[j].innerText = array[j];
        bars[j + 1].style.height = `${array[j + 1] * 3}px`;
        bars[j + 1].innerText = array[j + 1];

        await sleep(getDelay());

        bars[j].classList.remove("swapping");
        bars[j + 1].classList.remove("swapping");
      } else {
        bars[j].classList.remove("comparing");
        bars[j + 1].classList.remove("comparing");
      }
    }
    // Mark the last sorted bar as GREEN
    bars[n - i - 1].classList.add("sorted");
  }

  // Mark the very first element as sorted when finished
  bars[0].classList.add("sorted");

  isSorting = false;
  toggleControls(false);
}

// Enable/Disable UI Controls during execution
function toggleControls(disabled) {
  generateBtn.disabled = disabled;
  startBtn.disabled = disabled;
  sizeSlider.disabled = disabled;
}

// Event Listeners
generateBtn.addEventListener("click", generateArray);
startBtn.addEventListener("click", bubbleSort);
sizeSlider.addEventListener("input", generateArray);

// Initial call to set up the default array on page load
generateArray();