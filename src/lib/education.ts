
export interface EducationDataProps {
    title: string;
    organisation: {
      name: string;
      href?: string;
    };
    date: string;
    location: string;
  }


export const educationData: EducationDataProps[]=[
    {
        title: "Bachelor Of Engineering in Electronics and Telecommunication",
        organisation: {
          name: "Rizvi College Of Engineering",
          href: "https://eng.rizvi.edu.in/",
        },
        date: "2019-2023",
        location: "Bandra, Mumbai",
        },
      {
        title: "Higher Secondary School",
        organisation: {
          name: "St. Francis Junior College",
        },
        date: "2016-2018",
        location: "Borivali, Mumbai",
        },
      {
        title: "Secondary School Education",
        organisation: {
          name: "St. Francis High School",
        },
        date: "2017-2018",
        location: "Borivali, Mumbai",
      },
] as const