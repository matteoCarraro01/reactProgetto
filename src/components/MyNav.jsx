import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Form, InputGroup } from "react-bootstrap"
import books from "../data/horror.json"



function MyNav({ setFilteredBooks }) {
    const filterBooks = (event) => {

        const bookArray = books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
        setFilteredBooks(bookArray)

        console.log(event.target.value)

    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">EpicBook</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Browse</Nav.Link>
                    </Nav>
                    <InputGroup className="search-group mb-1 mx-1">
                        <InputGroup.Text className="search-icon">
                            🔍
                        </InputGroup.Text>
                        <Form.Control
                            onKeyUp={filterBooks}
                            placeholder="Cerca un libro"
                            className="search-input"
                        />
                    </InputGroup>
                </Container>

            </Navbar>



        </>
    )

}


export default MyNav