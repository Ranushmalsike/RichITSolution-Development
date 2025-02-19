import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../navbar";

describe("Navbar Component", () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contactus" },
  ];

  test("renders all navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    navigationLinks.forEach((link) => {
      const navLink = screen.getByRole("link", { name: link.name });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute("href", link.href);
    });
  });

  test("renders the profile menu with correct links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("img", { name: "Profile" })).toBeInTheDocument();
  });
});
