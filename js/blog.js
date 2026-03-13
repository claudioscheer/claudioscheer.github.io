fetch("/blog/posts.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load posts");
    return response.json();
  })
  .then((posts) => {
    const postsByTag = posts.reduce((acc, post) => {
      const tag = post.tag;
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(post);
      return acc;
    }, {});

    const blogPostsDiv = document.getElementById("blog-posts");

    for (const tag in postsByTag) {
      const section = document.createElement("div");
      section.style.marginBottom = "2.5rem";

      const tagHeading = document.createElement("h2");
      tagHeading.className = "tag-heading";
      tagHeading.textContent = tag;
      section.appendChild(tagHeading);

      for (const post of postsByTag[tag]) {
        const postDiv = document.createElement("div");
        postDiv.className = "post-item";

        const postLink = document.createElement("a");
        postLink.href = post.post;
        postLink.className = "post-link";
        postLink.textContent = post.title;

        postDiv.appendChild(postLink);
        section.appendChild(postDiv);
      }

      blogPostsDiv.appendChild(section);
    }
  })
  .catch(() => {
    document.getElementById("blog-posts").textContent =
      "Unable to load posts. Please try again later.";
  });
