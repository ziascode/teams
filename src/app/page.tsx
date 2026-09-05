import Image from "next/image";

const teamMembers = [
  {
    category: "Canada Board of Directors",
    members: [
      {
        name: "Will Galvin",
        position: "Chair",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2024/03/will-gavin.jpg",
      },
      {
        name: "Adeem Younis",
        position: "Trustee",
        image: "https://pennyappeal.ca/wp-content/uploads/2024/03/Adeem-y.jpg",
      },
      {
        name: "Sameena Qureishi",
        position: "Trustee",
        image: "https://pennyappeal.ca/wp-content/uploads/2024/03/saima-k.jpg",
      },
      {
        name: "Omair Khan",
        position: "Trustee",
        image: "https://pennyappeal.ca/wp-content/uploads/2025/02/umer.png",
      },
    ],
  },
  {
    category: "Leadership",
    members: [
      {
        name: "Fawad Kalsi",
        position: "Chief Executive Officer",
        email: "fawad.kalsi@pennyappeal.ca",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2022/01/fawad_ceo_.jpg",
        quote: "There is always a way",
      },
      {
        name: "Reead Rahamut",
        position: "Director of Finance",
        email: "reead.rahamut@pennyappeal.ca",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/01/Possible2.png",
        quote: "Welcome to the Wild West!",
      },
      {
        name: "Owais Hikmat",
        position: "Director of Development",
        email: "owais.hikmat@pennyappeal.ca",
        image: "https://pennyappeal.ca/wp-content/uploads/2025/02/owais.jpg",
        quote: "Outside of your comfort zone is where magic happens.",
      },{
        name: "Ahmad Hamad",
        position: "Director of Programs",
                email: "ahmad.hamad@pennyappeal.ca",

        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Untitled-design-10.png",
        quote:
          "Education is our passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
      },
    ],
  },
  {
    category: "Programs",
    members: [
      
      {
        name: "Saba Durrani",
        position: "Programs Manager",
        image:
"https://pennyappeal.ca/wp-content/uploads/2026/08/Saba-PNG.png",      },

      {
        name: "Nimco Mohamed",
        position: "Senior Programs Officer",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Nimco-PNG.png",
        quote: "Think outside the box",
      },
      {
        name: "Jimmy Aung",
        position: "Program Advisor",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/09/Untitled-design.jpg",
        quote: "Think outside the box",
      }, 
      {
        name: "Jenan Ghaly",
        position: "Programs Support Officer",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Jenan-PNG.png",
        quote: "Think outside the box",
      },
    ],
  },
  {
    category: "Marketing & Communications",
    members: [
      {
        name: "Umber Bhatti",
        position: "Marketing Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Umber-PNG.png",
        quote: "I like to have fun, but I don’t play games",
      },
      {
        name: "Zia Yousaf",
        position: "Web Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Zia-PNG.png",
        quote: "It is what it is...",
      },
      {
        name: "Firaz Khan",
        position: "Programs Communications Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Firaz-PNG.png",
        quote: "Designing like there's no ctrl+z",
      },
       {
        name: "Jasmeet Kaur",
        position: "Web Developer",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Jasmeet-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },{
        name: "Sumit Yadav",
        position: "Marketing and Communication Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Sumit-PNG.png",
      },
      {
        name: "Sahar Askary",
        position: "Interim Marketing Lead",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Sahar-PNG.png",
      },
    ],
  },
  {
    category: "Finance",
    members: [
      {
        name: "Bakul Gandhi",
        position: "Accountant",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Bakul-PNG.png",
        quote: "Accounting is my bread, music is my butter",
      },{
        name: "Ananya Mahey",
        position: "Accounting Assistant",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Ananya-PNG.png",
      },
     
    ],
  },
  {
    category: "Donor Care",
    members: [
      {
        name: "Tazmin Keval",
        position: "Senior Manager – Major Gifts and Donor Relations",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Taz-PNG.png",
        quote: "Kindness is contagious",
      },
      {
        name: "Mahmoud Abujabal",
        position: "Sr. Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Mahmoud-PNG.png",
        quote: "Let's do this!",
      },
    
      {
        name: "Amtul Raheem",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Amtul-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Rafa Sidat",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Rafa-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      }, {
        name: "Labeeque Majeed",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Labeeque-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
    ],
  },
  {
    category: "Operations",
    members: [
      {
        name: "Shamniz Valdez",
        position: "Executive Assistant",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Shamniz-PNG.png",
      },
      {
        name: "Rayan Hilal",
        position: "Operations Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Rayan-PNG.png",
        quote: "Let's do this!",
      },
      {
        name: "Maresa Archibald",
        position: "Inventory & Operations Coordinator",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Maresa-PNG.png",
      },
     
    ],
  },

  {
    category: "Development",
    members: [
      {
        name: "Zubair Abid",
        position: "Regional Manager - Western Canada",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Zubair-PNG.png",
        quote: "Let's do this!",
      },
      {
        name: "Alexandre Marier-Poulin",
        position: "Regional Manager - Quebec",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Alex-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Hassan Hassan",
        position: "Regional Manager - Ontario",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Hassan-PNG.png",
      },
      {
        name: "Mohsin Khan",
        position: "Senior FD Specialist - British Columbia",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Mohsin-PNG.png",
      },
     
       {
        name: "Muhammad Mauthoor",
        position: "Influencer Relations & Partnerships Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Muhammad-PNG.png",
        quote: "Nobody gets left behind!",
      },
      {
        name: "Mark Strong",
        position: "Community Engagement Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Mark-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Ammar Syed",
        position: "Area Manager - Ontario",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Ammar-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Amaan Abbasi",
        position: "Fundraiser",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2026/08/Amaan-PNG.png",
        quote: "It’s only a crazy dream until you do it!",
      },
    ],
  },
];
export default function Team() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <h1 className="py-28 px-4 sm:px-8 md:px-12 bg-[#ef7c00] text-4xl md:text-6xl font-bold text-center mb-10 text-white">
        Meet the team at Penny Appeal Canada
      </h1>
      {teamMembers.map((group) => (
        <div
          key={group.category}
          className="flex flex-col py-10 px-4 sm:px-8 md:px-16"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center text-gray-700">
              {group.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="text-center bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden"
                >
                  <div className="w-full h-80 md:h-96 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {member.position}
                    </p>
                    {"email" in member && member.email && (
                      <p className="text-orange-500 mt-2 font-semibold">
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:underline"
                        >
                          {member.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
