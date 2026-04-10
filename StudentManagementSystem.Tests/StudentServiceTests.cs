using Moq;
using StudentManagementSystem.Models;
using StudentManagementSystem.Repository;
using StudentManagementSystem.Services;
using Xunit;

namespace StudentManagementSystem.Tests
{
    public class StudentServiceTests
    {
        private readonly Mock<IStudentRepository> _mockRepo;
        private readonly StudentService _studentService;

        public StudentServiceTests()
        {
            _mockRepo = new Mock<IStudentRepository>();
            _studentService = new StudentService(_mockRepo.Object);
        }

        [Fact]
        public async Task GetAllStudentsAsync_ReturnsAllStudents()
        {
            var students = new List<Student>
            {
                new Student { Id = 1, Name = "Ayush", Email = "ayush@gmail.com", Age = 22, Course = "BCA" },
                new Student { Id = 2, Name = "Raj", Email = "raj@gmail.com", Age = 23, Course = "MCA" }
            };

            _mockRepo.Setup(repo => repo.GetAllAsync()).ReturnsAsync(students);

            var result = await _studentService.GetAllStudentsAsync();

            Assert.NotNull(result);
            Assert.Equal(2, result.Count());
        }

        [Fact]
        public async Task GetStudentByIdAsync_ReturnsStudent_WhenStudentExists()
        {
            var student = new Student { Id = 1, Name = "Ayush", Email = "ayush@gmail.com", Age = 22, Course = "BCA" };

            _mockRepo.Setup(repo => repo.GetByIdAsync(1)).ReturnsAsync(student);

            var result = await _studentService.GetStudentByIdAsync(1);

            Assert.NotNull(result);
            Assert.Equal("Ayush", result.Name);
        }

        [Fact]
        public async Task AddStudentAsync_ReturnsAddedStudent()
        {
            var student = new Student { Id = 1, Name = "Ayush", Email = "ayush@gmail.com", Age = 22, Course = "BCA" };

            _mockRepo.Setup(repo => repo.AddAsync(student)).ReturnsAsync(student);

            var result = await _studentService.AddStudentAsync(student);

            Assert.NotNull(result);
            Assert.Equal("Ayush", result.Name);
        }

        [Fact]
        public async Task DeleteStudentAsync_ReturnsTrue_WhenDeleted()
        {
            _mockRepo.Setup(repo => repo.DeleteAsync(1)).ReturnsAsync(true);

            var result = await _studentService.DeleteStudentAsync(1);

            Assert.True(result);
        }
    }
}