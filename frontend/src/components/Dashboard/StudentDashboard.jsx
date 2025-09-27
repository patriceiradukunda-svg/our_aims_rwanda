import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const [coursesRes, deadlinesRes] = await Promise.all([
        api.get('/api/courses/enrolled/'),
        api.get('/api/assessments/upcoming/')
      ]);
      setCourses(coursesRes.data);
      setUpcomingDeadlines(deadlinesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Our AIMS Rwanda - Student Portal</h1>
            <div className="flex items-center space-x-4">
              <span className="text-black">Welcome, {user?.first_name}</span>
              <img 
                src={user?.profile_photo || '/default-avatar.png'} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
            <h3 className="text-lg font-semibold text-black mb-2">Enrolled Courses</h3>
            <p className="text-3xl font-bold text-red-600">{courses.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
            <h3 className="text-lg font-semibold text-black mb-2">Upcoming Deadlines</h3>
            <p className="text-3xl font-bold text-red-600">{upcomingDeadlines.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
            <h3 className="text-lg font-semibold text-black mb-2">Average Grade</h3>
            <p className="text-3xl font-bold text-red-600">85%</p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{course.instructors.length} Instructors</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">Upcoming Deadlines</h2>
          <div className="bg-white rounded-lg shadow-sm">
            {upcomingDeadlines.map(deadline => (
              <div key={deadline.id} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-black">{deadline.title}</h4>
                    <p className="text-sm text-gray-600">{deadline.course_title}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-red-600 font-semibold">{deadline.due_date}</span>
                    <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
