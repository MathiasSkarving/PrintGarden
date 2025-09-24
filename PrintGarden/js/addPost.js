function createPost() {
    const post = createPostElement();
    document.getElementById("postsContainer").appendChild(post);
}

function createPostElement() {
    const template = document.getElementById("postTemplate");
    const clone = template.content.cloneNode(true);
    clone.querySelector("#postTitle strong").textContent = "Post Title";
    clone.querySelector("#postContent").textContent = "Post content goes here.";
    return clone;
}