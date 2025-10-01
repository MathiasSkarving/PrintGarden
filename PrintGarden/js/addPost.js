const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");
const postTemplate = document.getElementById("postTemplate");
const cancelButton = postForm.querySelector("#cancelButton");

cancelButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const imageFile = document.getElementById("postImage").files[0];

    if (!title && !content && !imageFile) {
        alert("Please write something or add an image.");
        return;
    }

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const post = {
                id: Date.now(),
                title,
                content,
                image: e.target.result,
                createdAt: new Date().toISOString()
            };

            let posts = JSON.parse(localStorage.getItem("posts")) || [];

            posts.push(post);

            localStorage.setItem("posts", JSON.stringify(posts));
        };

        reader.readAsDataURL(imageFile);
    } else {
        const post = {
            id: Date.now(),
            title,
            content,
            image: null,
            createdAt: new Date().toISOString()
        };
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        posts.push(post);

        localStorage.setItem("posts", JSON.stringify(posts));
    }

    postForm.reset();
});