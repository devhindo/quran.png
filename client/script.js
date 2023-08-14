const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  async function download() {
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
    const blob = await fetch(url).then((r) => r.blob());
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = `${soraNumber}_${ayahNumber}.png`;
    link.addEventListener("click", () => {
      setTimeout(() => URL.revokeObjectURL(blobURL), 7000);
    });
    link.click();
    document.body.appendChild(link);
  }
    download();
});
