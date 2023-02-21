import React,{ useState, useEffect } from 'react';
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

function Dashboard() {
    const [online, setOnline] = useState(true);
    const [value, setVolume] = useState(20);
    const [quality, setQuality] = useState(2);
    const [notifications, setNotifications] = useState([])

    let newNotifications = [];

    useEffect(() => {
    if (!online) {
      newNotifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }

    setNotifications(newNotifications);
    }, [online]);

    useEffect(() => {
        if (value > 50) {
          newNotifications.push(
            "Listening to music at a high volume could cause long-term hearing loss."
            );
        }
        setNotifications(newNotifications);
    }, [value]);

    useEffect(() => {
        if (quality === 1) {
          newNotifications.push(
            "Music quality is degraded. Increase quality if your connection allows it."
          );
        }
        setNotifications(newNotifications);
    }, [quality]);

    return(<div>
        <div className="Welcome-text">Welcome User!</div>
        <div className="Cards-position">
            <OnlineMode online={online} setOnline={setOnline}/>
            <MasterVolume value={value} setVolume={setVolume}/>
            <SoundQuality quality={quality} setQuality={setQuality}/>
        </div>
        <div className="System-text"><strong>System Notifications:</strong></div>
        {notifications.map((notification, i)=> (
            <p className="Notification-text" key={i}>{notification}</p>
        ))}
    </div>)
}

export default Dashboard;