import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Component/Card'
import Header from '../Component/Header'

export default function ComplexGrid() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                // alignItems="center"
                >
                    <Grid item style= {{width:500}}> 
                    <Card />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
