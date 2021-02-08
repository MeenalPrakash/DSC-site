import React from 'react';
import { Typography, Grid, Container, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import SponsorCard from './SponsorCard';


export default function Sponsor(props) {
  let history = useHistory();

  return (
    <div className='sponsors'>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        Our Proud Sponsors
      </Typography>
      <Typography
        data-aos="flip-down"
        variant='h5'
        component='p'
        className='dsc-font'
        align='center'
      >
        Associate Sponsors
      </Typography>
      <div className="sponsor-container">
        <SponsorCard key="0" src={require('../../images/sponsors/devfolio-light.png')} link="https://devfolio.co" />
      </div>
      <Typography
        data-aos="flip-down"
        variant='h5'
        component='p'
        className='dsc-font'
        align='center'
      >
        Co-Sponsors
      </Typography>
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
      >
        <SponsorCard key="0" src={require('../../images/sponsors/matic-light.png')} link="https://matic.network" />
        <SponsorCard key="1" src={require('../../images/sponsors/tezos-light.png')} link="https://tezos.com" />
        <SponsorCard key="2" src={require('../../images/sponsors/portis-light.png')} link="https://www.portis.io/" />
        <SponsorCard key="2" src={require('../../images/sponsors/GMC_logo.png')} link="http://givemycertificate.com/" />
      </Grid>
      <Typography
        data-aos="flip-down"
        variant='h5'
        component='p'
        className='dsc-font'
        align='center'
      >
        Sponsors
      </Typography>
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
      >
        <SponsorCard key="0" src={require('../../images/sponsors/taskade-meta.png')} link="https://www.taskade.com/" />
      </Grid>
    </div>
  );
}
