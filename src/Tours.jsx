import Tour from "./Tour"

const Tours = ({ tours, removeTour }) => {

    return (
        <section>
            <div className="tours">
                {tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                    )
                })}
            </div>
        </section>
    )
}
export default Tours