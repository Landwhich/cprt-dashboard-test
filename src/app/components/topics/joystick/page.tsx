import styles from '../../styles/joystick.module.css'
import { ros } from '../ros/ros-handler'

var listener = new ros.Topic({
    ros : ros,
    name : '/listener',
    messageType : 'std_msgs/String'
  });

  listener.subscribe((message) => {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    listener.unsubscribe();
  });

export default function Joy() {
    return(
        <div>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/eventemitter2@6.4.9/lib/eventemitter2.min.js"></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/roslib@1/build/roslib.min.js"></script>
            Joystick widget
        </div>
    );
}