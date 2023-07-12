fetch("/blog/posts.json")
  .then((response) => response.json())
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
      const tagDiv = document.createElement("div");
      const tagHeading = document.createElement("h2");
      tagHeading.textContent = tag;
      tagDiv.appendChild(tagHeading);

      for (const post of postsByTag[tag]) {
        const postDiv = document.createElement("div");
        const postTitle = document.createElement("h4");

        const postLink = document.createElement("a");
        postLink.href = post.post;
        postLink.target = "_blank";
        postLink.textContent = post.title;

        postTitle.appendChild(postLink);
        postDiv.appendChild(postTitle);

        tagDiv.appendChild(postDiv);
      }

      blogPostsDiv.appendChild(tagDiv);
    }
  });
