fetch("../gallery/gallery.json")
  .then((response) => response.json())
  .then((gallery) => {
    gallery.map((x) => {
      let galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      let galleryItemImg = document.createElement("img");
      galleryItemImg.src = x.thumb;
      galleryItemImg.classList.add("gallery-image");
      galleryItemImg.loading = "lazy";

      // galleryItemImg.addEventListener("click", () => {
      //   window.open(x.image, "_blank");
      // });

      galleryItem.appendChild(galleryItemImg);

      document.getElementById("gallery").appendChild(galleryItem);
    });
  });
