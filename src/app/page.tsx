"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart, Facebook, Handshake, Instagram, Mail, MessageSquare, Newspaper, Target, Trophy, Twitter, Users, Youtube } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Home", id: "hero"},
            {name: "Teams", id: "feature"},
            {name: "Schedule", id: "metrics"},
            {name: "Results", id: "testimonials"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Basketball Championship"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Basketball Championship 2024"
          description="Six elite teams compete for the ultimate title in this season's most exciting basketball tournament"
          tag="Tournament"
          tagIcon={Trophy}
          buttons={[
            {text: "View Schedule", href: "metrics"},
            {text: "Meet Teams", href: "feature"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639689132-s93wq7f6.jpg"
          imageAlt="Basketball championship tournament action"
          frameStyle="card"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Championship Teams"
          description="Meet the six powerhouse teams competing for the championship title"
          tag="Teams"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Thunder Hawks",
              description: "Defending champions with an impressive track record of strategic gameplay and teamwork excellence",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639690568-7enhd4ag.jpg",
              imageAlt: "Thunder Hawks team"
            },
            {
              id: "2",
              title: "Lightning Bolts",
              description: "Known for their lightning-fast offensive plays and aggressive defensive strategies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639691678-cdyvm3cd.jpg",
              imageAlt: "Lightning Bolts team"
            },
            {
              id: "3",
              title: "Storm Riders",
              description: "Rising stars with exceptional young talent and innovative coaching techniques",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639692802-smtq48nm.jpg",
              imageAlt: "Storm Riders team"
            },
            {
              id: "4",
              title: "Fire Wolves",
              description: "Veteran team with years of championship experience and proven leadership",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639693868-1jbzsvaq.jpg",
              imageAlt: "Fire Wolves team"
            },
            {
              id: "5",
              title: "Ice Eagles",
              description: "Strong defensive unit known for their disciplined gameplay and clutch performances",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639694761-jdmsen9c.jpg",
              imageAlt: "Ice Eagles team"
            },
            {
              id: "6",
              title: "Steel Panthers",
              description: "Physical powerhouse team with dominant inside presence and rebounding strength",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639695698-nnynkl64.jpg",
              imageAlt: "Steel Panthers team"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Tournament Statistics"
          description="Key performance metrics from this season's championship tournament"
          tag="Stats"
          tagIcon={BarChart}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: Trophy,
              title: "Total Games",
              value: "15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639697019-onmjdo7w.jpg",
              imageAlt: "Basketball game action"
            },
            {
              id: "2",
              icon: Target,
              title: "Average Score",
              value: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639698149-5gkvz1du.jpg",
              imageAlt: "Championship trophy celebration"
            },
            {
              id: "3",
              icon: Users,
              title: "Spectators",
              value: "25K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639699337-06c7z1l2.jpg",
              imageAlt: "Basketball arena packed with fans"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What People Are Saying"
          description="Hear from coaches, players, and fans about this incredible tournament"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Coach Johnson",
              handle: "@coach_j",
              testimonial: "This tournament showcases the best of basketball. The level of competition is extraordinary and the organization is flawless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639700375-9r7dfyfp.jpg",
              imageAlt: "Coach Johnson portrait"
            },
            {
              id: "2",
              name: "Marcus Rivera",
              handle: "@m_rivera23",
              testimonial: "Playing in this championship has been a dream come true. The atmosphere and competition level is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639701909-li2a1jnu.jpg",
              imageAlt: "Marcus Rivera player portrait"
            },
            {
              id: "3",
              name: "Sarah Wilson",
              handle: "@sara_hoops",
              testimonial: "As a longtime fan, I can say this is the most exciting tournament I've ever attended. Pure basketball excellence!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639703151-s6pc1dnv.jpg",
              imageAlt: "Sarah Wilson fan portrait"
            },
            {
              id: "4",
              name: "Ref Thompson",
              handle: "@ref_tom",
              testimonial: "Officiating these games has been an honor. The sportsmanship and skill level of all teams is remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639704305-v9qv8w2t.jpg",
              imageAlt: "Referee Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Official Tournament Sponsors"
          description="Proudly supported by leading sports brands and organizations"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639705524-k1am985j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639706621-v1ajhl25.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639707515-t823cgea.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639708738-pz5tvxlk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639709868-vz58ksqn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639710938-wl7a1szr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639712325-0tnvk69f.png"
          ]}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Tournament Information"
          sideDescription="Everything you need to know about the championship"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How are the tournament brackets organized?",
              content: "The six teams are organized in a round-robin format followed by knockout stages. Each team plays every other team once, then the top 4 advance to semifinals."
            },
            {
              id: "2",
              title: "Where can I purchase tickets?",
              content: "Tickets are available through our official website and at the arena box office. Season passes and individual game tickets are both available."
            },
            {
              id: "3",
              title: "What are the tournament dates?",
              content: "The tournament runs from March 15-30, 2024. Games are scheduled Wednesday through Sunday evenings, with the championship final on March 30."
            },
            {
              id: "4",
              title: "Are there live streaming options?",
              content: "Yes! All games are streamed live on our official website and ESPN+. Local broadcasts are also available through regional sports networks."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest Updates"
          description="Stay informed with championship news, highlights, and exclusive content"
          tag="News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              tags: ["Championship", "Highlights"],
              title: "Semi-Final Highlights: Thunder Hawks vs Lightning Bolts",
              excerpt: "An incredible overtime thriller that had fans on the edge of their seats until the final buzzer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639713630-un39v65p.png",
              imageAlt: "Championship game highlights",
              authorName: "Mike Sports",
              date: "Mar 28, 2024"
            },
            {
              id: "2",
              tags: ["Training", "Teams"],
              title: "Behind the Scenes: Team Training Regimens",
              excerpt: "Get an exclusive look at how championship teams prepare for high-stakes competition",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639714960-xmrpgfbj.jpg",
              imageAlt: "Team training session",
              authorName: "Jennifer Coach",
              date: "Mar 25, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Championship News"
          description="Subscribe to receive the latest tournament updates, game schedules, team news, and exclusive content delivered straight to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive tournament updates and can unsubscribe at any time."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763639716657-ejmqo5px.jpg"
          imageAlt="Basketball newsletter signup"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Basketball Championship"
          copyrightText="© 2024 Basketball Championship Tournament. All rights reserved."
          columns={[
            {
              title: "Tournament",
              items: [
                {label: "Schedule", href: "metrics"},
                {label: "Teams", href: "feature"},
                {label: "Results", href: "testimonials"}
              ]
            },
            {
              title: "Information",
              items: [
                {label: "FAQ", href: "faq"},
                {label: "News", href: "blog"},
                {label: "Contact", href: "contact"}
              ]
            }
          ]}
          socialLinks={[
            {icon: Twitter, href: "https://twitter.com/basketballchamp", ariaLabel: "Follow us on Twitter"},
            {icon: Instagram, href: "https://instagram.com/basketballchamp", ariaLabel: "Follow us on Instagram"},
            {icon: Facebook, href: "https://facebook.com/basketballchamp", ariaLabel: "Follow us on Facebook"},
            {icon: Youtube, href: "https://youtube.com/basketballchamp", ariaLabel: "Subscribe to our YouTube channel"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}