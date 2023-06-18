/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const RecipeItem = ({ id, name, description, author, imagePath }) => {
    const [nameVal, setNameVal] = useState(name);
    const [descriptionVal, setDescriptionVal] = useState(description);
    const [authorVal, setAuthorVal] = useState(author);
    const [imageSrc, setImageSrc] = useState(imagePath);

    const updateDocument = async () => {};
    const deleteDocument = async () => {};

    useEffect(() => {
        const getImage = async () => {
            try {
                // Fetch the download URL
            } catch (err) {
                console.log(err);
            }
        };

        getImage();
    });
    const uploadNewPhoto = async () => {};
    const deletePhoto = async () => {};

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                background: "salmon",
                borderRadius: "1rem",
                padding: "10px",
                width: "100%"
            }}
        >
            <img src={imageSrc} alt={name} />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "1rem"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        }}
                    >
                        <label htmlFor="recipeName">Recipe Name</label>
                        <input
                            type="text"
                            id="recipeName"
                            value={nameVal}
                            onChange={e => setNameVal(e.target.value)}
                        />

                        <label htmlFor="recipeDescription">Recipe Description</label>
                        <textarea
                            id="recipeDescription"
                            value={descriptionVal}
                            onChange={e => setDescriptionVal(e.target.value)}
                        />

                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            value={authorVal}
                            onChange={e => setAuthorVal(e.target.value)}
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "1rem"
                    }}
                >
                    <button type="button" onClick={updateDocument}>
                        Update
                    </button>
                    <button type="button" onClick={deleteDocument}>
                        Delete
                    </button>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        flexDirection: "column"
                    }}
                >
                    <label htmlFor="New Photo">New Photo</label>
                    <input type="file" id="New Photo" />
                    <button type="button" onClick={uploadNewPhoto}>
                        Upload New Photo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;
