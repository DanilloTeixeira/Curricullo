function downloadPDF() {
  const item = document.querySelector(".container");

  var opt = {
    vMargin: [1, 1, 1, 1],
    hMargin: [1, 1, 1, 1],
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 0.99 },
    html2canvas: { dpi: 192, scale: 2, letterRendering: true },
    jsPDF: { unit: "mm", format: "Tabloid", orientation: "portrait" },
  };

  downloadPDF().set(opt).from(item).save();
}
//html2pdf