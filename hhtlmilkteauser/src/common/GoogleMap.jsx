import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    map: {
        border: 0,
        width: 400,
        heigth: 200,
        [theme.breakpoints.down("md")]: {
            width: 300,
            heigth: 200,
        },
    }
}))

const GoogleMap = () => {

    const classes = useStyles();

    return (
        <div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5045768673167!2d106.7943731757038!3d10.849174557846275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527407f65d1b7%3A0xd3831ba5443fbbd6!2zMjM2IMSQLiBNYW4gVGhp4buHbiwgUGjGsOG7nW5nIFTDom4gUGjDuiwgUXXhuq1uIDksIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1719752282852!5m2!1svi!2s" className={classes.map} loading="lazy"></iframe>
        </div>
    );
}

export default GoogleMap