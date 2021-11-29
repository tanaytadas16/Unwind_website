import { useState } from "react";
import _ from "underscore";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yoga" element={<YogaPage />} />
          <Route path="/dance" element={<DancePage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/relaxation" element={<RelaxationPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/yoga">Yoga</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/dance">Dance</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/tracking">Tracking</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/relaxation">Relaxation</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/meditation">Meditation</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/help">Help</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const HomePage = () => {
  return (
    <Container>
      <Header
        title={"Mental Health"}
        content={"Peaceful mind leads to new openings!"}
        link={"https://www.mentalhealth.gov/"}
      />
      <div>
        <Typography component="p" variant="subtitle1">
          The WHO stress that mental health is “more than just the absence of
          mental disorders or disabilities.” Peak mental health is about not
          only avoiding active conditions but also looking after ongoing
          wellness and happiness.
        </Typography>
        <br />
        They also emphasize that preserving and restoring mental health is
        crucial on an individual basis, as well as throughout different
        communities and societies the world over.
        <br />
        In the United States, the National Alliance on Mental Illness estimate
        that almost 1 in 5 adults experience mental health problems each year.
        <br />
        In 2017, an estimated 11.2 million adultsTrusted Source in the U.S., or
        about 4.5% of adults, had a severe psychological condition, according to
        the National Institute of Mental Health (NIMH).
        <br />
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> What is mental
          health
        </h2>
        Mental health includes our emotional, psychological, and social
        well-being. It affects how we think, feel, and act. It also helps
        determine how we handle stress, relate to others, and make healthy
        choices.1 Mental health is important at every stage of life, from
        childhood and adolescence through adulthood. Although the terms are
        often used interchangeably, poor mental health and mental illness are
        not the same. A person can experience poor mental health and not be
        diagnosed with a mental illness. Likewise, a person diagnosed with a
        mental illness can experience periods of physical, mental, and social
        well-being.
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Why is mental health
          important for overall health
        </h2>
        Mental and physical health are equally important components of overall
        health. For example, depression increases the risk for many types of
        physical health problems, particularly long-lasting conditions like
        diabetes, heart disease, and stroke. Similarly, the presence of chronic
        conditions can increase the risk for mental illness.
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Can your mental
          health change over time
        </h2>
        Yes, it’s important to remember that a person’s mental health can change
        over time, depending on many factors. When the demands placed on a
        person exceed their resources and coping abilities, their mental health
        could be impacted. For example, if someone is working long hours, caring
        for a relative, or experiencing economic hardship, they may experience
        poor mental health.
      </div>
    </Container>
  );
};

const Header = (props) => {
  return (
    <div className="jumbotron text-center">
      <Typography component="h1" variant="h3">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </Typography>
      <Typography component="p" variant="h5">
        {props.content}
      </Typography>
    </div>
  );
};

const YogaPage = () => {
  return (
    <Container>
      <Header
        title={"Yoga"}
        content={"Peaceful mind leads to new openings!"}
        link={"https://www.nytimes.com/guides/well/beginner-yoga"}
      />

      <div>
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Mental benefits
        </h2>
        Aside from the physical benefits, one of the best benefits of yoga is
        how it helps a person manage stress, which is known to have devastating
        effects on the body and mind. “Stress can reveal itself in many ways,
        including back or neck pain, sleeping problems, headaches, drug abuse,
        and an inability to concentrate,” says Dr. Nevins. “Yoga can be very
        effective in developing coping skills and reaching a more positive
        outlook on life.”
        <br />
        <br />
        Yoga’s incorporation of meditation and breathing can help improve a
        person’s mental well-being. “Regular yoga practice creates mental
        clarity and calmness; increases body awareness; relieves chronic stress
        patterns; relaxes the mind; centers attention; and sharpens
        concentration,” says Dr. Nevins. Body- and self-awareness are
        particularly beneficial, she adds, “because they can help with early
        detection of physical problems and allow for early preventive action.”
        <br />
        <br />
        Like yoga, the osteopathic approach to wellness focuses on your body’s
        natural tendency toward health and self-healing.
        <br />
        <br />
        “The purpose of yoga is to build strength, awareness and harmony in both
        the mind and body,” explains Natalie Nevins, DO, a board-certified
        osteopathic family physician and certified Kundalini Yoga instructor in
        Hollywood, California.
        <br />
        <br />
        While there are more than 100 different types, or schools, of yoga, most
        sessions typically include breathing exercises, meditation, and assuming
        postures (sometimes called asana or poses) that stretch and flex various
        muscle groups.
        <br />
        <br />
        “As an osteopathic physician, I focus a lot of my efforts on preventive
        medicine and practices, and in the body’s ability to heal itself,” says
        Dr. Nevins. “Yoga is a great tool for staying healthy because it’s based
        on similar principles.”
        <br />
        <br />
        Doctors of Osteopathic Medicine​, or DOs, focus on prevention by
        examining how your lifestyle and environment impact your health, rather
        than just treating your symptoms.
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Physical benefits
        </h2>
        “The relaxation techniques incorporated in yoga can lessen chronic pain,
        such as lower back pain, arthritis, headaches and carpal tunnel
        syndrome,” explains Dr. Nevins. “Yoga can also lower blood pressure and
        reduce insomnia.”
        <br />
        <br />
        Other physical benefits of yoga include:
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Increased flexibility
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Increased muscle
        strength and tone
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Improved respiration,
        energy and vitality
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Maintaining a balanced
        metabolism
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Weight reduction
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Cardio and circulatory
        health
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Improved athletic
        performance
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>&#9758;</span> Protection from injury
        <br />
        <br />
      </div>
    </Container>
  );
};

const DancePage = () => {
  return (
    <Container>
      <Header
        title={"Dance"}
        content={
          "Dancing can be a way to stay fit for people of all ages, shapes and sizes."
        }
        link={
          "https://www.betterhealth.vic.gov.au/health/healthyliving/dance-health-benefits"
        }
      />

      <div>
        <h2>
          <span style={{ fontSize: "30px" }}></span> Dance benefits
        </h2>
        We know that dance have many benificial outcomes. You can dance as part
        of a group, with a partner, or alone. Dance can be enjoyed in a variety
        of settings, including dance schools, social venues, community halls,
        and even your own house. Dancing has become such a popular way to stay
        active and fit that most gyms now include dance lessons as part of their
        group training programs. Dancing can be done in a competitive or social
        setting. Anyone of any age can participate, making it a terrific leisure
        and sporting option. It doesn't matter if it's freezing or pouring
        outside because most dancing is done indoors.
        <h2>Benifits of dance</h2>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SA5K6tR7PLU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        Individuals nowadays enjoy seeing other people dance. So You Think You
        Can Dance and Dancing With the Stars are two of the most popular reality
        dance series on television. What you may not realize is that getting off
        the sofa and dancing is a terrific way to maintain your body and mind in
        good shape. Dancing has been shown in studies to help people lose
        weight, keep flexible, reduce stress, make friends, and much more.
        <br />
        So, what exactly are you waiting for? Begin receiving the numerous
        health advantages of dancing right now.
        <br />
        <br />
        <h4>
          Dance can help in Maintaining a{" "}
          <a href="https://www.everydayhealth.com/osteoporosis/good-posture-for-people-with-osteoporosis.aspx">
            GOOD POSTURE
          </a>
        </h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UyM8319CzKs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        Why worry in the old age when you can maintain a good posture from now?
        Many researchers have stated that Dancing can help in maintaing good
        posture.
        <br />
        <br />
        Beautiful posture not only looks good, but it also feels good, as you
        dancers along. Though good body alignment takes a lot of practice, most
        people find slouching uncomfortable once they've mastered it.
        <br />
        <br />
        So to when you have a good body posture you will be able to do acive
        some of the things listed below:
        <br />
        <ol>
          <li>You tend to apprear tall and confident with the chin up.</li>
          <ul>
            <li>
              When your spine is aligned and fully stretched, your shoulders are
              drawn back, and your head is held high, you appear to be capable
              of taking on the world. As a result, dancers will stand tall to
              portray heroes, emperors, or celestial beings, and bend down to
              indicate melancholy or wickedness.
            </li>
          </ul>
          <li>
            You will lose more muscles in order to maintain a good posture
          </li>
          <ul>
            <li>
              Standing or sitting, excellent posture necessitates the use of a
              variety of muscles. To maintain your torso upright, your core
              tightens. The muscles in your back keep your shoulders down and
              your chest open. To keep the line of your body straight, your
              lower body muscular groups are also engaged.
            </li>
          </ul>
          <li>
            Dancing increases the intake of oxygen. resulting deeper breaths
          </li>
          <ul>
            <li>
              Your ribcage sinks and your shoulders round when you slouch,
              closing the area your lungs need to expand. Try hunching down and
              inhaling deeply. Now stand up straight and do it again—much more
              refreshing, right?
              <br />
              Bonus: Deeper breathing increases blood flow and oxygen levels in
              your system, giving you an energy boost.
            </li>
          </ul>
          <li>
            You'll have better digestion and a healthier spine as a result of
            dancing
          </li>
          <ul>
            <li>
              Consider how your ribs are squeezing your important organs. Isn't
              it terrifying? When you slouch, though, this is exactly what
              happens. Standing upright aligns all of your organs, allowing your
              digestive system plenty of room to work.
              <br />
              Your spine is naturally curved to keep you balanced and allow you
              to move freely. Keeping those curves in the appropriate areas
              (rather than rounding or over-arching them) will reduce neck and
              back pain, relieve unneeded pressure on your joints, and allow you
              to bend, dance, and move freely!
            </li>
          </ul>
          <li>Dancing gives a better state of mind to process</li>
        </ol>
        <br />
        <h4>
          Dance can help in{" "}
          <a href="https://www.healthline.com/health/fitness-exercise/aerobic-exercise-examplesLOOSING">
            REDUCING FAT{" "}
          </a>
        </h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PvEnWsPrL4w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <br />
        When we talk about aerobics dance, we're talking about ballet, jazz,
        Zumba, and a whole lot more. Because they are slower paced than other
        aerobic workouts, they are referred to as low impact workouts. As a
        result, they are excellent choices for pregnant women, obese people, and
        the elderly.
        <br />
        <br />
        According to Dr. Sanchez, the health benefits of aerobic exercise extend
        beyond your heart: "Physical activity can help manage body weight, lower
        blood pressure, lower 'bad' LDL cholesterol, enhance blood sugar
        control, reduce stress, and improve sleep and memory."
        <br />
        <br />
        So to list out few benifits of dance Aerobics are:
        <ol>
          <li>Advantages of Mental Health</li>
          <ul>
            <li>
              Getting up and moving improves your mood. When compared to
              nonexercisers, exercisers had roughly 1.5 days fewer of poor
              mental health, according to a study published in The Lancet
              Psychiatry in September 2018. arrow pointing up While all forms of
              exercise increased mood, team sports, cycling, going to the gym,
              and aerobic workouts had the most advantages. According to the
              Anxiety and Depression Association of America, aerobic exercise
              has been demonstrated to lessen the risk of anxiety and depression
              in adults, as well as helping people manage stress through sleep
              and mood-regulating advantages (ADAA).
            </li>
          </ul>
          <li>Advantages of Losing Weight</li>
          <ul>
            <li>
              Aerobic exercise burns calories, which, when combined with a good
              diet, can help you lose weight, according to Jonesco. Aerobic
              exercise also improves posture and tones muscles.
            </li>
          </ul>
          <li>Advantages of Exercise </li>
          <ul>
            <li>
              Aerobic exercise provides you greater energy to work out over
              time. Aerobic exercise can improve your stamina by enhancing your
              body's ability to take in and use oxygen for fuel, giving you more
              energy for work and pleasure, according to Jonesco.
            </li>
          </ul>
          <li>Benefits for Bones and Joints </li>
          <ul>
            <li>
              Running or jumping rope at a moderate or strong intensity can help
              enhance bone density in older people and those with osteoarthritis
              or other rheumatic disorders, according to the US Department of
              Health and Human Services (HHS). arrow pointing up.
            </li>
          </ul>
          <li>Advantages of a Healthy Brain </li>
          <ul>
            <li>
              Physical activity has also been linked to a lower incidence of
              dementia and may help you remember things better as you get older.
            </li>
          </ul>
        </ol>
        <br />
        <h4>
          Dance can help in{" "}
          <a href="https://www.morethandancers.com/posts/this-is-how-dancing-helps-your-brain">
            BOOSTING MEMORY{" "}
          </a>
        </h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SZpGPgbpgLQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        Dancing is not only enjoyable, but also beneficial to one's health. Even
        better, studies have shown that it's a terrific method to keep your mind
        in shape. Dance necessitates the development of mental, physical,
        emotional, and social abilities. Working together, all of these
        processes can be advantageous to your brain and overall health.
        <br />
        Many studies demonstrate that dance can increase cognitive performance
        and even reduce the aging process because it is a multi-tasking
        exercise. What's the bottom line? Dancing is a great way to exercise
        both your body and your mind!
        <br />
        <br />
        Dance can benifit in many ways beacuse of the following things:
        <br />
        <ul>
          <li>Keeping track of dance moves</li>
          <li>Holding your partner in a proper manner</li>
          <li>Executing maneuvers</li>
          <li>Recognizing a rhythm</li>
          <li>
            Moving in a group or simply "feeling" the beat of the music and
            moving on your own
          </li>
          <li>Using music to synchronize movement</li>
        </ul>
        <br />
        All of the tasks listed above are referred to as "sensorimotor demands"
        in clinical terms. They have to do with body activity or movement that
        is prompted by both sensory and motor impulses.
        <br />
        The favorable effects of dancing on aging and health are still being
        researched. We should be dancing as much as possible, according to all
        signs. Sway to the music, waltz, tango, foxtrot, or simply twist and
        holler. Everything is in order. Do you dislike dancing? Consider it a
        pleasant method to stay healthy and strong while also improving your
        brainpower.
        <br />
        <br />
        <h4>
          Dance can help in{" "}
          <a href="https://www.healthline.com/health/fitness-exercise/how-to-be-more-flexible#build-your-routine">
            IMPROVING FLEXIBILITY{" "}
          </a>
        </h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oxb516Ptfzw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        Tuttle suggests, "Everyone should stretch before and after every
        workout." The following are some of the advantages of flexibility,
        according to him:
        <br />
        <ul>
          <li>It expands the range of motion of your muscles and joints.</li>
          <li>
            It may reduce the risk of injury by lengthening the tendons and
            ligaments that will be used during activity.
          </li>
          <li>
            It will increase the potential space in which your muscles can
            perform, which will boost their supply of blood and nutrients while
            also assisting them in the removal of waste products like lactic
            acid.
          </li>
          <li>
            Better posture and balance go hand in hand with increased
            flexibility.
          </li>
        </ul>
        <br />
        <h4>Dance can help in MAKING NEW FRIENDS</h4>
        <br />A dance class is an excellent place to meet new people and expand
        your social circle. Positive connections may be on par with healthy food
        and exercise in terms of importance. Increased pleasure, lower stress,
        and a better immune system are all benefits of being socially involved.
        <br />
        <br />
        <h3>
          The mental benefits of dancing vary according to the style of dance
          you learn. Ballroom dancing, for example, necessitates a great deal of
          improvisation. These help you make better decisions than entirely
          memorized movements and routines. Interpretive modern dance genres, on
          the other hand, provide additional opportunities for innovation.
        </h3>
      </div>
    </Container>
  );
};

const RelaxationPage = () => {
  return (
    <Container>
      <Header
        title={"Music"}
        content={
          "Music helps reduce anxiety as well as helps mind and body to cope with stress."
        }
        link={
          "https://www.health.harvard.edu/newsletter_article/music-and-health"
        }
      />
      <div>
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Mental benefits of
          Music
        </h2>
        Music can have a profound effect on both the emotions and the body.
        Faster music can make you feel more alert and concentrate better. Upbeat
        music can make you feel more optimistic and positive about life. A
        slower tempo can quiet your mind and relax your muscles, making you feel
        soothed while releasing the stress of the day. Music is effective for
        relaxation and stress management.
        <br />
        <br />
        <h3>Music to calm your mind</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lFcSrYw-ARY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hg-dJOSSAfc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FK_dVfxA19k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FjHGZj2IjBk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Music to help you work</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_4kHxtiuML0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZVb_yKMivqo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vDYP6AKw8bk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2TvWZEVf6go"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Music of the nature</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3EhnDyriMqM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nd7e4SNjGBM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WZKW2Hq2fks"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AdzqdAQDqgI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

const MeditationPage = () => {
  return (
    <Container>
      <Header
        title={"Meditation"}
        content={
          "Meditation is like a gym in which you develop the powerful mental muscles of calm and insight."
        }
        link={
          "https://www.health.harvard.edu/staying-healthy/what-meditation-can-do-for-your-mind-mood-and-health-"
        }
      />
      <div>
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Mental benefits of
          Meditation
        </h2>
        Meditation is considered a type of mind-body complementary medicine.
        Meditation can produce a deep state of relaxation and a tranquil
        mind.During meditation, you focus your attention and eliminate the
        stream of jumbled thoughts that may be crowding your mind and causing
        stress. This process may result in enhanced physical and emotional
        well-being.Meditation can give you a sense of calm, peace and balance
        that can benefit both your emotional well-being and your overall
        health.And these benefits don't end when your meditation session ends.
        Meditation can help carry you more calmly through your day and may help
        you manage symptoms of certain medical conditions.
        <br />
        <br />
        <h3>Quick guided meditation</h3>
        Guided meditation is a state of relaxed concentration invoked and led by
        another party. It can be a yoga instructor, a religious guide, a CD or
        even a recording of yourself playing back to you. The guide will
        instruct you to relax specific muscles in the body until they are
        comfortable, and will then lead you through mental images and
        visualizations, often of healing light or the dissipation of past
        wrongs. Guided meditation can be as short as a few minutes or as long as
        several hours. Either way, the purpose is to achieve mental, emotional
        and physical healing and stress relief.
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CVW_IE1nsKE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WUASVHlfXeI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/inpok4MKVLM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8Xdwr4cRTVA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Guided breathing exercises</h3>
        Deep breathing is one of the best ways to lower stress in the body. This
        is because when you breathe deeply, it sends a message to your brain to
        calm down and relax. The brain then sends this message to your body.
        Those things that happen when you are stressed, such as increased heart
        rate, fast breathing, and high blood pressure, all decrease as you
        breathe deeply to relax.
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tEmt1Znux58"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SEfs5TJZ6Nk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8vkYJf8DOsc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DLkoZtiXeqQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Music of the nature</h3>
        “Just feel the magic in the air and the power in the breeze, feel the
        energy of the plants, the bushes and trees, let yourself be surrounded
        by nature at its best, calm yourself, focus and let magic do the rest.”
        – Sally Walker
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ausxoXBrmWs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vBO8QEjANjs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CTS6E_0oAJg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CcqZ47d398k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

const HelpPage = () => {
  return (
    <Container>
      <Header
        title={"Help"}
        content={
          "Call 911 if you or someone you know is in immediate danger or go to the nearest emergency room."
        }
        link={"https://www.mentalhealth.gov/get-help"}
      />

      <div>
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Helpline Contacts
        </h2>
        National Suicide Prevention Lifeline Call 1-800-273-TALK (8255); En
        español 1-888-628-9454 Use Lifeline Chat on the web The Lifeline is a
        free, confidential crisis service that is available to everyone 24 hours
        a day, seven days a week. The Lifeline connects people to the nearest
        crisis center in the Lifeline national network. These centers provide
        crisis counseling and mental health referrals.
        <br />
        <br />
        Crisis Text Line Text “HELLO” to 741741 The Crisis Text hotline is
        available 24 hours a day, seven days a week throughout the U.S. The
        Crisis Text Line serves anyone, in any type of crisis, connecting them
        with a crisis counselor who can provide support and information.
        <br />
        <br />
        Veterans Crisis Line Call 1-800-273-TALK (8255) and press 1 or text to
        838255 Use Veterans Crisis Chat on the web The Veterans Crisis Line is a
        free, confidential resource that connects veterans 24 hours a day, seven
        days a week with a trained responder. The service is available to all
        veterans, even if they are not registered with the VA or enrolled in VA
        healthcare.
        <br />
        <br />
        Disaster Distress Helpline Call or text 1-800-985-5990 The disaster
        distress helpline provides immediate crisis counseling for people who
        are experiencing emotional distress related to any natural or
        human-caused disaster. The helpline is free, multilingual, confidential,
        and available 24 hours a day, seven days a week.
        <br />
        <br />
        Contact social media outlets directly if you are concerned about a
        friend’s social media updates or dial 911 in an emergency.
        <br />
        <br />
        <h2>
          <span style={{ fontSize: "30px" }}>&#9734;</span> Find a Health Care
          Provider or Treatment
        </h2>
        Treatment for mental illnesses usually consists of therapy, medication,
        or a combination of the two. Treatment can be given in person or through
        a phone or computer (telemental health). It can sometimes be difficult
        to know where to start when looking for mental health care, but there
        are many ways to find a provider who will meet your needs.
        <br />
        <br />
        <h4>Primary Care Provider</h4> Your primary care practitioner can be an
        important resource, providing initial mental health screenings and
        referrals to mental health specialists. If you have an appointment with
        your primary care provider, consider bringing up your mental health
        concerns and asking for help.
        <br />
        <br />
        <h4>Federal Resources</h4> Some federal agencies offer resources for
        identifying health care providers and help in finding low-cost health
        services. These include:
        <br />
        <br />
        <h4>
          Substance Abuse and Mental Health Services Administration (SAMHSA)
        </h4>{" "}
        For general information on mental health and to locate treatment
        services in your area, call the SAMHSA Treatment Referral Helpline at
        1-800-662-HELP (4357). SAMHSA also has a Behavioral Health Treatment
        Locator on its website that can be searched by location.
        <br />
        <br />
        <h4>Health Resources and Services Administration (HRSA)</h4> HRSA works
        to improve access to health care. The HRSA website has information on
        finding affordable healthcare, including health centers that offer care
        on a sliding fee scale.
        <br />
        <br />
        <h4>Centers for Medicare & Medicaid Services (CMS)</h4> CMS has
        information on its website about benefits and eligibility for mental
        health programs and how to enroll.
        <br />
        <br />
        <h4>The National Library of Medicine (NLM) MedlinePlus</h4> NLM’s
        website has directories and lists of organizations that can help in
        identifying a health practitioner.
        <br />
        <br />
        <h4>
          National Agencies and Advocacy and Professional Organizations
        </h4>{" "}
        Advocacy and professional organizations can be a good source of
        information when looking for a mental health provider. They often have
        information on finding a mental health professional on their website,
        and some have practitioner locators on their websites. Examples include
        but are not limited to:
        <br />
        <br />
        Anxiety and Depression Association of America
        <br />
        <br />
        Depression and Bipolar Support Alliance
        <br />
        <br />
        Mental Health America
        <br />
        <br />
        National Alliance on Mental Illness
        <br />
        <br />
        <h4>State and County Agencies</h4> The website of your state or county
        government may have information about health services in your area. You
        may be able to find this information by visiting their websites and
        searching for the health services department.
        <br />
        <br />
        <h4>Insurance Companies</h4> If you have health insurance, a
        representative of your insurance company will know which local providers
        are covered by your insurance plan. The websites of many health
        insurance companies have searchable databases that allow you to find a
        participating practitioner in your area.
        <br />
        <br />
        <h4>University, College, or Medical Schools</h4> Your local college,
        university, or medical school may offer treatment options. To find
        these, try searching on the website of local university health centers
        for their psychiatry, psychology, counseling, or social work
        departments.
        <br />
        <br />
        <h4>Help for Service Members and Their Families</h4> Current and former
        service members may face different mental health issues than the general
        public. For resources for both service members and veterans, please
        visit the MentalHealth.gov page Help for Service Members and Their
        Families page or the U.S. Department of Veteran Affairs’ mental health
        page.
        <br />
        <br />
      </div>
    </Container>
  );
};

const TrackingPage = () => {
  const [data, setData] = useState({});

  const addData = (activity, days) => {
    data[activity] = days;

    setData({ ...data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (_.isEmpty(data)) {
      alert("Enter atleast one task!");
    } else {
      const response = await axios.post("http://localhost:4000/tracking", data);

      console.log(response.data);
    }
  };

  return (
    <Container>
      <Header
        title={"Tracking"}
        content={
          "Keep a daily track of all the new habits you want to integrate in your daily routine for the entire month."
        }
      />

      <form onSubmit={handleSubmit}>
        {[...Array(10).keys()].map((key) => (
          <Tracker
            key={key}
            addData={addData}
            id={`activity${key}`}
            name={`activity${key}`}
          />
        ))}

        <Button
          type="submit"
          value="Submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

const Tracker = ({ id, name, addData }) => {
  const [activity, setActivity] = useState("");
  const [activityDays, setActivityDays] = useState([]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleAddDay = (day) => {
    if (activity === "") {
      alert("Enter activity name first");
    } else {
      if (activityDays.includes(day)) {
        const copy = activityDays.filter((item) => item !== day);
        setActivityDays([...copy]);

        addData(activity, [...copy]);
      } else {
        const copy = [...activityDays, day];
        setActivityDays([...copy]);

        addData(activity, [...copy]);
      }
    }
  };

  return (
    <Stack gap={3} marginY={4}>
      <TextField
        id={id}
        name={name}
        placeholder="Enter activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <Grid container>
        {days.map((day) => (
          <Grid item key={day} xs={1}>
            <Button
              variant={activityDays.includes(day) ? "contained" : "text"}
              color={activityDays.includes(day) ? "success" : "primary"}
              onClick={() => handleAddDay(day)}
            >
              {day}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default App;
