import React from 'react';
import { Typography, Button, Grid, Paper, Slider, TextField, Checkbox, FormControlLabel, CircularProgress, IconButton, Alert, Snackbar } from '@mui/material';
import { PlayCircleOutline as PlayCircleOutlineIcon, PauseCircleOutline as PauseCircleOutlineIcon } from '@mui/icons-material';
import LuminaSlider from '../components/LuminaSlider'

const IndexPage = () => {
  const [sliderValue, setSliderValue] = React.useState(50);
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleLoadingToggle = () => {
    setLoading(!loading);
  };

  const handleSnackbarToggle = () => {
    setOpenSnackbar(!openSnackbar);
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Material-UI: A Powerful UI Library
          </Typography>
          <Typography variant="body1" paragraph>
            Material-UI is a React UI framework based on Google's Material Design principles. It provides a vast array of
            components and utilities that make building beautiful and responsive web applications easy and efficient.
          </Typography>
          <Typography variant="body1" paragraph>
            Here are some examples of Material-UI components in action:
          </Typography>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Slider:</Typography>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />

            <LuminaSlider/>
            <Typography variant="body2">Value: {sliderValue}</Typography>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Text Field:</Typography>
            <TextField
              label="Enter text"
              variant="outlined"
              value={textFieldValue}
              onChange={handleTextFieldChange}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Checkbox:</Typography>
            <FormControlLabel
              control={<Checkbox checked={checkboxChecked} onChange={handleCheckboxChange} />}
              label="Check me"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Loading Indicator:</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CircularProgress color="secondary" size={24} style={{ marginRight: '10px' }} />
              <Button variant="contained" color="primary" onClick={handleLoadingToggle}>
                {loading ? 'Stop Loading' : 'Start Loading'}
              </Button>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Icons:</Typography>
            <IconButton color="primary">
              <PlayCircleOutlineIcon />
            </IconButton>
            <IconButton color="primary">
              <PauseCircleOutlineIcon />
            </IconButton>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="h6">Alert:</Typography>
            <Button variant="contained" color="secondary" onClick={handleSnackbarToggle}>
              Show Snackbar
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarToggle}>
              <Alert onClose={handleSnackbarToggle} severity="info">
                This is a Snackbar message!
              </Alert>
            </Snackbar>
          </div>
          <Button variant="contained" color="primary" href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
