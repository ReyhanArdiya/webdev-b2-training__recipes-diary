/* eslint-disable react/prop-types */
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const RecipeItem = ({ id, name, description, author, minutes, imagePath }) => {
    const [nameVal, setNameVal] = useState(name);
    const [descriptionVal, setDescriptionVal] = useState(description);
    const [authorVal, setAuthorVal] = useState(author);
    const [imageSrc, setImageSrc] = useState(imagePath);
    const [photoFile, setPhotoFile] = useState(null);

    // DocumentReference of this recipe
    const docRef = doc(db, "recipes", id);

    // TODO change this to current user later
    const userId = "FAKE";

    const updateDocument = async () => {
        const newChanges = {
            name: nameVal,
            description: descriptionVal,
            author: authorVal,
            photoPath: imageSrc
        };

        // await setDoc(docRef, newChanges, {
        //     merge: true
        // });
        await updateDoc(docRef, newChanges);
    };
    const deleteDocument = async () => {
        await deleteDoc(docRef);
        // await updateDoc(docRef, {
        //     favorite: deleteField(),
        //     steps: deleteField()
        // });
    };

    useEffect(() => {
        const getImage = async () => {
            const imageRef = ref(storage, imagePath);
            const imageHostUrl = await getDownloadURL(imageRef);

            setImageSrc(imageHostUrl);
        };

        getImage();
    }, [imagePath]);

    useEffect(() => {
        const getImage = async () => {
            try {
                // Fetch the download URL
            } catch (err) {
                console.log(err);
            }
        };

        getImage();
    }, []);

    const uploadNewPhoto = async () => {
        try {
            // TODO save in recipes/{userId}/{documentId}

            const imageRef = ref(storage, `recipes/${userId}/${photoFile.name}`);

            await uploadBytes(imageRef, photoFile, {
                customMetadata: {
                    isFavorite: "i dont know"
                }
            });

            alert("Photo uploaded successfully!");

            // TODO update the photoPath field of the Recipe document with StorageReference.fullPath
            await updateDoc(docRef, {
                photoPath: imageRef.fullPath
            });

            setImageSrc(await getDownloadURL(imageRef));
        } catch (err) {
            console.log(err);
        }
    };
    const deletePhoto = async () => {
        try {
            const imageRef = ref(storage, `recipes/${userId}/${photoFile.name}`);
            await deleteObject(imageRef);

            alert("Photo deleted successfully!");
            setImageSrc("");
        } catch (err) {
            console.log(err);
        }
    };

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
            <img
                src={imageSrc}
                alt={name}
                style={{
                    width: "200px"
                }}
            />

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
                        <p>Recipe Minute: {minutes}</p>

                        <label htmlFor="recipeName">Recipe Name: {name}</label>
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
                    <input
                        type="file"
                        id="New Photo"
                        onChange={e => setPhotoFile(e.target.files[0])}
                        accept="image/*"
                    />
                    <button type="button" onClick={uploadNewPhoto}>
                        Upload New Photo
                    </button>
                    <button type="button" onClick={deletePhoto}>
                        Delete Photo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;
