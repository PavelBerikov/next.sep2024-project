
import React from 'react';

const HomePage = () => {
    return (
        <div
            className="background"
            style={{
                backgroundImage: "url('/back.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                width: "100vw",
                height: "100vh",
            }}
        >
            auth home page
        </div>
    );
};

export default HomePage;