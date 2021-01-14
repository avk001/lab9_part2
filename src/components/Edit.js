import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faWindowClose, faTrashO } from '@fortawesome/fontawesome-free-solid'
import { Button, Container, Row, Col } from 'react-bootstrap';

const API_POST = require('./api')

function Edit({match}) {
    const [post, setPost] = useState()
    function handleFetch() {
        const data = {"id": +match.params.id, "content": `${post}`}
        API_POST.POST_add(data)
        setPost('')
        console.log(post)
    }

    function handleChange(event) {
        setPost(event.target.value)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="field">
                            <input type="text" onChange={handleChange}/>
                        </div>
                    </Col>
                    <Link exact='true' to={`/posts/${match.params.id}`} className='close'>
                        {/*<button>Closed <FontAwesomeIcon icon={faWindowClose} /></button>*/}
                        <Button color="danger">Closed <FontAwesomeIcon icon={faWindowClose} /></Button>
                    </Link>

                    <footer>
                        <button onClick={handleFetch}>Сохранить</button>
                    </footer>
                </Row>
            </Container>
        </div>
    )
}

export default Edit