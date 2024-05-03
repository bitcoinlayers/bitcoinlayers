import React from "react";
import { Layer } from "./layerProps"; 

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
    className="inline-block sm:m-1 sm:px-4 px-3 py-2 rounded transition duration-300 ease-in-out bg-lightsecondary dark:bg-secondary no-underline font-header font-bold w-1/8 sm:w-1/6 text-center"
  >
    {children}
  </a>
);

const LayerHead: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <LinkButton href={String(layer.links[0])}>Website</LinkButton>
      <LinkButton href={String(layer.links[2])}>Docs</LinkButton>
      <LinkButton href={String(layer.links[3])}>Explorer</LinkButton>
      <LinkButton href={String(layer.links[4])}>GitHub</LinkButton>
      <LinkButton href={String(layer.links[5])}>Social</LinkButton>
    </div>
  );
};

export default LayerHead;