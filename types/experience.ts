export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string[];
  skills: string[];
  isLatest?: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Technical Support Intern',
    company: 'Honeywell',
    companyUrl: 'https://www.honeywell.com/',
    period: '2025 - Present',
    description: [
      'Assisted in logic creation for substations with a focus on secure and scalable network design. Gained exposure to real-world control systems and communication protocols relevant to control system'
    ],
    skills: ['C300 Controller', 'Scada', 'Modbus', 'OPC'],
    isLatest: true
  },
  {
    id: '2',
    role: 'Computer Vision Intern',
    company: 'Mignited',
    companyUrl: '#',
    period: '2024',
    description: [
      'Developed a machine learning model to detect and classify different types of vehicles in real-time. Worked on a real-time object detection system using YOLOv8 and OpenCV.'
    ],
    skills: ['YOLOv8', 'OpenCV', 'Python', 'Machine Learning']
  },
];
