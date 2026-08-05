import Badge from './Badge';

export default function DishCard({ kind, title, description, price, tags, imageUrl }) {  
    return (
        <>
        <article className="dish-card">
            <div className="dish-card__image-container">
                <div className={'dish-card__image'} style={{ backgroundImage: `url(${imageUrl})` }}>
                    {kind && <Badge>{ kind }</Badge>}
                </div>
            <div className="dish-card__content"></div>
                <div className='dish-card__topline'>
                    <h3>{ title }</h3>
                    <span>{ price }</span>
                </div>
                <p>{ description }</p>
                <div className="dish-card__tags">
                    {tags.map((tag) => (
                        <span key={ tag } className="dish-card__tag">{ tag }</span>
                    ))}
                </div>
            </div>
        </article>
        </>
    );
}