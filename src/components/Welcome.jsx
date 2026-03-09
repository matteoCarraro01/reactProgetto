import { Container } from "react-bootstrap"

function Welcome() {
    return (
        <div className="bg-dark text-light py-5 border-bottom border-danger">
            <Container>
                <h1 className="fw-bold">EpicBook</h1>

                <p className="text-secondary">
                    Esplora i migliori romanzi horror e scopri nuove storie da brivido.
                </p>

            </Container>
        </div>
    )
}

export default Welcome