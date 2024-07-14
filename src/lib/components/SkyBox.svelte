<script>
    let time = new Date().getHours(); // Get the current time
  
    let skyImage = 'img/default_sky.png'; // Default image'
  
    // Update the sky image based on the time of day
    if (time >= 6 && time < 12) {
      skyImage = 'img/morning_sky.png';
    } else if (time >= 12 && time < 18) {
      skyImage = 'img/afternoon_sky.png';
    } else if (time >= 18 && time < 21) {
      skyImage = 'img/evening_sky.png';
    } else {
      skyImage = 'img/night_sky.png';
    }
  </script>
  
  <div class="sky" style="background-image: url({skyImage})">
    <!-- You can add clouds and other elements here -->
  </div>
  
  <style>
    .sky {
      position: absolute;
      opacity: 0.1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #1B141E;
      z-index: -99;
    }
  </style>
  