import Image from 'next/image';


const teamMembers = [
  {
    category: 'Canada Board of Directors',
    members: [
      {
        name: 'Will Galvin',
        position: 'Chair',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/03/will-gavin.jpg',
      },
      {
        name: 'Adeem Younis',
        position: 'Trustee',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/03/Adeem-y.jpg',
      },
      {
        name: 'Sameena Qureishi',
        position: 'Trustee',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/03/saima-k.jpg',
      },
      {
        name: 'Omair Khan',
        position: 'Trustee',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/umer.png',
      },
    ],
  },
  {
    category: 'Leadership',
    members: [
      {
        name: 'Fawad Kalsi',
        position: 'Chief Executive Officer',
        email: 'fawad.kalsi@pennyappeal.ca',
        image: 'https://pennyappeal.ca/wp-content/uploads/2022/01/fawad_ceo_.jpg',
        quote: 'There is always a way',
      },
      {
        name: 'Rabea Soofi',
        position: 'Director of Programs',
        email: 'rabea.soofi@pennyappeal.ca',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Rabea-Soofi-Director-of-Programsnewnew.jpg',
        quote: 'Don’t take life too seriously',
      },
      {
        name: 'Reead Rahamut',
        position: 'Director of Finance',
        email: 'reead.rahamut@pennyappeal.ca',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Reead-Rahamut-Director-of-Financenewnewnew.jpg',
        quote: 'Welcome to the Wild West!',
      },
      {
        name: 'Hajira Khan',
        position: 'Director of Marketing',
        email: 'hajira.khan@pennyappeal.ca',
        image: 'https://pennyappeal.ca/wp-content/uploads/2023/11/img102.jpg',
      },
      {
        name: 'Owais Hikmat',
        position: 'Director of Development',
        email: 'owais.hikmat@pennyappeal.ca',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Owais-Hikmat-Director-of-Developmentnewnewnew.jpg',
        quote: 'Outside of your comfort zone is where magic happens.',
      },
      
    ],
  },
  {
    category: 'Programs',
    members: [
      {
        name: 'Ahmad Hamad',
        position: 'Programs Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Ahmad-Hamad-Programs-Managernewnew.jpg',
        quote: 'Education is our passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X',
      },
      {
        name: 'Musa Muhammad',
        position: 'Programs Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Musa-Muhammad-Programs-Managernewnewnew.jpg',
        quote: 'Up up and away!',
      },
      {
        name: 'Saba Durrani',
        position: 'Grants Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Saba-Durrani-Grants-Managernewnewnew.jpg',
      },
      {
        name: 'Jenan Ghaly',
        position: 'Program Support Officer',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/03/Jenan.png',
        quote: 'Never trust atoms; they make up everything',
      },
      {
        name: 'Nimco Mohamed',
        position: 'Community Social Development Officer',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Nimco-Mohamed-Community-Social-Development-Officernewnew.jpg',
        quote: 'Think outside the box',
      },
    ],
  },
  {
    category: 'Marketing & Communications',
    members: [
      {
        name: 'Umber Bhatti',
        position: 'Marketing Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Umber-Bhatti-Marketing-Managernewnew.jpg',
        quote: 'I like to have fun, but I don’t play games',
      },
      {
        name: 'Zia Yousaf',
        position: 'Web Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Zia-Yousaf-Web-Managernewnew.jpg',
        quote: 'It is what it is...',
      },
      {
        name: 'Tariq Jambocus',
        position: 'Marketing Specialist',
        image: 'https://pennyappeal.ca/wp-content/uploads/2023/11/Penny-Appeal-Staff-Illustrations_Tariq-Jambocus.png',
        quote: 'I like round oranges',
      },
      {
        name: 'Firaz Khan',
        position: 'Programs Communications Specialist',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Firaz-Khan-Programs-Communications-Specialistnewnew.jpg',
        quote: 'Designing like there\'s no ctrl+z',
      },
      {
        name: 'Mariam Hoda',
        position: 'Graphic Designer',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Mariam-Hoda-Graphic-Designernewnew.jpg',
        quote: 'It\'s all good',
      },
    ],
  },
  {
    category: 'Events',
    members: [
      {
        name: 'Sarika Verma',
        position: 'Events Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Sarika-Verma-Events-Managernewnew.jpg',
        quote: 'Don\'t trade integrity for approval; authenticity is the new cool!',
      },
      {
        name: 'Muhammad Mauthoor',
        position: 'Event Coordinator',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Muhammad-Mauthoor-Event-Coordinatornewnew.jpg',
        quote: 'Nobody gets left behind!',
      },
    ],
  },
  {
    category: 'Finance',
    members: [
      {
        name: 'Omar Awan',
        position: 'Finance Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Omar-Awan-Finance-Managernewnew.jpg',
        quote: 'Show me the MONEY!',
      },
      {
        name: 'Bakul Gandhi',
        position: 'Staff Accountant',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Bakul-Gandhi-Staff-Accountantnewnew.jpg',
        quote: 'Accounting is my bread, music is my butter',
      },
      {
        name: 'Jhon Bueron',
        position: 'Accounting Officer',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Jhon-Bueron-Accounting-Officernewnew.jpg',
        quote: 'Accounting is my bread, music is my butter',
      },
    ],
  },
  {
    category: 'Donor Care',
    members: [
      {
        name: 'Tazmin Keval',
        position: 'Donor Care Manager',
        image: 'https://pennyappeal.ca/wp-content/uploads/2022/03/Penny-Appeal-Staff-Illustrations_Tazmin-Keval.png',
        quote: 'Kindness is contagious',
      },
      {
        name: 'Mahmoud Abujabal',
        position: 'Sr. Donor Care Specialist',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Mahmoud-Abujabal-Sr.-Donor-Care-Specialistnewnewnew.jpg',
        quote: 'Let\'s do this!',
      },
      {
        name: 'Fabiha Tarannum',
        position: 'Donor Care Specialist',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/09/Untitled-design-3.png',
        quote: 'It’s only a crazy dream until you do it!',
      },
    ],
  },
  {
    category: 'Operations',
    members: [
      {
        name: 'Thilakshana Senthilvel',
        position: 'Executive Manager - CEO Office',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Thilakshana-Senthilvel-Executive-Manager-CEO-Officenewnew.jpg',
        quote: 'Kindness is contagious',
      },
      {
        name: 'Rayan Hilal',
        position: 'Office Administrator',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Rayan-Hilal-Office-Administratornewnew.jpg',
        quote: 'Let\'s do this!',
      },
      {
        name: 'Jasmeet Kaur',
        position: 'Operations and IT Coordinator',
        image: 'https://pennyappeal.ca/wp-content/uploads/2024/11/Untitled-design-22.png',
        quote: 'It’s only a crazy dream until you do it!',
      },
    ],
  },

  {
    category: 'Development',
    members: [
      {
        name: 'Shadi Sakr',
        position: 'Senior Manager of Special Projects and Strategic Relationships',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Shadi-Sakr-Senior-Manager-of-Special-Projects-and-Strategic-Relationshipsnewnewnew.jpg',
        quote: 'Kindness is contagious',
      },
      {
        name: 'Zubair Abid',
        position: 'Regional Manager - British Columbia',
        image: 'https://pennyappeal.ca/wp-content/uploads/2022/06/Penny-Appeal-Staff-Illustrations_Zubair-Abid.png',
        quote: 'Let\'s do this!',
      },
      {
        name: 'Alexandre Marier-Poulin',
        position: 'Regional Manager - Quebec',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Alexandre-Marier-Poulin-Regional-Manager-Quebecnewnew.jpg',
        quote: 'It’s only a crazy dream until you do it!',
      },
      {
        name: 'Mark Strong',
        position: 'Community Ambassador',
        image: 'https://pennyappeal.ca/wp-content/uploads/2020/10/Penny-Appeal-Staff-Illustrations_Mark.png',
        quote: 'It’s only a crazy dream until you do it!',
      },
      {
        name: 'Ayah Farhan',
        position: 'National Community Engagement Officer',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Ayah-Farhan-National-Community-Engagement-Officernewnew.jpg',
        quote: 'It’s only a crazy dream until you do it!',
      },
      {
        name: 'Ammar Syed',
        position: 'Fund Development Coordinator',
        image: 'https://pennyappeal.ca/wp-content/uploads/2025/02/Ammar-Syed-Fund-Development-Coordinatornewnew.jpg',
        quote: 'It’s only a crazy dream until you do it!',
      },
    ],
  },

  
];

export default function Team() {
  return (
    <div className='container '>
    <div className="container  mx-auto px-0 py-0 bg-gray-100">
      <h1 className="py-28 px-12 bg-[#ef7c00] text-4xl md:text-6xl font-bold text-center mb-10 text-white">Meet the team at Penny Appeal Canada</h1>
      {teamMembers.map((group) => (
        <div key={group.category} className='flex flex-col py-10 px-1 md:px-16'> 
    <div className="mb-12 ">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center text-gray-700">{group.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {group.members.map((member) => (
              <div key={member.name} className="text-center bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
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
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.position}</p>
                  { 'email' in member && member.email && (
  <p className="text-orange-500 mt-2 font-semibold">
    <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
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
    </div>
  );
}
