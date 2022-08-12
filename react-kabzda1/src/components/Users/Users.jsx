import React from 'react';
import { NavLink } from 'react-router-dom';

import './Users.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className='paginator__wraper'>
                {pages.filter(page => (props.currentPage - 3) <= page && (page <= props.currentPage + 3)).map(page => {
                    return (
                        <span className={props.currentPage === page && 'selectedPage'} onClick={(e) => {
                            props.onPageChanged(page);
                        }}>
                            {page}
                        </span>
                    )
                })}
            </div>
            {props.users.map(u => (
                <div key={u.id}>
                    <div className='users__container'>
                        <div className='users__ava'>
                            <NavLink to={'/profile/' + u.id}>
                                <div>
                                    <img src={u.photos.small ? u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxlaOdF1PG6aT7GtgJFji_fGfNp7RpM9ulFwkvTWicprWA26M_tgewo-wZQIqAeGmgBM&usqp=CAU'} className='users__photo' alt='avatar' />
                                </div>
                            </NavLink>
                            <div className='usersFriend__button'>
                                {u.followed 
                                    ? <button disabled={props.followingInProgress
                                        .some(id => id === u.id)} 
                                            onClick={() => {props.unfollow(u.id)}}>
                                        Unfollow
                                    </button> 

                                    : <button disabled={props.followingInProgress
                                        .some(id => id === u.id)} 
                                            onClick={() => {props.follow(u.id)}}>
                                        Follow
                                    </button>}
                            </div>
                        </div>
                    
                        <div className='users__discription'>
                            <div>
                                <div><b>{u.name}</b></div>
                                <div>Status: {u.status}</div>
                            </div>
                            <div>
                                <div>Country: </div>
                                <div>City: </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Users;
