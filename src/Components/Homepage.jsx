
import React from 'react'
import { Grid } from '@mui/material'
import Navigation from "./Navigation/Navigation";
import HomeSection from "./HomeSection/HomeSection";


const Homepage = () => {
  return (
  <div>
    <Grid container xs={12} className="px-5 lg:px-36 justify-betweeen">

      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
          <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
          <HomeSection/>
      </Grid>

      <Grid item xs={0} lg={3} className ='hidden lg:block w-full relative'>
          <p className='text-center'>right part</p>
      </Grid>

     </Grid>
    </div>
  )
}
export default Homepage