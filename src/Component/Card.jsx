import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'left'
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.img}
                image={require('./../Assets/acca.jpg')}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Nama : Ahmad Muyassar
                    </Typography>
                    <Typography component="h5" variant="h5">
                        Status : Single (Masih Memantaskan Diri)
                    </Typography>
                    <Typography component="h5" variant="h5">
                        Umur : 17 Tahun
                    </Typography>
                    <Typography component="h5" variant="h5">
                        Motto : Jangan Lakukan Sekarang kalau masih bisa dikerjakan besok
                    </Typography>
                </CardContent>

            </div>

        </Card>
    );
}
