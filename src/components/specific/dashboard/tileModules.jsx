import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Tile = ({ title, description, actionText, onActionClick }) => {
    return (
        <Card >
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
                <Button variant="contained" onClick={onActionClick}>{actionText}</Button>
            </CardContent>
        </Card>
    );
};

export default Tile;
