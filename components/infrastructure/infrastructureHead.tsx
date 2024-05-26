import React from "react";
import { Infrastructure } from "./infrastructureProps"; 

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    className="inline-block sm:m-1 sm:px-4 px-3 py-2 rounded transition duration-300 ease-in-out bg-lightsecondary no-underline font-header font-bold text-center"
  >
    {children}
  </a>
);

const InfrastructureHead: React.FC<{ infrastructure: Infrastructure }> = ({ infrastructure }) => {
  return (
    <div className="">
      <LinkButton href={String(infrastructure.links[0])}>Website</LinkButton>
      <LinkButton href={String(infrastructure.links[2])}>Docs</LinkButton>
      <LinkButton href={String(infrastructure.links[3])}>Explorer</LinkButton>
      <LinkButton href={String(infrastructure.links[4])}>GitHub</LinkButton>
      <LinkButton href={String(infrastructure.links[5])}>Social</LinkButton>
    </div>
  );
};

export default InfrastructureHead;