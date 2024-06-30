import { Grid } from '@mui/material'
import React from 'react'

const Homepage = () => {
  return (
  <div>
    <Grid className="px-5 lg:px-36 justify-betweeen">
        <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
            <p className ="text-center">middle part</p>
        </Grid>
        <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
            <p className='text-center'>middle part</p>
        </Grid>

        <Grid item xs={12} lg={6} className ='hidden lg:block w-full relative'>
        <p className='text-center'>middle part</p>
        </Grid>
        
    </Grid>
    </div>
  )
}
export default Homepage