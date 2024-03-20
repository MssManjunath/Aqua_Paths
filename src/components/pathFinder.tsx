import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../Redux/store';
import { PortData } from "../Static/types";
import Map from "./mapWithTier";
import MapInputLayer from "./mapInputLayer";
import { loadPathCoordinates } from "../Services/portService";

export default function PathFinder() {
    const dispatch: any = useDispatch();
    const [srcCoordinate, setSrcCoordinate] = useState<[number, number]>([0, 0]);
    const [destCoordinate, setDestCoordinate] = useState<[number, number]>([0, 0]);

    const findCoordinates = (srcIndex: [number, number], destIndex: [number, number]) => {
        setSrcCoordinate(srcIndex)
        setDestCoordinate(destIndex);
    }

    useEffect(() => {
        if (srcCoordinate && srcCoordinate[0] != 0
            && srcCoordinate[1] != 0 && destCoordinate
            && destCoordinate[0] != 0 && destCoordinate[0] != 0) {
                getPath();
        }
    }, [srcCoordinate, destCoordinate])

    const getPath = () => {
        const pathData = { srcCoordinate, destCoordinate }
        dispatch(loadPathCoordinates(pathData))
    }

    return (
        <>
            <MapInputLayer findCoordinates={findCoordinates} />
            <Map srcCoordinate={srcCoordinate} destCoordinate={destCoordinate} />
        </>

    )
}