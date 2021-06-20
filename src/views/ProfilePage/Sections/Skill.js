import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import NavPills from "components/NavPills/NavPills.js";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import aws from "assets/tech/aws.png"
import gcp from "assets/tech/gcp.png"

import framework from "assets/tech/framework.png"
import prog from "assets/tech/programming.png"
import devops from "assets/tech/devops.png"

import progis from "assets/tech/progis.png"
import lib from "assets/tech/lib.png"

import desktop from "assets/tech/desktop.png"
import cloudbased from "assets/tech/cloudbased.png"


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Android, Assessment, Autorenew, BarChart, Book, Cloud, Code, Computer, LibraryBooks, Person, TouchApp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>My Skills</h2>
          <h5 className={classes.description}>
          During my career I have worked in different areas. I have worked as a GIS Analyst in the generation, automation and implementation of scripts for the management of geographic data in the environmental field, mainly in the detection of deforestation or land use changes.  
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={8}>
          <h2 className={classes.title}>Software Dev</h2>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Cloud",
                    tabIcon: Cloud,
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={2} md={6} className={classes.marginLeft}>
                        <img
                            alt="..."
                            src={aws}
                            height="100px"
                            className={
                              classes.imgRaised +
                              " " +
                              classes.imgRounded +
                              " " +
                              classes.imgFluid
                            }
                        />
                        </GridItem>
                        <GridItem xs={12} sm={2} md={6} className={classes.marginLeft}>
                        <img
                            alt="..."
                            src={gcp}
                            height="100px"
                            className={
                              classes.imgRaised +
                              " " +
                              classes.imgRounded +
                              " " +
                              classes.imgFluid
                            }
                        />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Frameworks",
                    tabIcon: Dashboard,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={framework}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Programming Lenguages",
                    tabIcon: Code,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={prog}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "DevOps and DB",
                    tabIcon: Autorenew,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={devops}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
          </GridItem>
      </GridContainer>
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={8}>
          <h2 className={classes.title}>Data Analysis Tools</h2>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Programming Lenguages",
                    tabIcon: Code,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={progis}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Libraries",
                    tabIcon: LibraryBooks,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={lib}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                ]}
              />
          </GridItem>
      </GridContainer>
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={8}>
          <h2 className={classes.title}>GIS Applications</h2>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Desktop Softwares",
                    tabIcon: Computer,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={desktop}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Cloud-Based Technologies",
                    tabIcon: TouchApp,
                    tabContent: (
                      <GridContainer>
                      <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                      <img
                          alt="..."
                          src={cloudbased}
                          height="400px"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                      />
                      </GridItem>
                      </GridContainer>
                    )
                  },
                ]}
              />
          </GridItem>
      </GridContainer>
    </div>
  );
}
