import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const style = {
    width:'100%',
    maxWidth:400,
    bgcolor: 'background.paper'
}

const Listitem = () => {
  return (
    <>
      <List sx={style}>
        <ListItem button>
            <ListItemText primary='Home'/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary='About'/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary='Contact'/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary='Details'/>
        </ListItem>
      </List>
    </>
  )
}

export default Listitem
