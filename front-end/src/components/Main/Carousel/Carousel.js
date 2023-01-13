import CarouselB from "react-bootstrap/Carousel";


// Imagenes que apareceran en el Carrusel
// Deben de estar en la carpeta de public

const imagenes = [
    {
        name: "movilidad.jpg",
        alt: "movilidad",
        title: "Movilidad 2023",
        about: ""
    },
    {
        name: "banner_antivapeo.jpg",
        alt: "antivapeo",
        title: "Nunca es tarde",
        about: ""
    },
    {
        name: "cambioCarrera.png",
        alt: "cambio carrera",
        title: "Cambio carrera 2023",
        about: ""
    }
]

function Carousel() {
    return (
        <CarouselB>
            {imagenes.map(img => (
                <CarouselB.Item key={img.name}>
                    <img className="d-block w-100" src={img.name} alt={img.alt}/>
                    <CarouselB.Caption className="">
                        <h3 className="text-dark">{img.title}</h3>
                        <p>{img.about}</p>
                    </CarouselB.Caption>
                </CarouselB.Item>
            ))}
        </CarouselB>
    )
}

export default Carousel;