import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    // NavLink는 a 태그가 선택됐을 경우 Class Active 붙여서 css 적용하기 편하게 하기 위해서 사용한다고 생각하면 편함
    return (
        <div>
            <h1>Main</h1>
            {
            /*/
            <ul>
                <li><Link to={'/'}>[Main]</Link></li>
                <li><Link to={'/guestbook'}>[Guestbook]</Link></li>
                <li><Link to={'/gallery'}>[Gallery]</Link></li>
            </ul>
            /*/
            <ul>
                <li><NavLink to={'/'}>[Main]</NavLink></li>
                <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
                <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
            </ul>
            //*/
            }
            </div>
    );
}