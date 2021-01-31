import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import firebase from '../../firebase';

const NavLinks = () => {

    const currentUser = useContext(AuthContext);

    return (
        <div>
        <ul className="nav" style={{position:'relative', overflow: 'hidden', paddingTop: '10px', paddingBottom: '10px'}}>
            <div style={{width: '80%', marginRight: 'auto', marginLeft: 'auto'}}>
            <li>
                <NavLink exact to="/" className="nav" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/fyrirtaekid" className="nav">Fyrirtækið</NavLink>
            </li>
            <li className="nav-item" >
                <NavLink to="tengilidir" className="nav">Tengiliðir</NavLink>
            </li>
            <li className="nav-item" >
                <NavLink to="thjonusta" className="nav">Þjónusta</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="verkefni" className="nav">Verkefni</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="fyrirspurn" className="nav">Hafa samband</NavLink>
            </li>
            </div>
            <div className="nav" style={{ position: 'absolute', right: 20, top: 10, float:'right'}}>
                { currentUser != null ? 
                    <button style={{border: 'none', backgroundColor:'inherit'}} onClick={() => {
                        firebase.auth().signOut()
                    }}>{currentUser.email}</button> : <div></div>
                }
            </div>
        </ul>
        
        </div>
    )
};

export default NavLinks;