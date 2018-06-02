package pl.edu.agh.wiet.taiproject.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.edu.agh.wiet.taiproject.model.data.Task;
import pl.edu.agh.wiet.taiproject.model.data.User;

import java.util.stream.Stream;

public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT task FROM Task task")
    Stream<User> taskStream();
}
