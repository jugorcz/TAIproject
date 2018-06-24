package pl.edu.agh.wiet.taiproject.model.data;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TASK")
public class Task {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="status")
    @Enumerated(EnumType.STRING)
    private TaskStatus taskStatus;

    @Column(name="date")
    private Date date;

    @Column(name="user_id")
    private String userId;

    @Column(name="category")
    private String category;

    public Task() {}

    public Task(String name, TaskStatus taskStatus, Date date, String userId, String category) {
        this.name = name;
        this.taskStatus = taskStatus;
        this.date = date;
        this.userId = userId;
        this.category = category;
    }

    public Task(Task other) {
        this.name = other.name;
        this.taskStatus = other.taskStatus;
        this.date = other.date;
        this.userId = other.userId;
        this.category = other.category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TaskStatus getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(TaskStatus taskStatus) {
        this.taskStatus = taskStatus;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Task task = (Task) o;

        return id.equals(task.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}
