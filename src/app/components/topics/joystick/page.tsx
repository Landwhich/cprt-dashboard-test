import styles from '@styles/joystick.module.css'
//import { ros } from '@server/ros/ros-handler'

// var listener = new ros.Topic({
//     ros : ros,
//     name : '/listener',
//     messageType : 'std_msgs/String'
//   });

//   listener.subscribe((message) => {
//     console.log('Received message on ' + listener.name + ': ' + message.data);
//     listener.unsubscribe();
//   });

import JoystickCanvas from './joystickClient';

const App: React.FC = () => {
  return (
    <div>
      <JoystickCanvas></JoystickCanvas>
    </div>
  );
};

export default App;