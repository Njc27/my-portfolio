import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

export default function CircularProgressComp(props){
    const {reload,endValue,name} = props;
    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 3,
        start: 0,
        end: endValue,
      });
    // useEffect(() =>{
    //     reset()
    //     console.log(reload)
    // },[reload])
    
    return(
        <CircularProgress
        value={value2}
        color = "primary"
        sx={{
            "--CircularProgress-size": "100px",
            "--CircularProgress-trackThickness": "10px",
            "--CircularProgress-progressThickness": "10px",
            "--CircularProgress-progressColor":"#FFE0B5",
            "margin":"10px",
            "--CircularProgress-trackColor":"rgb(232 110 20 / 40%)"
          }}
          determinate
          >
                <div>{value2}%</div>
            </CircularProgress>
    )
}