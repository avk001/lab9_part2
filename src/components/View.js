import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostConstext from './PostContext'

const API_POST = require('./api')

export default function View({match}) {
    const allPosts = useContext(PostConstext);
    const currentId = +match.params.id
    const post = allPosts.find(o =>
        o.id === currentId
    )
    
    function handleDelet() {
        API_POST.POST_del(match.params.id)
    }
    
    return (
        <div>
            <p>{post ? post.content : 'Not found'}</p>
            <Link exact='true' to='/' className='close'>X</Link>
            <Link exact='true' to={`/edit/${match.params.id}`}>Изменить</Link>
            <Link exact='true' to='/' className='close'>
                <button onClick={handleDelet}>Удалить</button>
            </Link>
        </div>
    )
}
