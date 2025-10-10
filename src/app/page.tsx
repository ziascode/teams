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
        name: "Rabea Soofi",
        position: "Director of Programs",
        email: "rabea.soofi@pennyappeal.ca",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/10/IMG_2363.jpg",
        quote: "Don’t take life too seriously",
      },
      {
        name: "Reead Rahamut",
        position: "Director of Finance",
        email: "reead.rahamut@pennyappeal.ca",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/08/Untitled-design-3.png",
        quote: "Welcome to the Wild West!",
      },
      {
        name: "Hajira Khan",
        position: "Director of Marketing",
        email: "hajira.khan@pennyappeal.ca",
        image: "https://pennyappeal.ca/wp-content/uploads/2023/11/img102.jpg",
      },
      {
        name: "Owais Hikmat",
        position: "Director of Development",
        email: "owais.hikmat@pennyappeal.ca",
        image: "https://pennyappeal.ca/wp-content/uploads/2025/02/owais.jpg",
        quote: "Outside of your comfort zone is where magic happens.",
      },
    ],
  },
  {
    category: "Programs",
    members: [
      {
        name: "Ahmad Hamad",
        position: "Programs Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Ahmad-Hamad-Programs-Managernewnew.jpg",
        quote:
          "Education is our passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
      },
      {
        name: "Saba Durrani",
        position: "Programs Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Saba-Durrani-Grants-Managernewnewnew.jpg",
      },

      {
        name: "Nimco Mohamed",
        position: "Community Social Development Officer",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Nimco-Mohamed-Community-Social-Development-Officernewnew.jpg",
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
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Umber-Bhatti-Marketing-Managernewnew.jpg",
        quote: "I like to have fun, but I don’t play games",
      },
      {
        name: "Zia Yousaf",
        position: "Web Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Zia-Yousaf-Web-Managernewnew.jpg",
        quote: "It is what it is...",
      },
      {
        name: "Tariq Jambocus",
        position: "Marketing Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2023/11/Penny-Appeal-Staff-Illustrations_Tariq-Jambocus.png",
        quote: "I like round oranges",
      },
      {
        name: "Firaz Khan",
        position: "Programs Communications Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Firaz-Khan-Programs-Communications-Specialistnewnew.jpg",
        quote: "Designing like there's no ctrl+z",
      },
       {
        name: "Jasmeet Kaur",
        position: "Web Developer",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/08/Untitled-design-31.png",
        quote: "It’s only a crazy dream until you do it!",
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
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Bakul-Gandhi-Staff-Accountantnewnew.jpg",
        quote: "Accounting is my bread, music is my butter",
      },
     
    ],
  },
  {
    category: "Donor Care",
    members: [
      {
        name: "Tazmin Keval",
        position: "Donor Care Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2022/03/Penny-Appeal-Staff-Illustrations_Tazmin-Keval.png",
        quote: "Kindness is contagious",
      },
      {
        name: "Mahmoud Abujabal",
        position: "Sr. Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Mahmoud-Abujabal-Sr.-Donor-Care-Specialistnewnewnew.jpg",
        quote: "Let's do this!",
      },
      {
        name: "Fabiha Tarannum",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/08/Untitled-design-32.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Maya Helal",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/06/Maya-Site.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Amtul Raheem",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/10/Penny-Appeal-Staff-Illustrations_Amtul-Raheem.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Dawoud Fayyaz",
        position: "Donor Care Specialist",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/10/Untitled-design-39.png",
        quote: "It’s only a crazy dream until you do it!",
      },
    ],
  },
  {
    category: "Operations",
    members: [
     
      {
        name: "Rayan Hilal",
        position: "Operations Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2024/05/rayan-hilal.png",
        quote: "Let's do this!",
      },
     
    ],
  },

  {
    category: "Development",
    members: [
      {
        name: "Zubair Abid",
        position: "Regional Manager - British Columbia",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2022/06/Penny-Appeal-Staff-Illustrations_Zubair-Abid.png",
        quote: "Let's do this!",
      },
      {
        name: "Alexandre Marier-Poulin",
        position: "Regional Manager - Quebec",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Alexandre-Marier-Poulin-Regional-Manager-Quebecnewnew.jpg",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Hassan Hassan",
        position: "Regional Manager - Ontario",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/07/pac-team-template-Hassan.png",
      },
     
       {
        name: "Muhammad Mauthoor",
        position: "Influencer Relations & Partnerships Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Muhammad-Mauthoor-Event-Coordinatornewnew.jpg",
        quote: "Nobody gets left behind!",
      },
      {
        name: "Mark Strong",
        position: "Community Engagement Manager",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2020/10/Penny-Appeal-Staff-Illustrations_Mark.png",
        quote: "It’s only a crazy dream until you do it!",
      },
      {
        name: "Ammar Syed",
        position: "Area Manager - Ontario",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/02/Ammar-Syed-Fund-Development-Coordinatornewnew.jpg",
        quote: "It’s only a crazy dream until you do it!",
      },
     
      {
        name: "Malak Gandhi",
        position: "Events Coordinator",
        image:
          "https://pennyappeal.ca/wp-content/uploads/2025/06/pac-team-template-malak.png",
        quote: "Nobody gets left behind!",
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
