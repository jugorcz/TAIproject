package pl.edu.agh.wiet.taiproject.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.edu.agh.wiet.taiproject.model.data.Task;

import java.util.stream.Stream;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT task FROM Task task")
    Stream<Task> taskStream();
}
