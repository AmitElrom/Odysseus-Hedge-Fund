import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1 className="subtitle" >אודותינו</h1>
      <div className={classes.data}>
        <p>
          מנהלי הקרן מנתחים את שווקי המניות ברחבי העולם. הקרן סוחרת רק בניירות
          ערך סחירים תוך הסתכלות לטווח הארוך. הייחודיות של הקרן היא השילוב בין
          טכנולוגיה חדשנית ואנליזות . שוק מתקדמות
        </p>
        <p>
          בשונה מקרנות מסורתיות, הפעילות של הקרן דוגלת בחשיבה מחוץ לקופסא תוך
          התמקדות בניהול סיכונים קפדני. חשיבה זו עוזרת לייצר כלים מגוונים
          המאפשרים .ללקוחותינו להגיע למטרותיהם
        </p>
      </div>
    </div>
  );
};

export default About;
