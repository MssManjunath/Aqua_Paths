import { useEffect, useState } from "react";
import {LOOKUP} from "../Static/lookup";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('./getPath')
      };
    return (
        <div className="nav">
            <div className="logo">
                {LOOKUP?.WEB_APP_NAME}
            </div>
            <div>
                <ul>
                    <li>{LOOKUP?.NAVBAR?.HOME}</li>
                    <li>{LOOKUP?.NAVBAR?.NEWS}</li>
                    <li onClick={handleClick}>{LOOKUP?.NAVBAR?.CHECK_CARGO}</li>
                    <li>{LOOKUP?.NAVBAR?.GET_WEATHER}</li>
                    <li>{LOOKUP?.NAVBAR?.About}</li>
                </ul>
            </div>
        </div>

    )
}