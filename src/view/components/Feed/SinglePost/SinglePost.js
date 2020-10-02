import React from 'react';
import { postService } from '../../../../services/postService';

class SinglePost extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        postService.getSinglePost(this.props.match.params.id)

        postService.getAllPostComments(this.props.match.params.id)
    }
    render() {
        return (
            <>

            </>
        )
    }
}

export { SinglePost };