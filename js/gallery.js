fetch("/gallery/gallery.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load gallery");
    return response.json();
  })
  .then((gallery) => {
    const galleryEl = document.getElementById("gallery");

    gallery.forEach((x) => {
      const largeSrc = x.thumb.replace("/thumb/", "/large/");

      const galleryLink = document.createElement("a");
      galleryLink.href = largeSrc;
      galleryLink.target = "_blank";
      galleryLink.className = "gallery-item";

      const galleryItemImg = document.createElement("img");
      galleryItemImg.src = x.thumb;
      galleryItemImg.alt = "Photo";
      galleryItemImg.style.width = "100%";
      galleryItemImg.style.display = "block";
      galleryItemImg.loading = "lazy";

      galleryLink.appendChild(galleryItemImg);
      galleryEl.appendChild(galleryLink);
    });
  })
  .catch(() => {
    document.getElementById("gallery").textContent =
      "Unable to load gallery. Please try again later.";
  });
