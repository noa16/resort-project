import React from "react";
import Navbar from "../component/navbar";
import defaultImage from "../images/defaultBcg.jpeg";
import classes from "./container.module.css";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import family from "../images/family.jpeg";
import double from "../images/double.jpeg";
import single from "../images/single.jpeg";
const Container = () => {
  return (
    <div>
      <Navbar />
      <header className={classes.header}>
        <div className={classes.banner}>
          <h1>Luxurious Rooms</h1>
          <h5 className={classes.parh}>delux Rooms starting At $299</h5>
          <button className={classes.ourRoombtn}>OUR ROOMS</button>
        </div>
      </header>
      <h1 className={classes.serviceTitle}>Service</h1>
      <section className={classes.services}>
        <article className={classes.item}>
          <FaCocktail className={classes.icons} />

          <h3>Free Coktail</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!"
          </p>
        </article>
        <article className={classes.item}>
          <FaBeer className={classes.icons} />
          <h3>Strongest Beer</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!"
          </p>
        </article>
        <article className={classes.item}>
          <FaHiking className={classes.icons} />
          <h3>Endless hiking</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!"
          </p>
        </article>
      </section>
      <section className={classes.rooms}>
        <article className={classes.room}>
          <div className={classes.imgContainer}>
            <img className={classes.image} src={family} />
            <p className={classes.subTitle}>Family Deluxe</p>
          </div>
        </article>
        <article className={classes.room}>
          <div className={classes.imgContainer}>
            <img className={classes.image} src={double} />
            <p className={classes.subTitle}>Double Deluxe</p>
          </div>
        </article>

        <article className={classes.room}>
          <div className={classes.imgContainer}>
            <img className={classes.image} src={single} />
            <p className={classes.subTitle}>Single Deluxe</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Container;
