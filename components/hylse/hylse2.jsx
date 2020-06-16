import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hylseContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  hylse: {
    background: 'linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66))',
    height: '10rem',
    width: '68rem',
    position: 'absolute',
    top: '9rem',
    display: 'flex',
    alignItems: 'center',
  },
  //    hylseLightReflection: {
  //     height: '1rem',
  //     width: '65rem',
  //     background: 'linear-gradient(gray, darkgray)',
  //     marginTop: '8rem',
  //     position: 'absolute',
  //     top: '-2.5rem'
  //    },
  hylseKile: {
    height: '3.5rem',
    width: '67rem',
    background: 'linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69))',
    boxShadow: '5px 5px 3px rgb(70, 69, 69)',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '3em',
    zIndex: 10,
    marginLeft: '-1em',
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    border: '1px solid gray'
  },
  hylseScrewHole: {
    height: '2em',
    width: '2em',
    background: '#2f2f2f',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screwHead1: {
    height: '1.7em',
    width: '1.7em',
    background: '#5b5b5b',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screwHead2: {
    height: '1em',
    width: '1em',
    background: '#2f2f2f',
    borderRadius: '50%',
    boxShadow: 'inset 1px 1px 6px white',
  },
  hylseStart: {
    height: '14rem',
    width: '4rem',
    background: 'linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56))',
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '-3rem',
    boxShadow: '10px 10px 30px black',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray'
  },
  kileSpor: {
    height: '4.5em',
    width: '5em',
    background: 'rgb(56, 56, 56)',
    marginLeft: '2em',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxShadow: 'inset 5px 4px 3px black',
  },
  hylseEnd: {
    height: '10rem',
    width: '5rem',
    background: 'linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85))',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'hidden'
  },
  gang: {
    height: '10rem',
    width: '0.1em',
    background: 'rgb(189, 188, 188)',
    margin: '0 0.1rem'
  },
  "&last-child": {
      height: '9.7em',
      alignItems: 'center'
  },
  kileSporGangs: {
      height: '3.6rem',
      width: '3rem',
      background: 'rgb(85, 85, 85)',
      position: 'absolute',
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
      marginLeft: '-.5em',
      boxShadow: 'inset 1px 9px 3px black'
  }
}));
const Hylse = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.hylseContainer}>
      <div className={classes.hylseKile}>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
      </div>
      <div className={classes.hylse}>
        <div className={classes.hylseLightReflection}></div>

        <div className={classes.hylseStart}>
          <div className={classes.kileSpor}></div>
        </div>
        <div className={classes.hylseEnd}>
        <div className={classes.kileSporGangs}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
        </div>
      </div>
    </Grid>
  );
};

export default Hylse;
