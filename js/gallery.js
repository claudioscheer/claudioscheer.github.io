fetch("/gallery/gallery.json")
  .then((response) => response.json())
  .then((gallery) => {
    gallery.map((x) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";

      const galleryItemImg = document.createElement("img");
      galleryItemImg.src = x.thumb;
      galleryItemImg.style.width = "100%";
      galleryItemImg.style.display = "block";
      galleryItemImg.loading = "lazy";

      galleryItem.appendChild(galleryItemImg);
      document.getElementById("gallery").appendChild(galleryItem);
    });
  });
