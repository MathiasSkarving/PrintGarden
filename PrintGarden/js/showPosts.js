postTemplate = document.getElementById("postTemplate").content;
postsContainer = document.getElementById("postsContainer");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach(post => {
    console.log(post);
    const postClone = document.importNode(postTemplate, true);
    postClone.querySelector(".post-title").textContent = post.title;
    postClone.querySelector(".post-content").textContent = post.content;
    if (post.image) {
        postClone.querySelector(".post-image").src = post.image;
    }
    postsContainer.prepend(postClone);
});
