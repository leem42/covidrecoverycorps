import React from 'react'
import { makeStyles, Grid, Hidden, Container } from '@material-ui/core'
import { useIntroStyles } from './Intro'
import BlueSeparator from './BlueSeparator'
import LearnMore from '../widgets/LearnMore'
import { ReactComponent as Graphic } from '../../assets/faqs_graphic.svg'
import { Link } from 'react-router-dom'

type FAQProps = {
  reason?: string
}

export const useStyles = makeStyles(theme => ({
  paperHeaderDiv: {
    backgroundColor: '#FC9090',
  },
  graphicDiv: {
    textAlign: 'center',
    padding: '50px 0px 0px 30px',
  },
}))
export const FAQs: React.FunctionComponent<FAQProps> = ({}: FAQProps) => {
  const introClasses = useIntroStyles()
  const classes = useStyles()
  return (
    <div>
      <div
        className={`${classes.paperHeaderDiv} ${introClasses.paperHeaderDiv}`}
      ></div>
      <Container maxWidth="md" className={introClasses.paperPanelWrapper}>
        <div className={introClasses.paperPanel}>
          <div className={introClasses.paperPanelTitle}>
            <h1>FAQs</h1>
          </div>
          <Hidden xsDown>
            <BlueSeparator />
          </Hidden>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={8} className={introClasses.paperPanelStepContainer}>
              <div>
                <div className="FAQ__content1">
                  <LearnMore
                    learnMoreText=""
                    defaultIsShowing={true}
                    clickableElement={
                      <h3> What is the COVID Recovery Corps study? </h3>
                    }
                  >
                    <div>
                      <p>
                        COVID Recovery Corps is a research study. If you join,
                        we will gather data about you. We will ask you to fill
                        out a survey. We might invite you to send us your
                        electronic health data &mdash; this is optional. We might
                        invite you to give a blood sample, have your nose swabbed, to spit, or to pee in a cup.
                        Researchers will use this data to study how the body
                        fights COVID-19. Researchers may also use it to study
                        other diseases like high blood pressure, diabetes, and
                        lung diseases that seem connected to how the body
                        responds to COVID-19, and how people do long term.
                      </p>
                      <p>
                        Researchers will have to be approved by COVID Recovery
                        Corps study to use these data. These researchers may
                        be from anywhere in the world. They may work for
                        commercial companies, like drug companies. Their
                        research will be on COVID-19 and related viruses.
                      </p>
                    </div>
                  </LearnMore>
                </div>

                <div className="FAQ__content2">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>What is the goal of this study?</h3>
                    }
                  >
                    <div>
                      <p>
                        The goal of this study is collect data from people who 
                        have recovered from COVID-19 to learn more about how the
                        body responds to the virus and how symptoms change while
                        the body recovers.
                        Researchers also want to
                        collect information on how other diseases like high
                        blood pressure, diabetes, and lung diseases may be
                        connected to how the body responds to COVID-19.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content3">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>Who is eligible to participate?</h3>
                    }
                  >
                    <div>
                      <p>
                        You are eligible to participate in the study, if you:                            
                        <ul>
                          <li> Are over the age of 18 years old and are able to consent to participate in the study </li>
                          <li> Have access to email or are able to receive text messages </li>
                          <li> Have been diagnosed with or believe you have had COVID-19 </li>
                          <li> Read or understand English or Spanish </li>
                        </ul>

                      </p>
                    </div>
                  </LearnMore>
                </div>

                <div className="FAQ__content4">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>
                        I have never been diagnosed with coronavirus. Can I
                        participate?
                      </h3>
                    }
                  >
                    <div>
                      <p>
                        At this time we are only enrolling participants who
                        have been diagnosed with or believe they have had the
                        symptoms of COVID-19.
                      </p>
                    </div>
                  </LearnMore>
                </div>

                <div className="FAQ__content5">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>Are there any costs for me to participate?</h3>
                    }
                  >
                    <div>
                      <p>
                        There are no direct costs to taking part in the COVID
                        Recovery Corps.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content6">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>Who is running the COVID Recovery Corps study?</h3>
                    }
                  >
                    <div>
                      <p>
                        The COVID Recovery Corps study is being led by
                        Columbia University and Sage Bionetworks in
                        collaboration with the Chan Zuckerberg Initiative.
                        The <Link to='/team'>Principal Investigators</Link> on
                        this study are Dr. Wendy
                        Chung at Columbia University and Dr. Lara Mangravite
                        at Sage Bionetworks. This study is funded by the Chan
                        Zuckerberg Initiative.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content7">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>Who else will have access to my study data?</h3>
                    }
                  >
                    <div>
                      <p>
                        We will create a scientific database and a biobank for
                        the COVID Recovery Corps study. The scientific database will have 
                        individual-level data, and the biobank will store samples like your blood and pee.
                      </p>
                      <p>
                        Access to this database will be controlled.
                        Researchers will have to be approved by COVID Recovery
                        Corps and will use only de-identified data.
                      </p>
                      <p>
                        The U.S. federal government and state governments might demand access to
                        the data so they can use it for public health
                        activity. This includes law enforcement. We might have
                        to give it to them if they ask, even though we have a
                        Certificate of Confidentiality from the U.S. government.
                      </p>
                      <p>
                        We may offer you the chance to donate your data to
                        other databases or researchers. You will get to decide
                        if you want to share your data beyond this study.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content8">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={<h3>How is my privacy protected?</h3>}
                  >
                    <div>
                      <p>
                        We are committed to protecting your privacy. Except as
                        required by law, you will not be identified by your
                        name or by any other direct personal identifier. Your
                        contact information, including your name and e-mail
                        address, will be stored separately from the study data.
                        We will use a random code number instead of your name
                        on all your study data. This code cannot be used to
                        directly re-identify you. Information about the code
                        will be kept in a secure system. Only the study staff
                        and some IT staff will have the key to associate your
                        coded study data to your name and account information.
                        Your coded study data (without your name) will be
                        encrypted and stored on a secure cloud server to
                        prevent improper access. Sage, Columbia University, or
                        anyone else affiliated with the COVID Recovery Corps
                        will never sell, rent, or lease your contact
                        information.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content9">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>
                        Will participating in this study affect my insurance
                        or medical services?
                      </h3>
                    }
                  >
                    <div>
                      <p>
                        The COVID Recovery Corps is an observational study and
                        not a clinical trial. We will not be asking you to
                        change what you do or take a specific medication. This
                        study will not affect your medical insurance or
                        healthcare.
                      </p>
                    </div>
                  </LearnMore>
                </div>
                <div className="FAQ__content10">
                  <LearnMore
                    learnMoreText=""
                    clickableElement={
                      <h3>
                        I have a question that isn't answered in this FAQ. Who
                        do I contact?
                      </h3>
                    }
                  >
                    <div>
                      <p>
                        If you have any questions or need assistance, you can
                        call 212-305-5700 or email{' '}
                        <a href="mailto:COVIDRecoveryCorps@cumc.columbia.edu">
                          COVIDRecoveryCorps@cumc.columbia.edu
                        </a>
                        .
                      </p>
                    </div>
                  </LearnMore>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Hidden smDown>
                <div className={classes.graphicDiv}>
                  <Graphic />
                </div>
              </Hidden>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default FAQs
