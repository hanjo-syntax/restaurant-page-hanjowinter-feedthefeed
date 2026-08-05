export default function WelcomeText({ eyebrow, title, description }) {
    return (
        <div className="welcome-text">
            {eyebrow && <p className="welcome-text__eyebrow">{ eyebrow }</p>}
            {title && <h2 className="welcome-text__title">{ title }</h2>}
            {description && <p className="welcome-text__description">{ description }</p>}
        </div>
    );
}