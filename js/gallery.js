fetch("../gallery/gallery.json")
  .then((response) => response.json())
  .then((gallery) => {
    gallery.map((x) => {
      let galleryItem = document.createElement("div");
      galleryItem.classList.add("overflow-hidden");

      let galleryItemImg = document.createElement("img");
      galleryItemImg.src = x.thumb;
      galleryItemImg.classList.add(
        "w-full transition-transform duration-300 ease-in-out transform hover:scale-105".split(
          " ",
        ),
      );
      galleryItemImg.loading = "lazy";

      galleryItem.appendChild(galleryItemImg);
      document.getElementById("gallery").appendChild(galleryItem);
    });
  });
