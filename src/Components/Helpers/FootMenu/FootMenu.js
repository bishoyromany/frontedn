import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, AppBar, Fab } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import "./FooterMenu.css";
import history from "../../../Utils/History";
import { useSelector } from "react-redux";
import Popup from "../Popups/Popup";
import UserProfile from "../../UserPorfile/UserProfile";
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    background: "#3897F1",
    color: "#fff",
  },
}));

export default function FootMenu(props) {
  const classes = useStyles();
  const [menu, setMenu] = useState(0);
  const Auth = useSelector((state) => state.Auth);
  const [useiinfopopup, setuserInfopopup] = useState(false);
  return (
    <AppBar
      position="fixed"
      color="primary"
      className={classes.appBar}
      color="default"
    >
      <Toolbar>
        <Fab
          aria-label="add"
          className={classes.fabButton}
          onClick={() => {
            if (Auth.Name === "" || Auth.Name === undefined) {
              setuserInfopopup(true);
            } else {
              history.push("/MyEvents/add-event");
            }
          }}
        >
          <AddIcon />
        </Fab>
        <Grid container spacing={0} className={classes.grow}>
          <Grid
            item
            xs={6}
            className={props.menu === 0 ? "menubox activemenu" : "menubox"}
            onClick={() => {
              props.setMenu(0);
              history.push("/MyInvitations");
            }}
          >
            Invitations
          </Grid>
          <Grid
            item
            xs={6}
            className={props.menu === 1 ? "menubox activemenu" : "menubox"}
            onClick={() => {
              props.setMenu(1);
              history.push("/MyEvents");
            }}
          >
            My Events
          </Grid>
        </Grid>
      </Toolbar>
      <Popup
        component={UserProfile}
        toggleShowPopup={setuserInfopopup}
        showPopup={useiinfopopup}
        url={"MyEvents/add-event"}
      />
    </AppBar>
  );
}
