const createPostButton = document.getElementById("createPostsButton");
createPostButton.addEventListener("click", () => {
    window.location.href = "CreatePost.html";
});

const showPostsButton = document.getElementById("showPostsButton");
showPostsButton.addEventListener("click", () => {
    window.location.href = "ShowPosts.html";
});

const editPostsButton = document.getElementById("editPostsButton");
editPostsButton.addEventListener("click", () => {
    window.location.href = "EditPost.html";
});

let posts = JSON.parse(localStorage.getItem("posts")) || [];
const postsContainer = document.getElementById("postsContainer");
const postTemplate = document.getElementById("postTemplate").content;
for (let i = 0; i < 5; i++) {
    if (posts[i]) {
        const post = posts[i];
        const postClone = document.importNode(postTemplate, true);
        postClone.querySelector(".post-title").textContent = post.title;
        postClone.querySelector(".post-content").textContent = post.content;
        if (post.image) {
            postClone.querySelector(".post-image").src = post.image;
        }
        postsContainer.prepend(postClone);
    }
}