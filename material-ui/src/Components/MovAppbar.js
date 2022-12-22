import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {ThemeProvider , createTheme} from '@mui/material/styles'
import MovieIcon from '@mui/icons-material/MovieCreation'

const MovAppbar = () => {

    const theme = createTheme({
        palette:{
            mode:'light',
            primary:{
                main:'rgb(57, 62, 70)'
            }
        }
    })

  return (
    <div>
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar>
            <MovieIcon style={{
                width:30,
                height:30
            }}/>
            <Typography style={{
                fontSize:25
            }}>
                AllAboutMovies
            </Typography>
            <Box flexGrow={1} mx={10} style={{
                display:'flex'
            }}>
                <Typography mx={2} style={{
                    fontSize:20,
                    cursor:'pointer'
                }}>
                    Home
                </Typography>
                <Typography mx={2}  style={{
                    fontSize:20,
                    cursor:'pointer',
                }}>
                    Movies
                </Typography>
                <Typography mx={2} style={{
                    fontSize:20,
                    cursor:'pointer'
                }}>
                    About
                </Typography>
                <Typography mx={2} style={{
                    fontSize:20,
                    cursor:'pointer'
                }}>
                    Contact
                </Typography>
            </Box>
            <Button color='inherit' style={{
                fontSize:15
            }}>
                Login
            </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </div>
  )
}

export default MovAppbar
