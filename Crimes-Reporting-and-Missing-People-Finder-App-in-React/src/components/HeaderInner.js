import React from "react";
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, browserHistory } from "react-router";
import * as firebase from "firebase";
import CrimeParent from "./crimeParent";
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { white } from "material-ui/styles/colors";

var styles = {
  appBar: {
    backgroundColor: '#3F51B5',
    minHeight: 50,
  },
  
  buttonInAppBar: {
    margin: 12,
    backgroundColor : white
  },
}

export default class HeaderInner extends React.Component {
  logoutBtn() {
    firebase.auth().signOut();
    browserHistory.push("/login");
  }

  render() {
    return (
      <div>
        <AppBar
          style={styles.appBar}
          title={
            <span>
              <IconMenu backgroundColor white
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem primaryText="Map" />
                <MenuItem primaryText="Contact" />
                <MenuItem primaryText="About us" />
              </IconMenu>
              Reporting App
            </span>
          }
        >
          <Link to="/home/missingpeopleparent/missingpeople" >
            <RaisedButton style={styles.buttonInAppBar} label="HOME" primary={false} />
          </Link>
          <Link to="/home/crimeparent" >
            <RaisedButton style={styles.buttonInAppBar} label="Crimes" primary={false} />
          </Link>
          <Link to="/home/missingpeopleparent" >
            <RaisedButton style={styles.buttonInAppBar} label="Missing People" primary={false} />
          </Link>
          <Link to="/home/complaintsparent/complaintslist" >
            <RaisedButton style={styles.buttonInAppBar} label="Complaints" primary={false} />
          </Link>
          <RaisedButton style={styles.buttonInAppBar} onClick={this.logoutBtn.bind(this)} label="Logout" primary={false} />
        </AppBar>
        {this.props.children}
      </div>
    )
  }
}
