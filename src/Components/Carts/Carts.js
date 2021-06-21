import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { TheContext } from '../../App';
import "./Carts.css"

const Carts = (props) => {
    //....The context api
    const[set, setpic] = useContext(TheContext);

    const{type, picture} = props.data;
    let history = useHistory();
    const handleClick = () =>{
        history.push(`/search/${type}`)
        setpic(props.data)
    }
    return (
        <div>
             <div onClick={handleClick} className="col cursor_pointer">
                    <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center vahicle_name">{type}</h5>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Carts;