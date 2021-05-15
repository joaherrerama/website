import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Android, Assessment, Autorenew, BarChart, Book, Cloud, Code, Computer, LibraryBooks, Person, TouchApp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
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
                      <span></span>
                    )
                  },
                  {
                    tabButton: "Frameworks",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                      </span>
                    )
                  },
                  {
                    tabButton: "Programming Lenguages",
                    tabIcon: Code,
                    tabContent: (
                      <span>
                      </span>
                    )
                  },
                  {
                    tabButton: "DevOps and DB",
                    tabIcon: Autorenew,
                    tabContent: (
                      <span>
                      </span>
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
                      <span>
                      </span>
                    )
                  },
                  {
                    tabButton: "Libraries",
                    tabIcon: LibraryBooks,
                    tabContent: (
                      <span>
                      </span>
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
                      <span>
                      </span>
                    )
                  },
                  {
                    tabButton: "Cloud-Based Technologies",
                    tabIcon: TouchApp,
                    tabContent: (
                      <span>
                      </span>
                    )
                  },
                ]}
              />
          </GridItem>
      </GridContainer>
    </div>
  );
}
