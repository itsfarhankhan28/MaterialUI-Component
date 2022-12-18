import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardAction from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import './CardComponent.css' 

const Cardcomponent = () => {
  return (
    <>
      <div className="Cardcomponent">
        <Card style={{
          width:250,
          height:350,
          position:'relative',
          top:100,
          left:100
        }}>
            <CardContent>
                <Typography style={{
                    fontSize:20
                }}>
                    This is a MUI Card Component
                </Typography>
                <Typography style={{
                  fontSize:15
                }}>
                  Heading 02
                </Typography>
            </CardContent>
            <CardAction>
              <Button variant='contained' size='large' style={{fontSize:15}}>
                SAVE
              </Button>
            </CardAction>
        </Card>
        <Card style={{
          width:250,
          height:350,
          position:'relative',
          top:100,
          left:100
        }}>
            <CardContent>
                <Typography style={{
                    fontSize:20
                }}>
                    This is a MUI Card Component
                </Typography>
                <Typography style={{
                  fontSize:15
                }}>
                  Heading 02
                </Typography>
            </CardContent>
            <CardAction>
              <Button variant='contained' size='large' style={{fontSize:15}}>
                SAVE
              </Button>
            </CardAction>
        </Card>
      </div>
    </>
  )
}

export default Cardcomponent
