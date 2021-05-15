import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Public from "@material-ui/icons/Public";
import School from "@material-ui/icons/School";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// Sections for this page
import SkillSection from "./Sections/Skill.js";
import profile from "assets/img/faces/Jorge.jpeg";
import studio1 from "assets/img/examples/1.jpg";
import studio2 from "assets/img/examples/2.jpg";
import studio3 from "assets/img/examples/3.jpg";
import studio4 from "assets/img/examples/4.jpg";
import studio5 from "assets/img/examples/5.jpg";
import work1 from "assets/img/examples/6.jpg";
import work2 from "assets/img/examples/7.jpg";
import work3 from "assets/img/examples/8.jpg";
import work4 from "assets/img/examples/9.jpg";
import work5 from "assets/img/examples/9.jpg";
import study1 from "assets/img/examples/10.jpg";
import study2 from "assets/img/examples/11.jpg";
import study3 from "assets/img/examples/12.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jorge A. Herrera M.</h3>
                    <h6>Geospatial Software Developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div justify="left" className={classes.description}>
              <p>
              I help International Enterprises in the Geospatial field by implementing and optimizing their geospatial solutions focused on software engineering.

              It remains challenging for companies to cover the void existing in how geospatial data communication or visualization systems are delivered to the public.

              What I do is to converge the GIS and Software Engineering by:
              </p>
              <p>✔ Understand the management of Geographical Information or Geodata.</p>
              <p>✔ Come up with sophisticated software engineering.</p>
            </div>
            <GridContainer justify="center">
            <h3 className={classes.title}>Some projects I have been involved:</h3>
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Development",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "GIS Analysis",
                      tabIcon: Public,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Academia",
                      tabIcon: School,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={study2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={study3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <SkillSection/>
      </div>
      <Footer />
    </div>
  );
}
