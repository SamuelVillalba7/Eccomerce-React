import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
  const background = {
    success: "green",
    danger: "red",
    warning: "orange",
    default: "blue",
  };

  const notificationStyles = {
    position: "absolute",
    top: 100,
    right: 30,
    padding: "20px",
    backgroundColor: background[severity] || background.default,
    color: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "opacity 0.3s ease",
    opacity: message ? 1 : 0,
  };

  if (!message) return null;
  return <div style={notificationStyles}>{message}</div>;
};

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (sev, msg) => {
    setMessage(msg);
    setSeverity(sev);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};


