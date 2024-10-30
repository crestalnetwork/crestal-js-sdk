import { berachainBartiolistenToEvents } from "../berachainBartioEventListener";


// Start the event listener
berachainBartiolistenToEvents()
  .then(() => {
    console.log('Event listener started successfully.');
  })
  .catch((error) => {
    console.error('Failed to start event listener:', error);
  });
