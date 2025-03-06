import React from 'react';

const Footer = () => {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Solutions", "Pricing"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Documentation", "Contact"]
    }
  ];

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">Vyapar Sarathi</h3>
            <p className="text-gray-600">
              Transforming retail with unified customer identification.
            </p>
          </div>
          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-medium mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;