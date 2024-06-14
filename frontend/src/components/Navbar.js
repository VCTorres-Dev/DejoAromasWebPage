import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { DejoAromasLogo } from "./DejoAromasLogo";

export default function App() {
  return (
    <Navbar shouldHideOnScroll variant="sticky" className="bg-white shadow-md">
      <NavbarBrand>
        <DejoAromasLogo />
        <p className="font-bold text-lg ml-2">Dejo Aromas</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="primary" href="/" className="text-lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/catalogo-dama" className="text-lg">
            Catálogo Dama
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/catalogo-varon" className="text-lg">
            Catálogo Varón
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
