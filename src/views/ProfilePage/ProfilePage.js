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
import CustomTabs from "components/CustomTabs/CustomTabs.js";

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
import {Description, Photo, Chat} from "@material-ui/icons";
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
          height: 300,
          color: "info"
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
                    <Button
                      href="https://drive.google.com/file/d/1o18ixi7pNZcIRInFdmDTR3bsvmjvW45t/view?usp=sharing"
                      color="info"
                      target="_blank"
                      className={classes.navLink}
                      download
                    >
                      <Description className={classes.icons} /> CV/Resume
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
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={studio1}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Find this project at <a><b>http://app.forliance.com</b></a> 
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={studio2}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      please fin this project at <a><b>http://ideamco.com</b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={studio5}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      This is a private project where the technologies convey to create an enviroment for water managment and supplying.
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={studio3}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={studio4}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://www.naxsolutions.com/</b></a>
                                    </p>
                                  )
                                }
                              ]}
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
                          <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={work1}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://fcds.org.co/</b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={work2}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://fcds.org.co/</b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={work3}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b></b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={work4}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://forliance.com/</b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                    alt="..."
                                    src={work5}
                                    className={navImageClasses}
                                  />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://forliance.com/</b></a>
                                    </p>
                                  )
                                }
                              ]}
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
                          <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={study1}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b>https://github.com/joaherrerama/Tc-and-Lag-Time-QGIS-Plugin</b></a>
                                    </p>
                                  )
                                }
                              ]}
                            />  
                            <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={study2}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      The investigation was carried out with very high-resolution images at 2.6 centimetres of spatial resolution, which allowed to map the existing potholes within the study area automatically, decreasing the detection and verification times of the roadway that runs a worker specialized in field, these yields of the process are possible considering the quality of the captured images.
                                      <p className={classes.textCenter}>                                      
                                        <b>
                                          Please find more information at <a><b>https://repository.udistrital.edu.co/handle/11349/25799</b></a>
                                        </b>
                                      </p>
                                    </p>
                                  )
                                }
                              ]}
                            />  
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <CustomTabs
                              headerColor="info"
                              tabs={[
                                {
                                  tabName: "Resume",
                                  tabIcon: Photo,
                                  tabContent: (
                                    <img
                                      alt="..."
                                      src={study3}
                                      className={navImageClasses}
                                    />
                                  )
                                },
                                {
                                  tabName: "Description",
                                  tabIcon: Chat,
                                  tabContent: (
                                    <p className={classes.textCenter}>
                                      Please find more information at <a><b></b></a>
                                    </p>
                                  )
                                }
                              ]}
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
