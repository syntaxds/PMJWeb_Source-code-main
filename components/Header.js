'use client';

import CardNav from '@/components/ui/CardNav';

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Page", href: "/about" },
        { label: "Gallery", ariaLabel: "Gallery Page", href: "/gallery" },
        { label: "Career", ariaLabel: "Career Page", href: "/career" }
      ]
    },
    {
      label: "Services",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Services", ariaLabel: "Services Page", href: "/services" },
        { label: "Clients", ariaLabel: "Clients Page", href: "/clients" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Contact", ariaLabel: "Contact Page", href: "/contact" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/logo.png"
      logoAlt="Company Logo"
      logoStyle={{ width: 100, height: 100 }} // Increase size here
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default App;