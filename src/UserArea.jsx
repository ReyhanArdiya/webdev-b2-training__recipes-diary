/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    deleteUser,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    updateProfile
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        // Waktu user membuat akun baru
        const newUser = await createUserWithEmailAndPassword(auth, email, password);

        console.log(newUser);

        alert("Sign up success!");
    };
    const handleLogin = async () => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <form
            style={{
                width: "100%",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="button" onClick={handleSignUp}>
                Sign Up
            </button>
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </form>
    );
};

const UserProfile = ({ user }) => {
    const [displayName, setDisplayName] = useState(user.displayName);
    const [password, setPassword] = useState(user.password);

    const changeDisplayName = async () => {
        await updateProfile(user, {
            displayName
        });
    };
    const changePassword = async () => {
        await updatePassword(user, password);
    };
    const verifyEmail = async () => {
        await sendEmailVerification(user);
    };
    const logout = async () => {
        await signOut(auth);
    };
    const deleteAccount = async () => {
        await deleteUser(user);
    };

    return (
        <div
            style={{
                width: "100%",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h2>Welcome! {user.displayName}</h2>

            <div>
                {/* update display name and password field */}
                <label htmlFor="displayName">Display Name</label>
                <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                />
                <button type="button" onClick={changeDisplayName}>
                    Update Display Name
                </button>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="button" onClick={changePassword}>
                    Update Password
                </button>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "10px"
                }}
            >
                <button type="button" onClick={verifyEmail}>
                    Verify Email
                </button>
                <button type="button" onClick={deleteAccount}>
                    Delete Account
                </button>
                <button type="button" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

const UserArea = ({ user }) => {
    const content = user ? <UserProfile user={user} /> : <LoginForm />;

    return (
        <div
            style={{
                backgroundColor: "slateblue",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h1>User Area</h1>
            {content}
        </div>
    );
};

export default UserArea;
