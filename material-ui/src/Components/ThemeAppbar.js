import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {ThemeProvider,createTheme} from '@mui/material/styles'

const ThemeAppbar = () => {

    const darktheme = createTheme({
        palette:{
            mode:'dark',
            primary:{
                main:'rgb(26, 18, 11)'
            }
        }
    })

  return (
    <>
      <ThemeProvider theme={darktheme}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' size='large' color='inherit'>
                    <MenuIcon style={{
                        width:30,
                        height:30
                    }}/>
                </IconButton>
                <Typography style={{
                    fontSize:20
                }} mx={2} sx={{flexGrow:1}}>
                    AllAboutMovies
                </Typography>
                <Button color='inherit' size='large' style={{
                    fontSize:15
                }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

export default ThemeAppbar
