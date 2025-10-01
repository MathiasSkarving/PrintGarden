postTemplate = document.getElementById("postTemplate").content;
postsContainer = document.getElementById("postsContainer");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach(post => {
    const postClone = document.importNode(postTemplate, true);

    const editButton = postClone.querySelector(".edit-button");
    editButton.addEventListener("click", () => {
        const postElement = editButton.closest(".post");
        const editForm = postElement.querySelector(".edit-form");
        editForm.style.display = "block";
    });

    const saveButton = postClone.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
        const postElement = saveButton.closest(".post");
        const editForm = postElement.querySelector(".edit-form");
        const editImage = postElement.querySelector(".edit-image").files[0];
        const editTitle = postElement.querySelector(".edit-title");
        const editContent = postElement.querySelector(".edit-content");

        if (editImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (editTitle.value === "" && editContent.value === "") { }
                else if (editTitle.value === "") {
                    post.content = editContent.value;
                    post.title = post.title;
                }
                else if (editContent.value === "") {
                    post.title = editTitle.value;
                    post.content = post.content;
                }
                else {
                    post.title = editTitle.value;
                    post.content = editContent.value;
                }
                post.image = e.target.result;

                postElement.querySelector(".post-image").src = post.image;

                localStorage.setItem("posts", JSON.stringify(posts));
            }
            reader.readAsDataURL(editImage);
        }
        else {
            if (editTitle.value === "" && editContent.value === "") { }
            else if (editTitle.value === "") {
                post.content = editContent.value;
                post.title = post.title;
            }
            else if (editContent.value === "") {
                post.title = editTitle.value;
                post.content = post.content;
            }
            else {
                post.title = editTitle.value;
                post.content = editContent.value;
            }
            localStorage.setItem("posts", JSON.stringify(posts));
        }

        editForm.style.display = "none";
        postElement.querySelector(".post-title").textContent = post.title;
        postElement.querySelector(".post-content").textContent = post.content;

    });

    const cancelButton = postClone.querySelector(".cancel-button");
    cancelButton.addEventListener("click", () => {
        const postElement = cancelButton.closest(".post");
        const editForm = postElement.querySelector(".edit-form");
        editForm.querySelector(".edit-title").value = "";
        editForm.querySelector(".edit-content").value = "";

        editForm.style.display = "none";
    });

    const deleteButton = postClone.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this post?")) {
            posts = posts.filter(p => p.id !== post.id);
            localStorage.setItem("posts", JSON.stringify(posts));
            const postElement = deleteButton.closest(".post");
            postElement.remove();
        }
    });

    postClone.querySelector(".post-title").textContent = post.title;
    postClone.querySelector(".post-content").textContent = post.content;
    if (post.image) {
        postClone.querySelector(".post-image").src = post.image;
    }
    postsContainer.prepend(postClone);

});