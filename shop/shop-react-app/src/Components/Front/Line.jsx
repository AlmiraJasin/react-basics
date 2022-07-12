import { useContext } from "react";
import FrontContext from "./FrontContext";

function Line({ line }) {

    const { doFilter } = useContext(FrontContext);

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{line.title}</b>
                    <i>{line.price.toFixed(2)} EUR</i>
                    <div className="box" style={{ backgroundColor: line.in_stock ? 'coral' : null }}></div>
                    <span>{new Date(Date.parse(line.lu)).toLocaleString()}</span>
                    <div className="cat" onClick={() => doFilter(line.cid)}>{line.cat}</div>
                    {
                        line.photo ? <div className="photo-bin"><img src={line.photo} alt={line.title} /></div> : null
                    }
                </div>
            </div>
        </li>
    );
}

export default Line;