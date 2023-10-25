// Path to your Lottie animation JSON file
const animationPath = 'lottie/Showreel-Grid-Mobile-003-[remix].json';;

// Reference to the HTML container
const container = document.getElementById('lottie-container');

// Configure Lottie options
const animationConfig = {
  container: container,
  renderer: 'svg', // You can choose 'svg', 'canvas', or 'html'
  loop: true, // Set to true for looping animation
  autoplay: true, // Set to true to start playing automatically
  path: 'lottie/Showreel-Grid-Mobile-003-[remix].json', // Path to your animation JSON file
};

// Create a Lottie animation instance
const animation = lottie.loadAnimation(animationConfig);