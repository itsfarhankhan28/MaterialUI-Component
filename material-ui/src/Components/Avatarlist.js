import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import FastFoodIcon from '@mui/icons-material/Fastfood'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CakeIcon from '@mui/icons-material/Cake';
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'

const style = {
    width:'100%',
    maxWidth:300,
    bgcolor:'background.paper',
    position:'relative',
    top:300,
    left:800
}

const Avatarlist = () => {
  return (
    <>
        <List sx={style} elevation={2}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <FastFoodIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='FastFood' secondary='McDonalds'/>
            </ListItem>
            <Divider variant='inset'/>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <RamenDiningIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Soup' secondary='MainLand China'/>
            </ListItem>
            <Divider variant='inset'/>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <LocalDiningIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Lunch' secondary='Naaz Hotel'/>
            </ListItem>
            <Divider variant='inset'/>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <CakeIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Dessert' secondary='Merwans'/>
            </ListItem>
        </List>
        <Badge badgeContent={4} color='primary'>
            <MailIcon/>
        </Badge>
    </>
  )
}

export default Avatarlist
