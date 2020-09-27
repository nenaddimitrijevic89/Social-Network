import React from 'react';
import style from './PostUser.module.css';
import avatar from '../../../../images/user.png';

const PostUser =()=> {
    return(
        <div className={style.user}>
            <div className={style.img}>
                <img className={style.radius} src={avatar}></img>
            </div>
            <div className={style.info}>
                <p><span> </span></p>
                <p><i className="fa fa-envelope"></i> email:<span> </span></p>
                <p><i className="fa fa-birthday-cake"></i> date of birth:<span> </span></p>
            </div>
        </div>
    )
}

export { PostUser };