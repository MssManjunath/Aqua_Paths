import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {loadNews} from "../Services/newsService";
import { RootState } from '../Redux/store';


const NewsComponent = () =>{
    const dispatch: any = useDispatch();

    useEffect(()=>{
        dispatch(loadNews());
    },[])

    const news = useSelector((state: RootState) => state.news as any);
    
    return (
        <div>

        </div>
    )
}

export default NewsComponent;