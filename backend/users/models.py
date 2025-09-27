from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Administrator'),
        ('lecturer', 'Lecturer'),
        ('ta', 'Teaching Assistant'),
        ('student', 'Student'),
        ('guardian', 'Guardian'),
    ]
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    profile_photo = models.ImageField(upload_to='profiles/', null=True, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    bio = models.TextField(blank=True)
    locale = models.CharField(max_length=10, default='en')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'users'

class GuardianStudent(models.Model):
    guardian = models.ForeignKey(User, on_delete=models.CASCADE, related_name='wards')
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='guardians')
    relationship = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'guardian_students'
        unique_together = ('guardian', 'student')
