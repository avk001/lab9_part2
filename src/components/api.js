module.exports = {
    isset: function ( somevar ){
        return ( typeof( somevar ) != 'undefined' && somevar !== null ) ;
    },
    /**
     * delete post
     * @param id
     * @constructor
     */
    POST_del: function(id) {
        fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    },
    /**
     * Add post msg
     * @param date
     * @constructor
     */
    POST_add: function(date) {
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
        })
    },

    /**
     * Get list
     * @param id
     * @constructor
     */
    POST_list: async function(id) {
        let res = await fetch('http://localhost:7777/posts')
        let d = await res.json();
        return d
    }

};