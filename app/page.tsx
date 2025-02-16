import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";


export default function Home() {
  const EXPLst = [
    {
      title: "Yondu.Inc, Taguig City — Jr. QA Engr.",
      month: "2024 - 2025",
      jobdesc: "User Acceptance Testing (UAT Tester), Production (PROD Testing)",
      joblink: "https://www.yondu.com/"
    },
    {
      title: "Zhiyuan Enterprise Group, Taguig City —  Jr. Programmer / UI/UX - Internship",
      month: "2024",
      jobdesc: "React.js Native & Web Development - Redux",
      joblink: "https://www.facebook.com/zhiyuanenterprisegroupinc"
    },
    {
      title: "Sanford Marketing Corporation,  Taguig City — Fixed Asset Manager (SAP).",
      month: "2024",
      jobdesc: "Managing incoming goods, asset transfer, asset inventory management.",
      joblink: "https://phl.bizdirlib.com/node/187500"
    }
  ]
  const Edz = [
    {
      title: "Systems Technology Institute,  BGC — BSIT (Bachelors of Science in Information Technology).",
      month: "JUNE 2020 - JULY 2024",
      jobdesc: "Major in Cloud Computing, Data Science and Analytics, Cybersecurity, Mobile and Web Development, Software Development, User Experience (UX) Design, Information Management",
      joblink: "https://sti.edu/campuses-details.asp?campus_id=R0xP"
    },
    {
      title: "Systems Technology Institute, BGC — K12 ITMAWE (IT in Mobile App and Web Development).",
      month: "JUNE 2018 - JULY 2020",
      jobdesc: "Design program logic, Apply program development approach, Apply object-oriented program language skills, Apply programming skills in a second language, Apply web and mobile programming skills.",
      joblink: "https://sti.edu/campuses-details.asp?campus_id=R0xP"
    }
  ]
  const Projs = [
    {
      title: "MIS Department and Building Admin Group - Ticketing System — Detail",
      month: "SEPT. 2024 - NOV. 2024 - Role: UI/UX - ASP.NET Programmer",
      jobdesc: "Role: Documentation - System Design",
      joblink: "https://sti.edu/campuses-details.asp?campus_id=R0xP"
    },
    {
      title: "Attendance System (Tipas National HS) - Attendance Monitoring System",
      month: "SEPT. 2024 - NOV. 2024 - Role: UI/UX - ASP.NET Programmer",
      jobdesc: "Role: UI/UX - ASP.NET Programmer",
      joblink: "https://sti.edu/campuses-details.asp?campus_id=R0xP"
    },
  ]

  const Educations = (<>
    <div className="gap-3 px-0 grid grid-cols-1 sm:grid-cols-1">
      {Edz.map((item, index) => (<>
        <Card key={index} radius="none" className="max-w-[100%]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              <p className="text-small text-default-500">{item.month}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.jobdesc}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={`${item.joblink}`}>
              Visit Link
            </Link>
          </CardFooter>
        </Card>
      </>))}
    </div>
  </>)

  const Projects = (<>
    <div className="gap-0 grid grid-cols-1 sm:grid-cols-1">
      {Projs.map((item, index) => (<>
        <Card key={index} radius="none" className="max-w-[100%]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              <p className="text-small text-default-500">{item.month}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.jobdesc}</p>
          </CardBody>
          <Divider />
        </Card>
      </>))}
    </div>
  </>)

  const CardImage = (<Card radius="none" className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://media.licdn.com/dms/image/v2/D5603AQEhOuT__Nv5hg/profile-displayphoto-shrink_400_400/B56ZOaSixvG8Ak-/0/1733460373209?e=1744848000&v=beta&t=JZ_spQRVZMxqrnT11jakL1T3Mh3AQyPuC35bRK88u3c"
        width={270}
      />
    </CardBody>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">Age: 22</p>
      <small className="text-default-500">Birth: 08/09/2002</small>
    </CardHeader>
  </Card>);

  const list = [
    {
      title: "M.E.R.N Stack",
      price: "Advance",
    },
    {
      title: "ASP.Net",
      price: "Advance",
    },
    {
      title: "Net.Tech",
      price: "Entry Level",
    },
    {
      title: "Cloud",
      price: "Entry Level",
    },
    {
      title: "Quality Assurance",
      price: "Advance",
    },
    {
      title: "Documentation ",
      price: "Advance",
    },
    {
      title: "System Design ",
      price: "Entry Level",
    },
    {
      title: "UI/Design",
      price: "Entry Level",
    },
    {
      title: "UX/Design",
      price: "Entry Level",
    },
    {
      title: "SAP B1",
      price: "Advance",
    },
    {
      title: "Tech Support",
      price: "Advance",
    },

    {
      title: "System Implementation",
      price: "Advance",
    },
  ];

  const skills = (<div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
    {list.map((item, index) => (
      <Card style={{ cursor: "default", borderLeft: "5px solid #3b5998" }} radius="none" key={index} isPressable shadow="sm">
        <CardBody className="text-small">
          <div className="font-bold">{item.title}</div>
          <div className="text-default-500">{item.price}</div>
        </CardBody>
      </Card>
    ))}
  </div>);

  const dialecte = (<>
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <div className="flex gap-0">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "none", size: "sm",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documents
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "flat",
            radius: "none", size: "sm"
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div>
        <div>Dialect English - Tagalog</div>
      </div>
    </div>
  </>);

  const MyExp = (<>
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
      {EXPLst.map((item, index) => (<>
        <Card key={index} radius="none" className="max-w-[100%]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              <p className="text-small text-default-500">{item.month}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.jobdesc}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={`${item.joblink}`}>
              Visit Link
            </Link>
          </CardFooter>
        </Card>
      </>))}

      <div>
        <div className="py-2 font-bold">
          <h2>Projects </h2>
        </div>
        {Projects}
      </div>

    </div>
  </>)

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        {CardImage}
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>J.&nbsp;</span>
        <span className={title({ color: "violet" })}>Buatona&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Applying for: Jr. DevOps| Jr. QA Engr. | Jr. UI/UX Designer | Jr. BA | Jr. Software Developer
        </div>
      </div>

      {dialecte}

      <div>
        <div className="py-2 font-bold">
          <h2>Education</h2>
        </div>
        {Educations}
      </div>

      <div>
        <div className="py-2 font-bold">
          <h2>Key Skills</h2>
        </div>
        {skills}
      </div>

      <div>
        <div className="py-2 font-bold">
          <h2>Key Experience</h2>
        </div>
        {MyExp}
      </div>

      

      <div className="mt-8">
        <Snippet radius="none" hideCopyButton hideSymbol variant="bordered">
          <span>
            Email: <Code color="primary">joebanezair@gmail.com</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
