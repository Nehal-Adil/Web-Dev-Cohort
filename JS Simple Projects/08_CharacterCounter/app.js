const limit = 200;

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const warningMssg = document.getElementById("warningMessage");

function updateCount() {
  const text = textInput.value.trim();

  // Character count
  const charCountValue = text.length;

  // Word Count
  const words = text.split(/\s+/).filter((word) => word !== "");
  const wordCountValue = words.length;
  // console.log(wordCountValue);

  // Unique word count
  const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
  // console.log(uniqueWords);
  const uniqueWordCountValue = uniqueWords.size;

  charCount.textContent = `${charCountValue} / ${limit} characters | ${wordCountValue} words | ${uniqueWordCountValue} unique`;

  // charCount.innerText = `${charCountValue} / ${limit} characters`;

  warningMssg.innerText = "";

  if (charCountValue < limit) {
    charCount.style.color = "green";
  } else if (charCountValue === limit) {
    charCount.style.color = "orange";
  } else {
    charCount.style.color = "red";
    warningMssg.innerText = "Character limit exceeded";
  }
}

textInput.addEventListener("input", updateCount);
