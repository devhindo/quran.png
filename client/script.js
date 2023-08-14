const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const soraNumber = form.elements["soraNumber"].value;
  const ayahNumber = form.elements["ayahNumber"].value;
  const highQuality = form.elements["highQuality"].checked;
  console.log(soraNumber, ayahNumber, highQuality);
  var url = `https://cdn.islamic.network/quran/images/${
    highQuality ? "high-resolution/" : ""
  }${soraNumber}_${ayahNumber}.png`;
  console.log(url);
  // download the image from url and save it to the user's device
  //downloadImage(url, `sora-${soraNumber}-ayah-${ayahNumber}.png`);
  di(url);
});

async function downloadImage(imageSrc, nameOfDownload = "my-image.png") {
  const response = await fetch(imageSrc);
  const blobImage = await response.blob();
  const href = URL.createObjectURL(blobImage);
  const anchorElement = document.createElement("a");
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}

async function di(url) {
  const request = new Request(url);
  const response = await fetch(request, { mode: "no-cors" });
  const imageData = await response.blob();
  const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(imageData);
    downloadLink.download = "image.png";
    downloadLink.click();

}
