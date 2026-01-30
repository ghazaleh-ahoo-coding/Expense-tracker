function Card({title, right, children} ){
    return(
        <section className='card'>
            <div className='cardheader'>
                <h2 className='sectionTitle'>{title}</h2>
                {right ? <div>{right}</div> : null}
            </div>
            <div className="cardBody">
              {children}
            </div>
        </section>
    )
}

export default Card