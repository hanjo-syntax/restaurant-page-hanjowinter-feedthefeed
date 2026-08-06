export default function WelcomeText({ eyebrow, title, description }) {
    const parts = title.split('.').filter(Boolean);
    return (
        <div className="welcome-text">
            <p className="text-cyan-400 uppercase font-black">{ eyebrow }</p>
                <h1 className="text-7xl font-bold uppercase">
                    {parts.map((part, index) => (
                        <span key={index}>
                        {part.trim()}.
                        {index < parts.length - 1 && <br />}
                        </span>
                    ))}
                </h1>
            <p className="mt-6 text-zinc-400">{ description }</p>
        </div>
    );
}