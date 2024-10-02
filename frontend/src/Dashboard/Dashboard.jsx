// import React from 'react';
// import Header from './Header';
// import WelcomeBanner from './WelcomeBanner';
// import CourseOverview from './CourseOverview';
// import LearningPath from './Learningpath';
// import LearningTools from './Learningtools';
// import SupportSection from './Support';

// const Dashboard =({ user, packageName, progress, modules }) => {
//   return (
//     <div>
//       <Header />
//       <WelcomeBanner userName={user.name} />
//       <CourseOverview packageName={packageName} progress={progress} />
//       <LearningPath modules={modules} />
//       <LearningTools />
//       <SupportSection />
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import Header from './Header';
import WelcomeBanner from './WelcomeBanner';
import CourseOverview from './CourseOverview';
import LearningPath from './Learningpath';
import LearningTools from './Learningtools';
import SupportSection from './Support';

const Dashboard = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Learner'
  };

  // Mock package data
  const packageName = 'Pro Chess Mastery';
  const progress = 75; // Percentage of course completion
  const modules = [
    { title: 'Introduction to Chess', completed: true },
    { title: 'Chess Tactics', completed: false },
    { title: 'Endgame Strategies', completed: false },
  ];

  return (
    <section className="relative w-screen mx-auto">
    <div className='w-full'>
      
      <WelcomeBanner userName={user.name} />
      <CourseOverview packageName={packageName} progress={progress} />
      <LearningPath modules={modules} />
      <LearningTools />
      <SupportSection />
    </div>
    </section>
  );
};

export default Dashboard;
