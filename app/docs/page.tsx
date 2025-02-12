"use client";
import { title } from "@/components/primitives";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { useRouter } from "next/navigation";

export default function DocsPage() {
  const router = useRouter();

  const list = [
    {
      title: "Profile Sample - 01",
      href: "https://joebanezair-buatona.netlify.app/",
      price: "",
    },
    {
      title: "Thesis - Document",
      href: "https://drive.google.com/file/d/1Kj-3TPp8z_0hjr5uZRfcdqzyN5aW8H3P/view",
      price: "",
    },
    {
      title: "Unfinished App Sample",
      href: "https://jade-bunny-8dbc9d.netlify.app/",
      price: "",
    },
    {
      title: "OJT - Sample",
      href: "https://iridescent-bubblegum-ba3ab5.netlify.app/#/",
      price: "",
    },

  ];

  return (
    <div>
      <h1 className="py-5">
        Documents : <span className="font-bold">Call-09971204668</span>
      </h1>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
        {list.map((item, index) => (
          item.href.startsWith("http") ? (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
              <Card radius="none" className="cursor-pointer">
                <CardBody className="text-small">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-default-500">{item.price}</div>
                </CardBody>
              </Card>
            </a>
          ) : (
            <Link key={index} href={item.href}>
              <Card className="cursor-pointer">
                <CardBody className="text-small">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-default-500">{item.price}</div>
                </CardBody>
              </Card>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
