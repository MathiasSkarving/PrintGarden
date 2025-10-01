const createPostButton = document.getElementById("createPostButton");
const closePopup = document.getElementById("closePopup");
const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");
const postTemplate = document.getElementById("postTemplate");

// Open popup
createPostButton.addEventListener("click", () => {
    postForm.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
    postForm.style.display = "none";
});

// Handle post submission
postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const imageFile = document.getElementById("postImage").files[0];

    if (!title && !content && !imageFile) {
        alert("Please write something or add an image.");
        return;
    }

    const newPost = postTemplate.content.cloneNode(true);

       let clickablePost = newPost.querySelector(".post");

    clickablePost.addEventListener("click", () => {
        alert("Post clicked!");
    });

    if (title) newPost.querySelector(".post-title").textContent = title;
    if (content) newPost.querySelector(".post-text").textContent = content;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = newPost.querySelector(".post-image");
            e.target.result.resize = "contain"; // Ensure the image fits within the post
            img.src = e.target.result;
            img.style.display = "block";
            postsContainer.prepend(newPost); // add post after image is ready
        };
        reader.readAsDataURL(imageFile);
    } else {
        postsContainer.prepend(newPost);
    }
    postForm.style.display = "none";
    postForm.reset();
});