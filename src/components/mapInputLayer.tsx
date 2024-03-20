import { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {inputAutocomplete} from "../Static/styles";
import { useSelector } from "react-redux";
import { RootState } from '../Redux/store';
import { PortData } from "../Static/types";
import { MapInputLayerProps } from "../Static/types";

const MapInputLayer: React.FC<MapInputLayerProps> = ({ findCoordinates }) => {
    const [srcValue, setSrcValue] = useState<string | null>("");
    const [destValue, setDestValue] = useState<string | null>("");
    const [inputValueSrc, setInputValueSrc] = useState('');
    const [inputValueDest, setInputValueDest] = useState('');
    const portData = useSelector((state: RootState) => state.port as PortData);
    useEffect(() =>{
        const srcCoordinates = portData?.portData[portData?.searchData?.findIndex(option => option === srcValue)]?.COORDINATES;
        const destCoordinates = portData?.portData[portData?.searchData?.findIndex(option => option === destValue)]?.COORDINATES;
        findCoordinates(srcCoordinates,destCoordinates);
    },[srcValue,destValue])
    return(
        <div className="map-overlay-inputs">
            <div className="map-overlay-trip">
        {portData?.searchData?.length>0 ?(
            <>
            <Autocomplete
            value={srcValue}
            onChange={(event: any, newValue: string | null) => {
                setSrcValue(newValue);
            }}
            inputValue={inputValueSrc}
            onInputChange={(event, newInputValue) => {
                setInputValueSrc(newInputValue);
            }}
            id="controllable-states-demo"
            options={portData?.searchData}
            sx = {inputAutocomplete}
            renderInput={(params) => <TextField {...params} label="Source" />}
    />
    <Autocomplete
            value={destValue}
            onChange={(event: any, newValue: string | null) => {
                setDestValue(newValue);
            }}
            inputValue={inputValueDest}
            onInputChange={(event, newInputValue) => {
                setInputValueDest(newInputValue);
            }}
            id="controllable-states-demo"
            options={portData?.searchData}
            sx = {inputAutocomplete}
            renderInput={(params) => <TextField {...params} label="Destination" />}
    />
        </>
        ):(
            <></>
        )}
        
            </div>
        </div>
    )
}

export default MapInputLayer;
