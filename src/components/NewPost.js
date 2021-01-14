import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const API_POST = require('./api')

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencil, faWindowCloseO, faTrashO } from '@fortawesome/fontawesome-free-solid'


export default function NewPost() {

    const [state, setState] = useState();

    function handlePublic() {
        const data = {"id": 0, "content": `${state}`}
        API_POST.POST_add(data)
        setState('');
    }

    function handleChange(event) {
        setState(event.target.value)
    }

    // <i class="fa fa-pencil" aria-hidden="true"></i>
    // <i class="fa fa-window-close-o" aria-hidden="true"></i>
    // <i class="fa fa-trash-o" aria-hidden="true"></i>

    return (
        <div>
            <nav>
                <Link exact='true' to='/' className='close'>X</Link>
            </nav>
            <div className='field'>
                <input type="text" onChange={handleChange}/>
            </div>
            <button className='post'onClick={handlePublic}>
                <Link exact='true' to='/' className='close'>
                    Опубликовать
                </Link>
            </button>
        </div>
    )
}