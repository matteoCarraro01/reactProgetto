import SingleBook from './SingleBook';
import { Container, Row, Form, InputGroup } from 'react-bootstrap';





function AllTheBooks({ filteredBooks }) {
    // const [search, setSearch] = useState('')
    // const [filteredBooks, setFilteredBooks] = useState(books)
    // const filterBooks = (event) => {
    //     setSearch(event.target.value)
    //     const bookArray = books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
    //     setFilteredBooks(bookArray)

    //     console.log(event.target.value)

    // }
    return (
        <Container>
            {/* <InputGroup className="search-group mb-4">
                <InputGroup.Text className="search-icon">
                    🔍
                </InputGroup.Text>

                <Form.Control
                    onKeyUp={filterBooks}
                    placeholder="Cerca un libro"
                    className="search-input"
                />
            </InputGroup> */}
            <Row>
                {filteredBooks.map((myBook) => (
                    <SingleBook key={myBook.asin} book={myBook} />
                ))}
            </Row>
        </Container>

    )

}







export default AllTheBooks;