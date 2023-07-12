const classes =
  "lazy w-full transition-transform duration-300 ease-in-out transform hover:scale-105".split(
    " ",
  );

fetch("/gallery/gallery.json")
  .then((response) => response.json())
  .then((gallery) => {
    gallery.map((x) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("overflow-hidden");

      const galleryItemImg = document.createElement("img");
      galleryItemImg.src = x.thumb;

      for (const c of classes) {
        galleryItemImg.classList.add(c);
      }
      galleryItemImg.loading = "lazy";

      galleryItem.appendChild(galleryItemImg);
      document.getElementById("gallery").appendChild(galleryItem);
    });
  });
