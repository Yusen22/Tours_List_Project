import { useState } from "react"


const Tour = (props) => {
    const { id, image, info, name, price, removeTour } = props

    const [readMore, setReadMore] = useState(false)
    return (
        <article className='single-tour' key={id}>
            <img className="img" src={image} alt={name} />
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(0, 240)}...`}</p>
                <p className="tour-price">£{price}</p>
            </div>
            <div className="btns">
                <button type="button" className="btn btn-block info-btn" onClick={() => setReadMore(!readMore)}>Show {readMore ? 'less' : 'more'}</button>
                <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)}>Delete</button>
            </div>
        </article>
    )
}
export default Tour