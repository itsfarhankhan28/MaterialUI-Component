import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { fontSize } from '@mui/system'
import foodcardimg from '../assets/foodcardimg.jpg'
import CardActions from '@mui/material/CardActions'
import FoodBank from '@mui/icons-material/FoodBank'

const ComplexCard = () => {
  return (
    <>
      <Card style={{
        width:400,
        height:400
      }}>
        <CardHeader
        avatar={
            <Avatar style={{
                backgroundColor:'lightblue'
            }}>
                F
            </Avatar>
        }
        title="This is the Complex Card"
        subheader="This is the subHeader"/>
        <CardMedia 
        component='img'
        style={{
            width:400,
            height:200
        }}
        image={foodcardimg}/>
        <CardContent>
            <Typography style={{
                fontSize:20
            }}>
                This is the Content of the Card
            </Typography>
            <Typography style={{
                fontSize:15
            }}>
                This is the SubContent of the Card
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained' size='large' startIcon={<FoodBank/>}>
                Order
            </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ComplexCard
