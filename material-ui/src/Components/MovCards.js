import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import MovieIcon from '@mui/icons-material/MovieCreation'
import movieimg1 from '../assets/movieimg1.jpg'
import movieimg2 from '../assets/movieimg2.jpg'
import movieimg3 from '../assets/movieimg3.jpg'
import movieimg4 from '../assets/movieimg4.jpg'
import movieimg5 from '../assets/movieimg5.jpg'
import movieimg6 from '../assets/movieimg6.jpg'
import movieimg7 from '../assets/movieimg7.jpg'
import movieimg8 from '../assets/movieimg8.jpg'
import movieimg9 from '../assets/movieimg9.jpg'
import movieimg10 from '../assets/movieimg10.jpg'

const MovCards = () => {
  return (
    <>
        <Box style={{
            display:'flex',
            justifyContent:'space-between',
            flexWrap:'wrap',
            width:1700,
            height:950,
            margin:'auto',
            position:'relative',
            top:50
        }} mx={5} my={5}>
            <Card mx={5} my={5} style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg1}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        The Avengers
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 4 2012
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg2}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Avengers Age of ultron
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 1 2015
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg3}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Avengers Infinity War
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:April 27 2018
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg4}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Avengers Endgame
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:April 26 2019
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg5}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Iron Man
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 8 2008
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg6}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Iron Man 2
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 7 2010
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card mx={5} my={5} style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg7}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Iron Man 3 
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 3 2013
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg8}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Captain America 1
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:July 22 2011
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg9}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Captain America 2
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:April 4 2014
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Card style={{
                width:300,
                height:420,
                backgroundColor:'rgb(57, 62, 70)'
            }}>
                <CardMedia 
                component='img'
                style={{
                    width:300,
                    height:280,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
                image={movieimg10}/>
                <CardContent>
                    <Typography style={{
                        fontSize:20,
                        color:'white'
                    }}>
                        Captain America 3
                    </Typography>
                    <Typography style={{
                        color:'white',
                        fontSize:15,
                        lineHeight:2
                    }}>
                        Release Date:May 6 2016
                    </Typography>
                    <CardActions>
                        <Button variant='contained' size='large' style={{
                            fontSize:10
                        }} startIcon={<MovieIcon/>}>
                            More Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    </>
  )
}

export default MovCards
