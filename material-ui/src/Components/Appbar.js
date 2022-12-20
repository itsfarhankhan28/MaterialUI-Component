import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Appbar = () => {
  return (
    <>
      <AppBar position='static' elevation={5}>
        <Toolbar>
            <IconButton edge="start" size="large" color='inherit'>
                <MenuIcon style={{
                    width:30,
                    height:30
                }}/>
            </IconButton>
            <Typography sx={{flexGrow:1}} style={{
                fontSize:20
            }}>
                AllAboutMovies
            </Typography>
            <Button size='large' color='inherit' style={{
                fontSize:15
            }}>
                Login
            </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Appbar
