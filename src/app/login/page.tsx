import LoginForm from "@/components/loginForm/LoginForm";

export default async function loginPage () {
    return (
        <div style={{
            backgroundImage: "url('/back2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh",
        }}>
            <LoginForm/>
        </div>
    )
}