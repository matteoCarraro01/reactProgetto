import { Container } from "react-bootstrap"

function MyFooter() {
    return (
        <footer className="bg-dark text-light mt-5 py-4">
            <Container className="text-center">

                <p>EpicBook © 2026</p>

                <div className="d-flex justify-content-center gap-4 fs-4">

                    <i className="bi bi-instagram"></i>

                    <i className="bi bi-tiktok"></i>

                    <i className="bi bi-facebook"></i>

                </div>

            </Container>
        </footer>
    )
}

export default MyFooter
