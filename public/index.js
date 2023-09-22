const dropZone = document.querySelector(".dropzone");
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileInput");

const host = "https://filedrop-go02.onrender.com";
const uploadurl = `${host}/api/files`;
//const uploadurl = `${host/api/files`;

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragged");
  const files = e.dataTransfer.files ;
  //console.log(files);
  if(files.length === 1){
      fileInput.files = files ;
      uploadFile();
  }
});

browseBtn.addEventListener("click", () => {
  fileInput.click();
})

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();

  if (!dropZone.classList.contains("dragged")) {
    dropZone.classList.add("dragged");
  }
});

dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("dragged");
});


const uploadFile = () => {
    const file = fileInput.files;
    const formData = new FormData();
    formData.append("myfile",file[0]);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
          console.log(xhr.responseText);
        }
    }

    xhr.open('POST', uploadurl);
    xhr.send(formData);
    
}
