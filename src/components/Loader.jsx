import React from "react";

const Loader = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-soft-beige/90">
        <h1 className="text-4xl font-title text-wood-brown mb-8 tracking-widest uppercase">La Gaviota</h1>
        <div className="loader-spinner" />
        <style>{`
        .loader-spinner {
            border: 8px solid #e9e4dc; /* beige */
            border-top: 8px solid #7c5a3a; /* marrón */
            border-radius: 50%;
            width: 64px;
            height: 64px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `}</style>
    </div>
);

export default Loader;
