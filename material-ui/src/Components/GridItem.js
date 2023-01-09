import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const GridItem = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={2}>
        <Grid item={8}>
        <Paper style={{
          backgroundColor:'#1A2027',
          width:200,
          height:300
        }}/>
        </Grid>
        <Grid item={4}>
        <Paper style={{
          backgroundColor:'#1A2027',
          width:200,
          height:300
        }}/>
        </Grid>
        <Grid item={4}>
        <Paper style={{
          backgroundColor:'#1A2027',
          width:200,
          height:300
        }}/>
        </Grid>
        <Grid item={4}>
        <Paper style={{
          backgroundColor:'#1A2027',
          width:200,
          height:300
        }}/>
        </Grid>
      </Grid>
    </Box>  
    </>
  )
}

export default GridItem
