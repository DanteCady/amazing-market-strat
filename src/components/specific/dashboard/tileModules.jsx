import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from '@mui/icons-material';
import { colors } from '@mui/material';

const Tile = ({ icon: Icon, title, description, actionText, onActionClick }) => {
    return (
        <Card
        sx={{
            backgroundColor: '#131722',
            color: 'white',
            display: 'flex',

        }}
        >
            <CardContent>
                    {Icon && <Icon sx={{ fontSize: 40, mb: 2, color: '#f1c50e'}} />}                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="white">
                    {description}
                </Typography>
                <Button
                 variant="contained"
                 sx={{ 
                    backgroundColor: '#f1c50e',
                    color: 'white' }} 
                 onClick={onActionClick}
                  >{actionText}</Button>
            </CardContent>
        </Card>
    );
};

export default Tile;
