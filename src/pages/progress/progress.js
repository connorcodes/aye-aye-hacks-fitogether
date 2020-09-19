import { Typography, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import "./progress.css"
import { VictoryPie } from 'victory';


const Progress = (props) => {

    const [data, setData] = useState([
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 }
    ]);

    return <div className="background">
        <p className="goal-title">Goals</p>
        <Grid container className="row">
            <Grid sm={0} md={3}></Grid>
            <Grid md={6}><p className="goal-text">Workout everyday</p></Grid>
            <Grid md={3}><p className="goal-text">Until Sep 31</p> </Grid>
        </Grid>


        <p className="goal-title">Achievement</p>
        <Grid container className="row">
            <Grid sm={0} md={3}></Grid>

            <Grid container md={6} className="row">

                <div className="col">
                    <p className="achieve-text">10</p>
                    <p>Days</p>
                </div>

                <div className="col">
                    <p className="achieve-text">200</p>
                    <p>Minutes</p>
                </div>

                <div className="col">
                    <p className="achieve-text">15</p>
                    <p>Sessions</p>
                </div>

            </Grid>

            <Grid sm={0} md={3}></Grid>
        </Grid>


        <p className="goal-title">Categories breakdown</p>

        <Grid container className="row">
            <Grid sm={0} md={3} justify="center">
                <VictoryPie
                    innerRadius={100}
                    data={data}
                />
            </Grid>
        </Grid>



        <p className="goal-title">Progress</p>
        <p>### PLACEHOLDER FOR CALENDAR ###</p>
    </div>
}

export default Progress