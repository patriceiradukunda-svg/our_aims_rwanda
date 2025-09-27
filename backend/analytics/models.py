from django.db import models
from users.models import User
from courses.models import Course

class StudentProgress(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='progress')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='student_progress')
    completion_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    last_accessed = models.DateTimeField(auto_now=True)
    time_spent_minutes = models.IntegerField(default=0)
    current_lesson = models.ForeignKey('courses.Lesson', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'student_progress'
        unique_together = ('student', 'course')

class EngagementEvent(models.Model):
    EVENT_TYPES = [
        ('login', 'User Login'),
        ('course_view', 'Course View'),
        ('lesson_complete', 'Lesson Complete'),
        ('quiz_attempt', 'Quiz Attempt'),
        ('assignment_submit', 'Assignment Submit'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='engagement_events')
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
    lesson = models.ForeignKey('courses.Lesson', on_delete=models.CASCADE, null=True, blank=True)
    metadata = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'engagement_events'
