const dropZone = document.querySelector(".dropzone");
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileInput");

const host = "https://filedrop-go02.onrender.com/";
const uploadurl = `${host}/api/files`;
//const uploadurl = `${host/api/files`;

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragged");
  const files = e.dataTransfer.files ;
  console.log(files);
  if(files.length){
      fileInput.files = files ;
      uploadFile();
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();

  if (!dropZone.classList.contains("dragged")) {
    dropZone.classList.add("dragged");
  }
});

dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("dragged");
});

browseBtn.addEventListener("click", () => {
    fileInput.click();
})

const uploadFile = () => {
    const file = fileInput.files;
    const formData = new FormData();
    formData.append("myfile",file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
    }

    xhr.open('POST', uploadurl);
    xhr.send(formData);
}
