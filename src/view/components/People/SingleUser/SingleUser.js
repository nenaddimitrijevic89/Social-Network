import React from 'react';
import { userService } from '../../../../services/userService';

class SingleUser extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        userService.getSingleUser(this.props.match.params.id)
    }

    render(){
        return(
            <></>
        )
    }
}

export { SingleUser }