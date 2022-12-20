import React from 'react'
import Card  from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardImage from '../assets/CardImage.jpg'
import CardActions from '@mui/material/CardActions'
import CartIcon from '@mui/icons-material/ShoppingCart'

const MediaCard = () => {
  return (
    <>
      <Card elevation={5} style={{
        width:400,
        height:400,
        position:'relative',
        left:1300
      }}>
        <CardMedia 
        component='img'
        image={CardImage}
        style={{
            width:400,
            height:200
        }}/>
        <CardContent>
            <Typography style={{
                fontSize:20
            }}>
                This is the media card
            </Typography>
            <Typography style={{
                fontSize:15
            }}>
                This is SubContent
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained' size='large' startIcon={<CartIcon/>}>
                SHOP
            </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default MediaCard
